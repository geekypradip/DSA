let input = `4`;
input = +input;
console.log( letFindWay( input ) );
function letFindWay( input ) {
    if ( input === 0 )
        return 1;
    if ( input < 0 )
        return 0;
    return letFindWay( input - 1 ) + letFindWay( input - 2 ) + letFindWay( input - 3 );
}
