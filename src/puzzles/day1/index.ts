// We are looking for the two entries that are adding up to 2020.
// Given that a + b = 2020 we know that we know that if we have a,
// b has to exists in our array to the correct answer.
// Instead of using `includes`, we use a map for faster lookups.
function findNumbersThatAddsUpTo(sum: number, numbers: number[]): [ number, number ] {
  const memory: { [ index: number ]: boolean } = {};

  for (let i = 0; i < numbers.length; i++) {
    const a = numbers[i];
    const b = sum - a;

    if (memory[b]) {
      return [ a, b ];
    }

    memory[a] = true;
  }

  return [ 0, 0 ];
}

export function puzzle1(input: string): number {
  const numbers = input.split('\n').map(e => e.trim()).filter(Boolean).map(s => parseInt(s, 10));

  const [ a, b ] = findNumbersThatAddsUpTo(2020, numbers);

  return a * b;
}

export function puzzle2(input: string): number {
  const numbers = input.split('\n').map(e => e.trim()).filter(Boolean).map(s => parseInt(s, 10)).sort().reverse();

  for (let i = 0; i < numbers.length; i++) {
    const a = numbers[i];
    const [ b, c ] = findNumbersThatAddsUpTo(2020 - a, numbers);

    if ( a + b + c === 2020) {
      return a * b * c;
    }
  }

  return -1;
}
