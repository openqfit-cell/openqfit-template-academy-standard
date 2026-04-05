/**
 * CountUp.tsx
 * --------------------------------------------------
 * 숫자 또는 숫자형 문자열을 자연스럽게 카운트업 표시하는 공통 컴포넌트입니다.
 */
import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

type CountUpProps = {
  value: string; // "49만원", "99만원"
};

export function CountUp({ value }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // 숫자 추출
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");

    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const duration = 1200;
    const steps = 30;
    const increment = numericValue / steps;
    let current = 0;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      current = Math.min(numericValue, increment * frame);

      const formatted =
        numericValue % 1 !== 0
          ? current.toFixed(1)
          : Math.round(current).toLocaleString();

      setDisplayValue(formatted + suffix);

      if (frame >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}