/* eslint-env jest */
import { getStdDev, getMean, getMedian } from '../math';

describe('getMean', () => {
  it('returns the mean of an array of numbers', () => {
    expect(getMean([2, 6, 1])).toEqual(3);
  });
});

describe('getMedian', () => {
  it('returns the median of an array of numbers', () => {
    expect(getMedian([10, 4, 3, 1])).toEqual(3.5);
  });
});

describe('getStdDev', () => {
  it('returns the standard deviation of an array of numbers', () => {
    expect(Math.floor(getStdDev([10, 12, 4, 26, 1]) * 100) / 100).toEqual(8.66);
  });
});
