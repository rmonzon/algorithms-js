function Graph() {
	this.nodes = [];
	this.adjacencyList = {};
}

Graph.prototype.insertNode = function(value) {
	this.nodes.push(value);
	this.adjacencyList[value] = {};
}

Graph.prototype.insertEdge = function (start, end, weight) {
	this.adjacencyList[start][end] = weight;
}

Graph.prototype.DFS = function (root, visited) {
	if (root) {
		console.log(root);
		visited[root] = true;
		for (var key in this.adjacencyList[root]) {
			if (!visited[key]) {
				this.DFS(key, visited);
			}
		}
	}
}

// Implementation of Dijkstra's algorithm to find the shortest path between two nodes in a directed weighted graph
Graph.prototype.shortestPath = function (start, finish) {
	const INFINITY = 1/0;
	// Using priority queue available on the file 'priority-queue.js' in this repo
	var nodes = new PriorityQueue(), distances = {}, previous = {}, path = [], smallest, vertex, neighbor, alt;
    for(vertex in this.adjacencyList) {
      if(vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      }
      else {
        distances[vertex] = INFINITY;
        nodes.enqueue(INFINITY, vertex);
      }
      previous[vertex] = null;
    }
    while(!nodes.isEmpty()) {
      smallest = nodes.dequeue();
      if(smallest === finish) {
        path;

        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if(!smallest || distances[smallest] === INFINITY) {
        continue;
      }
      for(neighbor in this.adjacencyList[smallest]) {
        alt = distances[smallest] + this.adjacencyList[smallest][neighbor];
        if(alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;
          nodes.enqueue(alt, neighbor);
        }
      }
    }
    console.log(distances[finish]);
    return path;
}

var g = new Graph();

g.insertNode('A');
g.insertEdge('A', 'B', 7);
g.insertEdge('A', 'C', 8);
g.insertNode('B');
g.insertEdge('B', 'A', 7);
g.insertEdge('B', 'F', 2);
g.insertNode('C');
g.insertEdge('C', 'A', 8);
g.insertEdge('C', 'F', 6);
g.insertEdge('C', 'G', 4);
g.insertNode('D');
g.insertEdge('D', 'F', 8);
g.insertNode('E');
g.insertEdge('E', 'H', 1);
g.insertNode('F');
g.insertEdge('F', 'B', 2);
g.insertEdge('F', 'C', 6);
g.insertEdge('F', 'D', 8);
g.insertEdge('F', 'G', 9);
g.insertEdge('F', 'H', 3);
g.insertNode('G');
g.insertEdge('G', 'C', 4);
g.insertEdge('G', 'F', 9);
g.insertNode('H');
g.insertEdge('H', 'E', 1);
g.insertEdge('H', 'F', 3);

// // Log test, with the addition of reversing the path and prepending the first node so it's more readable
console.log(g.shortestPath('A', 'H').concat(['A']).reverse());
