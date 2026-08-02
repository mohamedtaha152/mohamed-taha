"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type CountUpProps = {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  suffix = "",
  prefix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(from, to, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        setCount(value);
      },
    });

    return () => controls.stop();
  }, [inView, from, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(count)}
      {suffix}
    </span>
  );
}