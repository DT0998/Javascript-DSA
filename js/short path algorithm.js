class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(vertex1,vertex2,weight){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    // dijkstra
    Dijkstra(start,finish){
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let path = []
        let smallest;

        // build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0
                nodes.enqueue(vertex,0)
            }else{
                distances[vertex] = Infinity
                nodes.enqueue(vertex,Infinity)
            }
            previous[vertex] = null
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val
            if(smallest === finish){
                // we are done
                // build up path to return at end
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    // find neighboring nodes
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    // calculate new distance to neighboring nodes
                    let candiadate = distances[smallest] + nextNode.weight
                    let nextNeighbor = nextNode.node
                    if(candiadate < distances[nextNeighbor]){
                        // update new smallest distance to neighbor
                        distances[nextNeighbor] = candiadate
                        // update previous - how we got to neighbor
                        previous[nextNeighbor] = smallest
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor,candiadate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}

class PriorityQueue{
    constructor(){
        this.values = []
    }
    // enqueue
    enqueue(val,priority){
        this.values.push({val,priority})
        this.sort()
    }
    // dequeue
    dequeue(){
        return this.values.shift()
    }
    // sort
    sort(){
        this.values.sort((a,b)=> a.priority - b.priority)
    }
}