import { useState, useEffect, useRef, useCallback } from "react";

const useCountdown = ({ initialSec, onEnd }) => {
  const [timeLeft, setTimeLeft] = useState(initialSec);
  const timerRef = useRef(null);

  const startCountdown = useCallback(() => {
    if (timerRef?.current) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          onEnd?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [onEnd]);

  const stopCountdown = useCallback(() => {
    if (timerRef?.current) {
      clearInterval(timerRef?.current);
      timerRef.current = null;
    }
  }, []);

  const resetCountdown = useCallback(() => {
    stopCountdown();
    setTimeLeft(initialSec);
  }, [stopCountdown, initialSec]);

  useEffect(() => {
    setTimeLeft(initialSec);
    return () => stopCountdown();
  }, [initialSec, stopCountdown]);

  return {
    timeLeft,
    startCountdown,
    stopCountdown,
    resetCountdown,
  };
};

export default useCountdown;
