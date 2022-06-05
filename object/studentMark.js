var student={
    arr:[
       {
        name:"Nrupul",
        mark:10
       },
       { 
           name:"Prateek",
           mark:20
       },
       { 
         name: "Aman",
         mark:30
       },
      {
        name:"Albert",
        mark:5  
      },
      {   
          name:"Yogesh",
          mark:15
      }
           
    ],
 ave:function(){
    var sum=0;
    for(var i=0;i<this.arr.length;i++){
        sum+=this.arr[i].mark;
    }
    console.log(`average is=${sum/this.arr.length}`);
 },
min(){
    var min=Number.MAX_SAFE_INTEGER;
    var name=""
    for(var i=0;i<this.arr.length;i++){
        if(this.arr[i].mark<min){
            min=this.arr[i].mark;
            name=this.arr[i].name;
        }
    }
    console.log(`minimum mark is owned=${name}`);
},
max(){
    var max=Number.MIN_SAFE_INTEGER;
    var name=""
    for(var i=0;i<this.arr.length;i++){
        if(this.arr[i].mark>max){
            max=this.arr[i].mark;
            name=this.arr[i].name;
        }
    }
    console.log(`maximum mark is owned=${name}`);
}
}
student.ave()
student.min()
student.max()