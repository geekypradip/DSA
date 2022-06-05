let input = `2
15 7
0 3`;
input = input.trim().split( "\n" );
let T = +input[ 0 ];
for ( let i = 1; i <= T; i++ ){
    let [ n1, n2 ] = input[ i ].split( " " ).map( Number );
     console.log(letFindHammingDistance( n1, n2 ));
}


function letFindHammingDistance( n1, n2 )
{
    let xorStore = n1 ^ n2;
    let bit = 0;

    while (xorStore > 0) {
        bit += xorStore & 1;
        xorStore >>= 1;
    }

    return bit;
}
