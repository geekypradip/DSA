let n = 100;
console.log( isprime( n ) )

function isprime(n) {
    let primes = [];
    if ( n < 2 ) {
        return [];
    }
    for ( let i = 2; i <= n; i++ ){
        let p = checkPrime( i );
        if ( p )
            primes.push(i)
    }
    return primes;
}


function checkPrime( value ) {
    for ( let i = 2; i < value/2; i++ ){
        if ( value % i === 0 )
          return false;
    }
    return true;
}
