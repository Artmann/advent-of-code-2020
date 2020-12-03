import { puzzle1, puzzle2 } from '.';

describe('day3', () => {
  describe('puzzle1', () => {
    it('returns the number of trees encountered', () => {
      const input = `
        ..##.......
        #...#...#..
        .#....#..#.
        ..#.#...#.#
        .#...##..#.
        ..#.##.....
        .#.#.#....#
        .#........#
        #.##...#...
        #...##....#
        .#..#...#.#
      `;

      const value = puzzle1(input);

      expect(value).toEqual(7);
    });
  });

  it('returns the number of trees encountered', () => {
    const input = `
      ..##.......
      #...#...#..
      .#....#..#.
      ..#.#...#.#
      .#...##..#.
      ..#.##.....
      .#.#.#....#
      .#........#
      #.##...#...
      #...##....#
      .#..#...#.#
    `;

    const value = puzzle2(input);

    expect(value).toEqual(336);
  });
});
