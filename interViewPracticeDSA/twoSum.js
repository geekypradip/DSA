let nums = [3,3];
let target = 6;
let obj = {};

for ( let i = 0; i < nums.length; i++ )
{
    if ( target - nums[ i ] in obj ) {

        console.log( [ obj[ target - nums[ i ] ], i ] );
        break;
    }
    else {
        obj[ nums[ i ] ] = i;
    }
}
