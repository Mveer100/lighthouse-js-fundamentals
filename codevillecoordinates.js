const finalPosition = function (moves) {
  
  var currentPos = [0,0]
  var xCord = 0
  var yCord = 0
  
  for (const move of moves) {
    
    

    if (move === "north") {
      yCord += 1
    } else if (move === "south") {
      yCord -= 1
    } else if (move === 'east') {
      xCord += 1
    } else if (move === 'west') {
      xCord -= 1
    }
  }
  currentPos[0] = currentPos[0] + xCord
  currentPos[1] = currentPos[1] + yCord
  
  return currentPos
  
}

const moves = [
  'south',
  'south',
  'south',
  'south',
  'south',
  'north',
  'south'
]

console.log(finalPosition(moves))