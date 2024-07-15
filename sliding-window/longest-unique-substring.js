const findLongestUniqueSubstring = (s) => {
  let max = 0;
  let start = 0;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    const key = s[i];
    if (map[key] >= start) {
      start = map[key] + 1;
    }
    map[key] = i;
    max = Math.max(max, i - start + 1);
  }
  return max;
};

console.log(findLongestUniqueSubstring("abcabcbb")); //3
console.log(findLongestUniqueSubstring("bbbbb")); // Output: 1
