import { describe, test, expect } from 'vitest'
import { divide } from './divide'

describe('divide function', () => {
  test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5)
  })

  test('returns null when dividing by zero', () => {
    expect(divide(10, 0)).toBeNull()
  })
})
