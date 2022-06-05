let input=`2
3
EVE
4
EVEE`;
input=input.split("\n");
let t=+input[0];
let pos=1
for(let i=0;i<t;i++,pos+=2){
    let m=+input[pos];
    let a=input[pos+1].trim()
    let res=count(a,"EVE",a.length,3);
    console.log(res)
}
    function count( a,  b , m , n)
    {
        if ((m == 0 && n == 0) || n == 0)
            return 1;
 
        
        if (m == 0)
            return 0;
 
        if (a[m - 1] == b[n - 1])
            return count(a, b, m - 1, n - 1) + count(a, b, m - 1, n);
        else
         
            return count(a, b, m - 1, n);
    }
 
    // // Driver code
    // var a = "GeeksforGeeks";
    // var b = "Gks";
    // document.write(count(a, b, a.length, b.length));
 
// This code is contributed by Amit Katiyar
