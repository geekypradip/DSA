

let input=`1
4 5
2 5 6 8
3 8 5 1 7`;
input=input.split("\n");
   let t=Number(input[0]);
   let pos=1;
   for(let i=0;i<t;i++,pos+=3){
       let heightArr=input[1].trim().split(" ").map(Number);
       let boysHeight=input[pos+1].trim().split(" ").map(Number);
       let girlsHeight=input[pos+2].trim().split(" ").map(Number);
      console.log(letSee(boysHeight,girlsHeight))
   }
   function letSee(boysHeight,girlsHeight){
       girlsHeight.sort((a,b)=>a-b);
       boysHeight.sort((a,b)=>a-b);
      for(let boy in boysHeight){
          if(boysHeight[boy]<=girlsHeight[boy])
          return "No";
      }
      return "Yes";
   }