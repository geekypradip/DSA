// Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

// Do this in linear time and in-place.

// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

//not optimized
const rgbSegregate = (arr) => {
  const obj = {
    R: 0,
    G: 0,
    B: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]]++;
  }
  const result = [];
  for (let i = 0; i < obj.R; i++) {
    result.push("R");
  }
  for (let i = 0; i < obj.G; i++) {
    result.push("G");
  }
  for (let i = 0; i < obj.B; i++) {
    result.push("B");
  }
  return result;
};

//optimized
// This problem can be solved using the Dutch National Flag problem solution. The idea is to use three pointers to separate the different types of elements.

//explain
/*
This function works by maintaining three pointers: low, mid, and high. The low pointer is used to track the position where the next 'R' character should be placed, the mid pointer is used to track the position where the next 'G' character should be placed, and the high pointer is used to track the position where the next 'B' character should be placed.

The function iterates over the array, and for each character, it does the following:

If the character is 'R', it swaps the character at the mid pointer with the character at the low pointer, and then increments both the low and mid pointers.
If the character is 'G', it doesn't need to do anything (since 'G' is in the correct position), so it just increments the mid pointer.
If the character is 'B', it swaps the character at the mid pointer with the character at the high pointer, and then decrements the high pointer (but doesn't increment the mid pointer, since the new character at the mid position hasn't been processed yet).
This ensures that all 'R' characters are placed before all 'G' characters, and all 'G' characters are placed before all 'B' characters, thus segregating the array as required. The time complexity of this function is O(n), where n is the length of the array, and it uses O(1) extra space, so it meets the problem's requirements.
*/
const rgbSegregateDNF = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    switch (arr[mid]) {
      case "R":
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
        break;
      case "G":
        mid++;
        break;
      case "B":
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
        break;
    }
  }
  return arr;
};

console.log(rgbSegregate(["G", "B", "R", "R", "B", "R", "G"]));
console.log(rgbSegregateDNF(["G", "B", "R", "R", "B", "R", "G"]));
