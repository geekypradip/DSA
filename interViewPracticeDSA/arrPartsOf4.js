/*question:You are given an array stored in a variable with the namearr
The size of the array is stored in a variable with the nameN
The value stored inNis always divisible by 4
You have to find the value of the equation -2*c1 + c2 + 2*c3 + c4, such that
The array is divided into 4 halves
c1 -> The sum of the first half of the array
c2 -> The sum of the second half of the array
c3 -> The sum of third half of the array
c4 -> The sum of the fourth half of the array */


let input = `8
1 2 3 4 5 6 7 8`;
input = input.split( "\n" );
let N = +input[ 0 ];
let arr = input[ 1 ].split( " " ).map( Number );
console.log( letFindTheValueOfEquation( arr, N ) );
// 2*c1 + c2 + 2*c3 + c4 this is equation
function letFindTheValueOfEquation( arr, n ) {
    let result = 0;
    let chunk = n / 4;
    let pointer = 0;
    for ( let i = 0; i < n; i+=chunk,pointer+=1 ) {
        let sum = Sum( i, chunk );
        if ( pointer % 2 === 0 )
            result += sum * 2;
        else
            result += sum
    }
return result;

    function Sum( start, chunk ) {
        let sum = 0;
        for ( let i = start; i < start + chunk; i++ ) {
            sum+=arr[ i ];
        }
        return sum;
    }
}
