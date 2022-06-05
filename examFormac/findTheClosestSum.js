let input=`2
4 1
-1 2 1 -4
3 1
0 0 0`;
input=input.split("\n");
let t=+input[0];
let pos=1;
for(let i=0;i<t;i++,pos+=2){
    let [arrSize,x]=input[pos].split(" ").map(Number);
    let arr=input[pos+1].split(" ").map(Number)
    let result=letFindSum(arr,x)
    result===Number.MAX_SAFE_INTEGER?console.log(0):console.log(result)
    
}

function letFindSum(arr, x)
{
	arr.sort((a, b) => a - b);
	let maxSum = Number.MAX_SAFE_INTEGER;
	
	for (let i = 0; i < arr.length - 2; i++)
	{

		let left = i + 1, right = arr.length - 1;

		while (left < right) {

			let sum = arr[i] + arr[left] + arr[right];

			if (Math.abs(1*x - sum) < Math.abs(1*x - maxSum))
			{
				maxSum = sum;
			}

			if (sum > x) {
				right--;
			}

			else {
				left++;
			}
		}
	}

	return maxSum;
}

// Driver code
	// let arr = [ -1, 2, 1, -4 ];
	// let x = 1;
	// document.write(letFindSum(arr, x));
