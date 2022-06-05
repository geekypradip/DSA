let input = `2
6
eat
tea
tan
ate
nat
bat
3
abc
abc
def`;
input = input.split( "\n" );
let testCase = +input[ 0 ];
let pos = 1;
for ( let i = 0; i < testCase; i++){
    let arrSize = +input[ pos ];
    let bunchWord = input.slice( pos + 1, pos + 2 );
    console.log( bunchWord );
    pos+=arrSize+1;
}
