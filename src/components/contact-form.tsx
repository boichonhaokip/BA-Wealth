import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitContactForm } from "@/lib/contact-action";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit number")
    .regex(/^[+0-9 ]+$/, "Digits only"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  city: z.string().min(2, "City required"),
  inquiryType: z.string().min(1, "Please choose one"),
  amount: z.string().optional(),
  message: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

const inquiryTypes = [
  "Home Loan",
  "Personal Loan",
  "Business Loan",
  "Loan Against Property",
  "Car Loan",
  "Balance Transfer",
  "Top-up Loan",
  "Other / Not sure yet",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { inquiryType: "" },
  });

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    if (!token) {
      setError("Please complete the security verification.");
      return;
    }
    setError(null);
    try {
      const result = await submitContactForm({
        data: { ...data, token },
      });

      if (!result.success) {
        throw new Error("Failed to submit request");
      }

      setSubmitted(true);
      reset({ inquiryType: "" });
      setToken(null);
      turnstileRef.current?.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      console.error("Submission error:", err);
      setError(err.message || "Something went wrong. Please try again.");
      turnstileRef.current?.reset();
      setToken(null);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.name?.message}>
          <Input placeholder="e.g. Aarav Sharma" {...register("name")} />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <Input placeholder="+91 98xxxxxx" inputMode="tel" {...register("phone")} />
        </Field>
        <Field label="Email (optional)" error={errors.email?.message}>
          <Input type="email" placeholder="you@email.com" {...register("email")} />
        </Field>
        <Field label="City" error={errors.city?.message}>
          <Input placeholder="Mumbai" {...register("city")} />
        </Field>
        <Field label="Inquiry Type" error={errors.inquiryType?.message}>
          <Select
            value={watch("inquiryType")}
            onValueChange={(v: string) => setValue("inquiryType", v, { shouldValidate: true })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose a loan type" />
            </SelectTrigger>
            <SelectContent>
              {inquiryTypes.map((i) => (
                <SelectItem key={i} value={i}>
                  {i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Required Amount (optional)">
          <Input placeholder="e.g. ₹ 50 Lakhs" {...register("amount")} />
        </Field>
      </div>
      <Field label="Tell us briefly about your requirement (optional)">
        <Textarea
          rows={4}
          placeholder="Share your income profile, property details or anything specific."
          {...register("message")}
        />
      </Field>

      <div className="flex justify-center md:justify-start pt-2">
        <Turnstile
          ref={turnstileRef}
          siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || ""}
          onSuccess={(t) => setToken(t)}
          onExpire={() => setToken(null)}
          onError={() => setToken(null)}
        />
      </div>

      {error && (
        <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md text-destructive text-sm font-medium">
          {error}
        </div>
      )}

      <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
        <p className="text-xs text-muted-foreground max-w-md">
          By submitting, you agree to be contacted regarding your loan inquiry. Your information
          is handled confidentially and never shared without consent.
        </p>
        <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending…
            </>
          ) : submitted ? (
            <>
              <CheckCircle2 className="size-4" /> enquiry submitted
            </>
          ) : (
            "Request Callback"
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}