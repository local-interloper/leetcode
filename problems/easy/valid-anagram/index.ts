const createCharMap = (s: string): Map<string, number> => {
  const map = new Map();

  for (const char of s) {
    if (!map.has(char)) {
      map.set(char, 1);
      continue;
    }

    map.set(char, map.get(char) + 1);
  }

  return map;
};

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const a = createCharMap(s);
  const b = createCharMap(t);

  for (const key of [...a.keys(), ...b.keys()]) {
    if ((a.get(key) || 0) !== (b.get(key) || 0)) {
      return false;
    }
  }

  return true;
}
