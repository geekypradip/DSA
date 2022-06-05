let input = `3
1
2
100`;
input = input.split( '\n' );
let T = +input[ 0 ];
for ( let i = 1; i <= T; i++ ){
    let res = ispowerOf2( +input[ i ] );
    if ( res )
        console.log( "YES" );
    else
        console.log( "NO" );
}
function ispowerOf2(n) {
    return n && !(n & (n - 1));
}
