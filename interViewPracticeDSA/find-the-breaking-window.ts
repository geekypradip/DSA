// Given an array of integers out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted. For example, given [3, 7, 5, 6, 9], you should return (1, 3).

// The idea is to find the first element that is greater than the next element. This is the first element of the window. Then, find the first element that is smaller than the next element, which is the end of the window.

const findTheBreakingWindow = (arr: number[]) => {
  let left = 0;
  let right = arr.length - 1;

  let leftCheck = true;
  let rightCheck = true;
  while (left < right) {
    if (arr[left] < arr[left + 1] && leftCheck) {
      left++;
    } else {
      leftCheck = false;
    }

    if (arr[right] > arr[right - 1] && rightCheck) {
      right--;
    } else {
      rightCheck = false;
    }

    if (!leftCheck && !rightCheck) {
      break;
    }
  }

  if (left < right) return [left, right];
  return [-1, -1];
};

console.log(findTheBreakingWindow([5, 6, 7, 9, 0, 2, 3, 5, 6, 3, 4])); // [1, 3]
