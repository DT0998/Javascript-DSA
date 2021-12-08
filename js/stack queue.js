class Node {
    constructor(values){
        this.values = values
        this.next = null
    }
}




// stack
class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0;
    }
    // push
    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    // pop
    pop(){
        if(!this.first){
            return null
        }
        var temp = this.first;
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.values
    }
}




// queue
class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0;
    }
    // unshift
    enqueue(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode

        }
        return ++this.size
    }
  
    // shift
    dequeue(){
        if(!this.first){
            return null
        }
        var temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--;
        return temp.values

    }
}