import { puzzle1, puzzle2 } from '.';

describe('day1', () => {
  describe('puzzle1', () => {
    it('returns the product of the two numbers that sums to 2020', () => {
      const input = `
        1721
        979
        366
        299
        675
        1456
      `;

      const value = puzzle1(input);

      expect(value).toEqual(514579);
    });
  });

  describe('puzzle2', () => {
    it('returns the product of the three numbers that sums to 2020', () => {
      const input = `
        1721
        979
        366
        299
        675
        1456
      `;

      const value = puzzle2(input);

      expect(value).toEqual(241861950);
    });
  });
});
