export default function add(...numbers) {
  if (!numbers.length) {
    return
  }
  if (numbers.some(number => typeof number !== 'number')) {
    throw new TypeError('Sorry')
  }
  return numbers.reduce((sum, number) => sum + number)
}

// same as:
// if (!numbers.length) return undefined

// const result = numbers.reduce((acc, curr) => acc + curr, 0)

// if (typeof result !== 'number')
//   throw new TypeError('Arguments are not numeric')

// return result

// old:
// if (a === undefined && b === undefined) return undefined
// if (a === undefined && typeof b === 'number') return b
// if (typeof a === 'number' && b === undefined) return a
// if (typeof a !== 'number' || typeof b !== 'number')
//   throw new TypeError('Arguments are not a Number')
// return a + b
