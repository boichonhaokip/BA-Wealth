import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  city: z.string().min(2, "City is required"),
  inquiryType: z.string().min(1, "Inquiry type is required"),
  amount: z.string().optional(),
  message: z.string().max(500).optional(),
  token: z.string().min(1, "Security verification is required"),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data: validatedData }: { data: z.infer<typeof contactSchema> }) => {
    const { token, ...formData } = validatedData;

    // 1. Verify Turnstile Token
    const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
    });

    const verifyData = await verifyResponse.json();
    if (!verifyData.success) {
      console.error("Turnstile verification failed:", verifyData);
      throw new Error("Security verification failed. Please try again.");
    }

    // 2. Initialize Resend
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Resend API key is missing. Please check server configuration.");
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, phone, city, inquiryType, amount, message } = formData;
    const toEmail = process.env.CONTACT_TO_EMAIL || "ashish@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    // 3. Send Email
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: `BA-Wealth <${fromEmail}>`,
      to: [toEmail],
      replyTo: email || undefined,
      subject: `New Loan Enquiry: ${inquiryType} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            .email-wrapper { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; background-color: #f1f5f9; padding: 40px 20px; }
            .content-box { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
            .header { background-color: #0d1b2a; padding: 30px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.025em; }
            .header p { margin: 8px 0 0; color: #94a3b8; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; }
            .body { padding: 40px; }
            .section-title { font-size: 13px; font-weight: 700; color: #0891b2; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 20px; }
            .data-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
            .data-table td { padding: 12px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
            .label { font-weight: 600; color: #64748b; width: 140px; font-size: 14px; }
            .value { color: #0f172a; font-size: 15px; }
            .highlight-box { background-color: #f8fafc; border-radius: 8px; padding: 25px; border-left: 4px solid #0891b2; margin-top: 20px; }
            .message-label { font-weight: 700; color: #334155; margin-bottom: 8px; display: block; font-size: 14px; }
            .message-text { color: #475569; margin: 0; white-space: pre-wrap; font-style: italic; }
            .footer { text-align: center; padding: 30px; font-size: 12px; color: #94a3b8; }
          </style>
        </head>
        <body>
          <div class="email-wrapper">
            <div class="content-box">
              <div class="header">
                <h1>BA-Wealth</h1>
                <p>Digital Loan Advisory Portal</p>
              </div>
              <div class="body">
                <div class="section-title">Client Information</div>
                <table class="data-table">
                  <tr>
                    <td class="label">Full Name</td>
                    <td class="value">${name}</td>
                  </tr>
                  <tr>
                    <td class="label">Phone</td>
                    <td class="value"><a href="tel:${phone}" style="color: #0891b2; text-decoration: none; font-weight: 600;">${phone}</a></td>
                  </tr>
                  <tr>
                    <td class="label">Email</td>
                    <td class="value">${email || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td class="label">City</td>
                    <td class="value">${city}</td>
                  </tr>
                </table>

                <div class="section-title">Requirement Details</div>
                <table class="data-table">
                  <tr>
                    <td class="label">Loan Type</td>
                    <td class="value" style="color: #0891b2; font-weight: 700;">${inquiryType}</td>
                  </tr>
                  <tr>
                    <td class="label">Loan Amount</td>
                    <td class="value">${amount || 'To be discussed'}</td>
                  </tr>
                </table>

                <div class="highlight-box">
                  <span class="message-label">Enquiry Message:</span>
                  <p class="message-text">${message || 'Client did not leave a specific message.'}</p>
                </div>
              </div>
              <div class="footer">
                &copy; ${new Date().getFullYear()} BA-Wealth Advisor. All rights reserved.<br>
                Submitted from Website on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (emailError) {
      console.error("Resend API Error:", emailError);
      throw new Error("Failed to send email. Please try again later.");
    }

    return { success: true, id: emailData?.id };
  });
