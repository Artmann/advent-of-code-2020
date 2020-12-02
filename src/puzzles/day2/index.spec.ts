import { puzzle1, puzzle2 } from '.';

describe('day2', () => {
  describe('puzzle1', () => {
    it('returns the number of valid passwords', () => {
      const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
3-7 l: helloworld`;

      const value = puzzle1(input);

      expect(value).toEqual(3);
    });
  });

  describe('puzzle2', () => {
    it('returns the number of valid passwords', () => {
      const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
3-7 l: helloworld`;

      const value = puzzle2(input);

      expect(value).toEqual(2);
    });
  });
});
