class Node{
    constructor(values){
        this.values = values
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    // insert
    insert(values){
        var newNode = new Node(values)
        if(this.root === null){
            this.root = newNode
            return this
        }else{
            var current = this.root
            while(true){
                if(values === current.values){
                    return undefined
                }
                if(values < current.values){
                    if(current.left === null){
                        current.left = newNode
                        return this
                    }
                        current = current.left
                }else{
                    if(current.right === null){
                        current.right = newNode
                        return this
                    }
                        current = current.right
                    }
                }
            }
        }
        // find
        find(values){
            if(this.root === null){
                return false
            }
            var current = this.root
            found = false
            while(current && !found){
                if(values < current.values){
                    current = current.left
                }else if(values > current.values){
                    current = current.right
                }else{
                   return true
                }
            }
            return current;
        }
        // BFS
        BFS(){
            var data = [],
            queue = [],
            node = this.root

            queue.push(this.root)
            while(queue.length){
              node =  queue.shift()
              data.push(node.values)
              if(node.left){
                  queue.push(node.left)
              }
              if(node.right){
                  queue.push(node.right)
              }
              return data
            }
        }
        // DFS preorder từ trên root -> trái -> phải
        DFSPreOrder(){
            var data = []
            var current = this.root
            function traverse(node){
                data.push(node.values)
                if(node.left){
                    traverse(node.left)
                }
                if(node.right){
                    traverse(node.right)
                }
            }
            traverse(this.root)
            return data
        }
        // DFS postorder
        DFSPostOrder(){
            var data = []
            function traverse(node){
                if(node.left){
                    traverse(node.left)
                }
                if(node.right){
                    traverse(node.right)
                } 
                data.push(node.values)
            }
            traverse(this.node)
            return data
        }
        // DFS inorder
        DFSInOrder(){
            var data = []
            function traverse(node){
                if(node.left){
                    traverse(node.left)
                }
                data.push(node.values)
                if(node.right){
                    traverse(node.right)
                } 
            }
            traverse(this.node)
            return data
        }
    }

