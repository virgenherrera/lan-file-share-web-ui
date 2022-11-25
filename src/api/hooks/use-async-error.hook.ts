import { useCallback, useState } from 'react';

export function useAsyncError() {
  const [, setError] = useState();

  return useCallback(
    (e: unknown) => {
      setError(() => {
        throw e;
      });
    },
    [setError],
  );
}
