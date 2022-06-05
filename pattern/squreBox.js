var inputValue =3;
for(var i=1;i<=inputValue;i++){
    for(var j=1;j<=inputValue;j++){
        if(i===1||i===inputValue){      
             process.stdout.write(`* `);
            //  console.log("*");
                        }
        else{
            if(j===1||j===inputValue){
                process.stdout.write(`* `);
                // console.log("*")


                }
             else{
                process.stdout.write(`  `)
                // console.log("space")


                }
        }
        

    }
    console.log("")
}
// * * * 
// *   * 
// * * * 