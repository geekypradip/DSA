var ractangle={
    length:12,
    breadth:6,
     area:function(){
        console.log(`area is= ${this.length*this.breadth}`)
     },
    perimeter(){
        console.log(`perimeter is= ${2*(this.length+this.breadth)}`)
    }
}
ractangle.area();
ractangle.perimeter();