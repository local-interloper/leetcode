function twoSum(nums: number[], target: number): number[] {
  for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums.length; j++) {
      const a = nums[i];
      const b = nums[j];
      if(a + b == target && i !== j) {
        return [i, j];
      }
    }
  }

  return [0, 0]
}