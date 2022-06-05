let input = `1
44 37
245 525 525 935 319 520 688 344 122 73 993 424 809 666 465 886 867 583 983 519 524 489 574 110 665 733 218 820 395 461 886 640 337 410 926 655 282 614 351 403 38 343 179 847`;
input = input.trim().split( "\n" );
let T = +input[ 0 ];
let pos = 1;
for ( let i = 0; i < T; i++,pos+=2 ){

    let [ N, M ] = input[ pos ].trim().split( " " ).map( Number );
    let arr = input[ pos + 1 ].trim().split( " " ).map( Number );
    let res = letFindDiff( N, M, arr );
    console.log( res );
}
function letFindDiff( N, M, arr ){
    arr.sort( ( a, b ) => a - b );
    let smallSum = 0;
    let bigSum = 0;
    let smallValue = arr[ 0 ];
    let bigValue=arr[N-1]
    // let rightPtr = N - 1;
    for ( let i = 0; i < N; i++ ){
        if ( arr[ i ] === smallValue ) {
            smallSum+=arr[i]
        }
    }
    for ( let i = N-1; i >= 0; i-- ){
        if ( arr[ i ] === bigValue ) {
            bigSum+=arr[i]
        }
    }
    return bigSum-smallSum;
}
