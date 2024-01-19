function productExceptSelf(nums: number[]): number[] {
  const product = nums.reduce((a, c) => a * c, 1);
  return nums.map((n, i) => {
      if (n !== 0) return product / n;

      return nums.reduce((a, c, j) => i === j ? a : a * c, 1);
    }
  );
}

console.log(productExceptSelf([1, 2, 3, 4]));