let input=`30
3
abc`;
input = input.split( "\n" );
let N = +input[ 0 ];
let strSize = +input[ 1 ];
let strArr = input[ 2 ].split( "" ).map( String );
// console.log( N );
letFind(N,strSize, strArr)
function letFind( N, strSize, strArr ) {
    let alpha = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    let alphaArr = alpha.split( "," ).map( String );
    let obj={}
    for ( var i=0; i < alphaArr.length; i++) {
        obj[ alphaArr[ i ] ] = N;
        N += 1;
    }
    let sum = 0;
    for ( var i = 0; i < strSize; i++ ){
        sum+=obj[strArr[ i]]
    }
console.log(sum)
}
