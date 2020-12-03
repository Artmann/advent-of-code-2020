// With a grid as an input, find out how many times you would hit a tree(#)
// while moving from top to bottom.

function numberOfTreesEncountered(grid: string[][], [ movementX, movementY ]: number[]): number {
  let numberOfTreesEncountered = 0;
  let x = 0;

  for (let y = 0; y < grid.length; y += movementY) {
    const wrappedX = x % (grid[0].length);
    const character = grid[y][wrappedX];

    if (character === '#') {
      numberOfTreesEncountered += 1;
    }

    x += movementX;
  }

  return numberOfTreesEncountered;
}

export function puzzle1(input: string): number {
  const lines = input.split('\n').map(e => e.trim()).filter(Boolean);
  const grid = lines.map(line => line.split(''));

  return numberOfTreesEncountered(grid, [ 3, 1 ]);
}

export function puzzle2(input: string): number {
  const lines = input.split('\n').map(e => e.trim()).filter(Boolean);
  const grid = lines.map(line => line.split(''));

  return [
    [ 1, 1 ],
    [ 3, 1 ],
    [ 5, 1 ],
    [ 7, 1 ],
    [ 1, 2 ]
  ].reduce((carry, movement) => {
    return numberOfTreesEncountered(grid, movement) * carry;
  }, 1);
}
