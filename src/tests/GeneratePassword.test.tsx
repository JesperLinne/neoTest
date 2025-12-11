import { describe, test, expect } from 'vitest'
import { generatePassword } from '../utils/GeneratePassword'
import { CHARSET } from '../utils/constants'

describe('generatePassword', () => {
  test('returns a password with correct length', () => {
    const result = generatePassword(1, {
      upper: true,
      lower: true,
      symbols: false,
    })

    expect(result.length).toBe(1)
  })

  test('returns empty string when all options are false', () => {
    const result = generatePassword(10, {
      upper: false,
      lower: false,
      symbols: false,
    })

    expect(result).toBe('')
  })

  test('includes symbols when enabled', () => {
    const result = generatePassword(5, {
      upper: false,
      lower: false,
      symbols: true,
    })

    expect(/[^a-zA-Z0-9]/.test(result)).toBe(true)
  })

  test('only uses characters from CHARSET', () => {
    const passwordTypes = generatePassword(10, {
      upper: true,
      lower: true,
      symbols: true,
    })

    for (const char of passwordTypes) {
      expect(CHARSET.includes(char)).toBe(true)
    }
  })
})
