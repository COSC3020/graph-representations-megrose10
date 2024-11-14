function convertToAdjList(adjMatrix) {
  let adjList = [];
    //Use nested for loops to traverse through matrix
  for(let i = 0; i < adjMatrix.length; i++) {
    for(let j = 0; j < adjMatrix.length; j++) {
      if(matrix[i][j] == 1) {
        adjList[i].push(j);
      }
      else {}
    }
  }
    //if 1, there is a connection through, if 0 there is no connection
    //if there is a connection, add to list
    //return finsihed list
    
    return adjList;
}
