function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>();

  for (const e of nums) {
    if (set.has(e)) {
      return true;
    }

    set.add(e);
  }

  return false;
}