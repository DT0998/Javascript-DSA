class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length =0;
    }
    // push
    push(val){
        var NewNode = new Node(val)
        if(this.length === 0){
            this.head = NewNode
            this.tail = NewNode
        }else{
            this.tail.next = NewNode
            NewNode.prev = this.tail
            this.tail = NewNode
        }
        this.length++
        return this
    }
    // pop
    pop(){
        if(!this.head){
            return undefined
        }
        var poppedNode = this.tail
        if(this.length === 1 ){
            this.head = null
            this.tail = null
        }else{
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }
    // shift
    shift(){
        if(this.length === 0 ){
            return undefined
        }
        var oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    // unshift
    unshift(val){
        var newNode = new Node(val)
        if(this.length ===0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    // get
    get(index){
        if(index <0 || index >= this.length){
            return null
        }
        if(index <= this.length/2){
            var count = 0
            var current = this.head
            while(count != index){
                current = current.next
                count++
            }
            return current

        }else{
            var count = this.length - 1
            var current = this.tail
            while(count !== index){
                current = current.prev
                count--
            }
            return current
        }
    }
    // set
    set(index,val){
        var foundNode = this.get(index)
        if(foundNode != null){
            foundNode.val = val
            return true
        }
        return false
    }
    // insert
    insert(index,val){
        if(index < 0 || index > this.length){
            return false
        }
        if(index ===0){
            return this.unshift(val)
        }
        if(index === this.length){
            return this.push(val)
        }

        var newNode = new Node(val)
        var beforeNode = this.get(index - 1)
        var afterNode = beforeNode.next;

        beforeNode.next = newNode,newNode.prev = beforeNode
        newNode.next = afterNode,afterNode.prev = newNode
        this.length++
        return true;
    }
    // remove
    remove(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        if(index === 0 ){
            return this.shift()
        }
        if(index === this.length -1){
            return this.pop()
        }

        var removedNode = this.get(index)
        var beforeNode = removedNode.prev
        var afterNode = removedNode.next

        beforeNode.next= afterNode
        afterNode.prev = beforeNode

        // removedNode.prev.next = removedNode.next
        // removedNode.next.prev = removedNode.prev
        removedNode.next = null
        removedNode.prev = null
        this.length--
        return removedNode


    }



}