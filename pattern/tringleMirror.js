var inputValue=4;
for(var i=1;i<=inputValue;i++){
    for(var j=i;j<inputValue;j++){
        process.stdout.write(`  `);
        // console.log("space")
    }
    for(var k=1;k<=i;k++){
        process.stdout.write('* ');
        // console.log("*");
    }
    console.log("");

}

//        * 
//      * * 
//    * * * 
//  * * * * 
//* * * * * 