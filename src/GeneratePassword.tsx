export const CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}<>?"

const filterChars = (pattern: RegExp): ReadonlyArray<string> =>
  CHARSET.split("").filter(c => pattern.test(c))

export const generatePassword = (
  length: number,
  opts: { upper: boolean; lower: boolean; symbols: boolean }
): string => {

  const groups: ReadonlyArray<ReadonlyArray<string>> = [
    opts.upper ? filterChars(/[A-Z]/) : [],
    opts.lower ? filterChars(/[a-z]/) : [],
    opts.symbols ? filterChars(/[^a-zA-Z0-9]/) : [],
  ]

  const pool = groups.flat()

  if (pool.length === 0) return ""

  return Array.from({ length }, () => {
    const index = Math.floor(Math.random() * pool.length)
    return pool[index]
  }).join("")
}
