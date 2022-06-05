var arrObject={
    items:['a', 'b', 'c', 'd',`a`,`c`],
    checkDuplicates:function(){
        var filterArray=[];
        for(var i=0;i<this.items.length;i++){
            for(var j=i+1;j<this.items.length;j++){
                if(this.items[i]===this.items[j])
                    {
                        if(!filterArray.includes(this.items[i])){
                            filterArray.push(this.items[i])
                        }
                    }
            }
        }
        return filterArray;
    }

}
if(arrObject.checkDuplicates().length)
console.log(arrObject.checkDuplicates())
else
console.log(`No duplicates value exits`)

