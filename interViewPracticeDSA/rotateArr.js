let input = `3
3 1
1 2 3
2 2
1 2
2 3
1 2`;
input=input.trim().split("\n")
let T = +input[ 0 ];
let pos = 1;
for ( let i = 0; i < T; i++, pos += 2 ){
    let [ N, K ] = input[ pos ].split( " " ).map( Number );
    let arr = input[ pos + 1 ].trim().split( " " ).map( Number );

}
