var containsDuplicate = function (nums) {
  let seen = {};

  for (let i of nums) {
    if (seen[i] != undefined) return true;
    seen[i] = true;
  }

  return false;
};

console.log(containsDuplicate([3, 3]));
// console.log(containsDuplicate([1000000000, 1000000000, 11]));
