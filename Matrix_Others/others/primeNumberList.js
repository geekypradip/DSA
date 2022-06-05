var startPoint=2;
var endPoint=100;
if(startPoint===1)
startPoint+=1;
for(var i=startPoint;i<=endPoint;i++)
{
    var count=1;
        for(var j=2;j<=i;j++)
        {
            if(i%j==0)
            {
                count+=1;
                //break;
            }
            
        }
        if(count<=2)
            {
                process.stdout.write(`${i} `);
                // console.log(i)   //use for debug console
            }
}
console.log("")

// 2 3 5 7 