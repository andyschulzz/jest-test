import add from './add'

describe('add', () => {
  it('adds two numbers', () => {
    const result = add(1, 2)
    expect(result).toBe(3)
  })
  it('throws an error if called with strings', () => {
    expect(() => {
      add('one', 'two')
    }).toThrow()
  })
  it('returns number if only one number provided', () => {
    // const result = add(1)
    // expect(result).toBe(1)
    expect(add(42)).toBe(42)
  })
  it('throws if the single argument is not a number', () => {
    expect(() => {
      add('Klaus')
    }).toThrow()
  })
  it('returns undefined if called without arguments', () => {
    // const result = add(undefined, undefined)
    // expect(result).toBe(undefined)
    expect(add()).toBe(undefined)
  })
  it('returns all numbers if called with more than two arguments', () => {
    expect(add(1, 2, 3)).toBe(6)
  })
})
