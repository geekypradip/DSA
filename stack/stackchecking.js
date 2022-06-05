class Stack {
    constructor()
    {
        this.Q1 = new Queue()
        this.Q2 = new Queue()
    }
    push(value) {
    	//write your code here..
      this.Q2.push(value);
      for(var i=0;i<this.Q1.length;i++){
        this.Q2.push(this.Q1[0])
        }
      this.Q1=[];
      var temp=this.Q2;
      this.Q2=this.Q1;
      this.Q1=this.Q2;
    }
    pop() {
    	//write your code here..
      if(isEmpty()){
        return -1;
      }
      else
        this.Q1.pop();
    }
    top() {
        //write your code here..
      console.log(this.Q1[this.Q1.length-1])
    }
    isEmpty() {
    	//write your code here..
      return this.Q1.length===0;
    }
}
var Queue=[],Queue1=[];

var myStack=new Stack(Queue,Queue1);
myStack.push(5);
myStack.push(3);
myStack.top();
myStack.pop();
myStack.top()