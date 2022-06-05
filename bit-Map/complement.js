let input = `3
5
1
2147483648`;
input = input.split( '\n' );
let T = +input[ 0 ];
for ( let i = 1; i <= T; i++ ){
    let res = letFindcomplement( +input[ i ] );

        console.log( res);

}
function letFindcomplement(n) {
    var mask = Math.pow(2, n.toString(2).length) - 1;
    return ~n & mask;
 }
