import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fmt = (n: number) =>
  "₹ " + Math.round(n).toLocaleString("en-IN");

export function EmiCalculator() {
  const [amount, setAmount] = useState(2500000); // ₹25L
  const [rate, setRate] = useState(8.75);
  const [years, setYears] = useState(20);

  const { emi, totalInterest, totalPayable } = useMemo(() => {
    const P = amount;
    const r = rate / 12 / 100;
    const n = years * 12;
    if (P <= 0 || r <= 0 || n <= 0)
      return { emi: 0, totalInterest: 0, totalPayable: 0 };
    const pow = Math.pow(1 + r, n);
    const emi = (P * r * pow) / (pow - 1);
    const totalPayable = emi * n;
    return {
      emi,
      totalInterest: totalPayable - P,
      totalPayable,
    };
  }, [amount, rate, years]);

  return (
    <div className="surface-card p-6 md:p-8">
      <div className="flex items-center gap-3">
        <div className="grid place-items-center h-11 w-11 rounded-xl bg-[color-mix(in_oklab,var(--teal)_14%,white)] text-[var(--teal)] shrink-0">
          <Calculator className="size-5" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display font-semibold text-lg text-foreground">
            EMI Calculator
          </h3>
          <p className="text-xs text-muted-foreground">
            Estimate your monthly EMI instantly. Adjust the sliders below.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5">
        <SliderField
          label="Loan Amount"
          value={amount}
          display={fmt(amount)}
          min={100000}
          max={50000000}
          step={50000}
          onChange={setAmount}
          inputSuffix="₹"
        />
        <SliderField
          label="Interest Rate"
          value={rate}
          display={`${rate.toFixed(2)} %`}
          min={6}
          max={20}
          step={0.05}
          onChange={setRate}
          decimals={2}
        />
        <SliderField
          label="Tenure (Years)"
          value={years}
          display={`${years} yrs`}
          min={1}
          max={30}
          step={1}
          onChange={setYears}
        />
      </div>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <ResultCard label="Monthly EMI" value={fmt(emi)} highlight />
        <ResultCard label="Total Interest" value={fmt(totalInterest)} />
        <ResultCard label="Total Payable" value={fmt(totalPayable)} />
      </div>

      <p className="mt-4 text-[11px] text-muted-foreground leading-relaxed">
        Indicative calculation. Actual EMI depends on lender, processing fees and
        applicable charges. Share your profile for an exact quote.
      </p>
    </div>
  );
}

function SliderField({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
  decimals = 0,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  decimals?: number;
  inputSuffix?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <Label className="text-sm font-medium text-foreground">{label}</Label>
        <div className="min-w-0">
          <Input
            type="number"
            value={Number.isFinite(value) ? Number(value.toFixed(decimals)) : ""}
            onChange={(e) => {
              const v = parseFloat(e.target.value);
              if (!isNaN(v)) onChange(Math.min(max, Math.max(min, v)));
            }}
            className="h-9 w-32 text-right text-sm font-semibold"
          />
        </div>
      </div>
      <Slider
        className="mt-3"
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => onChange(v[0] ?? min)}
      />
      <div className="mt-1.5 flex justify-between text-[11px] text-muted-foreground">
        <span>{display}</span>
        <span>max {label.includes("Amount") ? fmt(max) : `${max}${label.includes("Rate") ? "%" : " yrs"}`}</span>
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={
        "rounded-xl p-4 border " +
        (highlight
          ? "bg-[var(--navy)] text-white border-transparent shadow-[var(--shadow-elevated)]"
          : "bg-[var(--surface-alt)] border-border text-foreground")
      }
    >
      <div
        className={
          "text-[11px] uppercase tracking-wide font-semibold " +
          (highlight ? "text-white/70" : "text-muted-foreground")
        }
      >
        {label}
      </div>
      <div className="mt-1 font-display text-xl md:text-2xl font-semibold tracking-tight">
        {value}
      </div>
    </motion.div>
  );
}