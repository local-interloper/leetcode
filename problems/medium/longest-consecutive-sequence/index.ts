function longestConsecutive(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  let longest = 0;
  let current = 1;

  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return 1;
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    if (nums[i] === nums[i - 1] + 1) {
      current++;
      continue;
    }

    if (current > longest) {
      longest = current;
    }

    current = 1;
  }

  if (current > longest) {
    longest = current;
  }

  return longest;
}
