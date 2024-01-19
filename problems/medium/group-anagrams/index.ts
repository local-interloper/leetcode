function groupAnagrams(strs: string[]): string[][] {
  const anagrams: Map<string, string[]> = new Map();

  for (const word of strs) {
    const hash = word.split("").sort().join("");

    if (anagrams.has(hash)) {
      anagrams.get(hash)!.push(word);
      continue;
    }

    anagrams.set(hash, [word]);
  }

  return Array.from(anagrams.values());
}