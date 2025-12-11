import { CHARSET } from './constants'

const filterChars = (pattern: RegExp): ReadonlyArray<string> =>
  CHARSET.split('').filter((char) => pattern.test(char))

export const generatePassword = (
  length: number,
  options: { upper: boolean; lower: boolean; symbols: boolean },
): string => {
  const groups: ReadonlyArray<ReadonlyArray<string>> = [
    options.upper ? filterChars(/[A-Z]/) : [],
    options.lower ? filterChars(/[a-z]/) : [],
    options.symbols ? filterChars(/[^a-zA-Z0-9]/) : [],
  ]

  const passwordGroup = groups.flat()

  if (passwordGroup.length === 0) return ''

  return Array.from({ length }, () => {
    const index = Math.floor(Math.random() * passwordGroup.length)
    return passwordGroup[index]
  }).join('')
}
