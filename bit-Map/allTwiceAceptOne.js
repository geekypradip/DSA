let input = `2
1
5
5
1 2 1 3 2`;
input = input.trim().split( '\n' );
let T = +input[ 0 ];
let pos = 1;
for ( let i = 0; i < T; i++, pos += 2 ) {
    let arrSize = +input[ pos ];
    let arr = input[ pos + 1 ].split( " " ).map( Number );
    console.log( letFindUnique( arr ))
}


function letFindUnique( array ) {
   let result = 0
for ( i of array ) {
    result ^= i

}
return result
}
