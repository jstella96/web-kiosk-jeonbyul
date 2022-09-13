import { useEffect, useState } from 'react';

const ONE_SEC = 1000;

export const useTimer = ({ seconds, onTimeout }: { seconds: number; onTimeout: () => void }) => {
  const [time, setTime] = useState<number>(seconds);

  useEffect(() => {
    const startTimer = () => {
      const countDown = () => {
        setTime((prev) => prev - 1);
      };
      const timerId = setInterval(countDown, ONE_SEC);
      return timerId;
    };

    const timerId = startTimer();
    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      onTimeout();
    }
  }, [time, onTimeout]);

  return String(time).padStart(2, '0');
};
