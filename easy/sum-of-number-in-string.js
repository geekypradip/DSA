function findSum(str) {
  let numberflag = false;
  let sum = 0;
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      if (numberflag) {
        arr[arr.length - 1] = arr[arr.length - 1] * 10 + Number(str[i]);
      } else arr.push(Number(str[i]));

      numberflag = true;
    } else {
      numberflag = false;
    }
  }

  console.log(arr);
}

findSum("1a34b70u64656fddw454n6sb7bc23");
