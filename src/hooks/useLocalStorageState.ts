import { useCallback, useState } from 'react';
import { ZodType } from 'zod';

type UseLocalStorageStateProps<T> = {
  cacheKey: string;
  schema: ZodType<T>;
  initialValue: NoInfer<T>;
};

const CACHE_KEY_PREFIX = 'ffxiv-market-analyzer:' as const;

export function useLocalStorageState<T>({
  cacheKey: cacheKeyProp,
  schema,
  initialValue,
}: UseLocalStorageStateProps<T>): [T, (arg: T) => void] {
  const cacheKey = `${CACHE_KEY_PREFIX}${cacheKeyProp}`;
  const [state, setState] = useState<T>(() => {
    const value = localStorage.getItem(cacheKey);
    if (!value) return initialValue;

    try {
      const parsed = JSON.parse(value);
      return schema.parse(parsed);
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      setState(value);
      localStorage.setItem(cacheKey, JSON.stringify(value));
    },
    [cacheKey]
  );

  return [state, setValue];
}
