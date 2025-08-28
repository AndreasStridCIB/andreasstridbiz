import { useEffect, useState } from "react";

export function useDelayRender(delay: number = 0): boolean {
  const [shouldRender, setShouldRender] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) {
      setShouldRender(true);
      return;
    }
    const timer = setTimeout(() => setShouldRender(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return shouldRender;
}
