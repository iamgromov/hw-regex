import Validator from '../validator';

const validator = new Validator();

test.each([
  ['dfsbfgfjvbdrhjbfgbbfggv', true],
  ['sdgfdfghfhgf683_-df', true],
  ['sdgfdfghfhgf68325__-df', false],
  ['1ddfgghjjkhjhjdfsdf', false],
  ['_dfgggr-xhfgfdgj', false],
  ['dfgggr-xhfgfdgj88', false],
  ['-dfgdfggfd543fgdfgfd', false],
])('check validateUsername function', (username, expected) => {
  const result = validator.validateUsername(username);
  expect(result).toBe(expected);
});
