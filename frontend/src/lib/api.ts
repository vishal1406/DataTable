import { useState, useCallback } from "react";

type Fetcher<T, U> = (args: U) => Promise<T>

interface RefetchOptions<T, U> {
  args: U;
  onSuccess?: (data: T) => void;
  onError?: (err: any) => void;
}

export function useApi<T, U>(fetcher: Fetcher<T, U>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  const refetch = useCallback(async ({ args, onSuccess, onError }: RefetchOptions<T, U>) => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetcher(args)
      setData(result)
      onSuccess?.(result)
      return result
    } catch (err) {
      setError(err)
      onError?.(err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [fetcher])

  return { data, loading, error, refetch }
}

