const evenlyDivided = (n) => {
  let count = 0;
  const nonModifiedN = n;
  while (n) {
    const digit = Math.floor(n % 10);
    const a = nonModifiedN % digit;
    if (digit !== 0 && a === 0) count++;
    n = Math.floor(n / 10);
  }
  return count;
};

// Test cases
console.log(evenlyDivided(2446)); // 1
