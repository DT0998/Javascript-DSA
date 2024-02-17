class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    // add vertex = node
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }
    // add edge = line connect
    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    // remove edge 
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
            );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
            );    
    }
    // remove vertex
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacencyVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
    }
    // depthfirst recursive
    depthFirstRecursive(start){
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList
       (function dfs(vertex){
           if(!vertex){
               return null
           }
           visited[vertex] = true
           result.push(vertex)
           adjacencyList[vertex]
           adjacencyList[vertex].forEach(neighbor =>{
               if(!visited[neighbor]){
                   return dfs(neighbor)
               }
           })
       })(start)
       return result
    }
    // depth first iterative
    depthhFirstIterative(start){
        const stack = [start]
        const result = []
        const visited = {}
        let currentVertex
        visited[start] = true;

        
        while(stack.length){
            currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }
    // breathFirst
    breadthFrist(start){
        const queue = [start]
        const result = []
        const visited = {}
        let currentVertex
        visited[start] = true

        while(queue.length){
            currentVertex= queue.shift()
            result.push(currentVertex)



            this.adjacencyList[currentVertex].forEach(neighbor =>{
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }
}