let input = `4
1
0
4294967295
13`;
input = input.trim().split( "\n" );
let T = +input[ 0 ];
for ( let i = 1; i <= T; i++ ){
    console.log(manOneConsecutiveOnes(+input[i]))
}

function manOneConsecutiveOnes( n )
{

    let count = 0;
    while (n != 0)
    {

        n = (n & (n << 1));

        count++;
    }
    return count;
}
