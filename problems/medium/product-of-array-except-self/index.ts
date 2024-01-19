function productExceptSelf(nums: number[]): number[] {
  const zeroCount = nums.reduce((a, c) => c === 0 ? a + 1 : a, 0);
  const product = nums.reduce((a, c) => c === 0 ? a : a * c, 1);

  if (zeroCount === 1) {

    return nums.map((n) => n === 0 ? product : 0);
  }

  if (zeroCount > 1) {
    return new Array(nums.length).fill(0);
  }

  return nums.map((n) => product / n);
}