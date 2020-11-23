import { useEffect, useRef } from 'react';

type Func = (ms: number) => void;

export const useInterval = (fn: Func, ms: number | null): void => {
  const handler = useRef<Func>();

  useEffect(() => {
    handler.current = fn;
  });

  useEffect(() => {
    if (ms !== null) {
      const id = setInterval(handler.current, ms);
      return () => clearInterval(id);
    }
  }, [ms]);
};
