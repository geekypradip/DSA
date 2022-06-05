let input = `2
5
21321
6
235452`;
input = input.split( "\n" );
let T = +input[ 0 ];
let pos = 1;
for ( let i = 0; i < T; i++ ,pos+=2){
    let arrsize = +input[ pos ];
    let arr = input[ pos + 1 ].trim().split( "" ).map( Number );
    let ressult = letFindOccur( arrsize, arr );
    console.log(ressult.join(" "))
}
function letFindOccur( N, arr ) {
    let obj = {

        9: 0,
        8: 0,
        7: 0,
        6: 0,
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0,
        0: 0

    }
    for ( let i = 0; i < N; i++ ){
        obj[ arr[ i ] ] += 1;
    }
    return Object.values( obj)
}
