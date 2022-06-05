var inputvalue=4;
for(var i=1;i<=inputvalue;i++){
    for(var j=i;j<=i*inputvalue;j+=i)
    {
            process.stdout.write(`${j} `);
    }
    console.log("");

}
// alternative solution
console.log("alternative solution output");
var inputvalue=4;
for(var i=1;i<=inputvalue;i++){
    for(var j=1;j<=inputvalue;j++)
    {
            process.stdout.write(`${j*i} `);
    }
    console.log("");

}

// 1 2 3 4 
// 2 4 6 8 
// 3 6 9 12 
// 4 8 12 16 
// alternative solution output
// 1 2 3 4 
// 2 4 6 8 
// 3 6 9 12 
// 4 8 12 16 