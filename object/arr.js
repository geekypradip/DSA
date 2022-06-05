var arrayData={
    items:[1, 2, 6, 7, 3, 4, 9, 0],
    lessThanItems:function(checkValueForLessThan){
        var returnArray=[]
        for(var i=0;i<this.items.length;i++){
            if(this.items[i]<checkValueForLessThan)
            returnArray.push(this.items[i])
        }
        return returnArray;
    },
    greaterThanItems:function(checkValueForGreaterThan){
         var returnArray=[];
         for(var i=0;i<this.items.length;i++){
             if(this.items[i]>checkValueForGreaterThan)
             returnArray.push(this.items[i])
         }
         return returnArray;
    }
}
var checkValueForLessThan=4;
var checkValueForGreaterThan=6;
console.log( arrayData.lessThanItems(checkValueForLessThan).join(" "));
console.log(arrayData.greaterThanItems(checkValueForGreaterThan).join(" "));