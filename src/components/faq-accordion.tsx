import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/mock-data";

export function FaqAccordion({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <Accordion type="single" collapsible className="w-full divide-y divide-border surface-card px-2 sm:px-6">
      {items.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-0">
          <AccordionTrigger className="text-left font-display font-medium text-base text-foreground py-5 hover:no-underline cursor-pointer">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] pb-5">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}