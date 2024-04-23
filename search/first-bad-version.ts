const isBadVersion = (version: number) => {
  return version >= 4;
};

/**
 *
 * @param n
 * @returns   The first bad version
 * @description You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad. Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
 * @method findFirstBadVersion  The function works by maintaining two pointers: left and right. The left pointer is used to track the position where the next bad version should be placed, and the right pointer is used to track the position where the next good version should be placed. The function iterates over the versions, and for each version, it does the following:
 */

const firstBadVersion = (n: number) => {
  let left = 1;
  let right = n;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (isBadVersion(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(firstBadVersion(5)); // 4
