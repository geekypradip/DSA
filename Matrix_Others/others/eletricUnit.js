
var price=950;
var additionalCharges=80;
 price-=additionalCharges;
if(price<=50*3)
    console.log(parseInt(price/3));
else if(price<(100*5)+150){
  console.log(parseInt((price-150)/5)+50)
  
}
      
else{
  console.log(parseInt(((price-650)/10)+50+100))


}
 

