import { useState, useCallback } from "react"

type Fetcher<T, U> = (args: U) => Promise<T>

export function useApi<T, U>(fetcher: Fetcher<T, U>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  const refetch = useCallback(async (args: U) => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetcher(args)
      setData(result)
      return result
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [fetcher])

  return { data, loading, error, refetch }
}

