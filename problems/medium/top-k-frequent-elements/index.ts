type FrequencyMap = Map<number, { n: number, count: number }>;

const newFrequencyMap = (nums: number[]): FrequencyMap => {
  const map: FrequencyMap = new Map();

  for (const n of nums) {
    map.set(n, {
      n: n,
      count: (map.get(n)?.count || 0) + 1
    });
  }

  return map;
};

function topKFrequent(nums: number[], k: number): number[] {
  return Array.from(newFrequencyMap(nums).values())
    .sort((a, b) => b.count - a.count)
    .map(e => e.n)
    .slice(0, k);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 2, 2, 2, 3], 2));

