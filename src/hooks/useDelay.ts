import { useCallback, useRef } from "react";

const useDelay = (delay: number) => {
  const shouldWait = useRef(false);

  const throttledCallback = useCallback(
    (callback: () => void) => {
      if (shouldWait.current) return;
      else {
        shouldWait.current = true;
        console.log("Executing callback");
        callback();
        setTimeout(() => {
          shouldWait.current = false;
        }, delay);
      }
    },
    [delay]
  );

  return throttledCallback;
};

export default useDelay;
