function streetFighterSelection(fighters, position, moves){
  let currentPos = position;
  let results = [];
  for(let i =0;i < moves.length;i++){
    switch(moves[i]){
      case 'up':
        currentPos[0] === 1 ? currentPos[0] = 0 : currentPos;
        break;
      case 'down':
        currentPos[0] === 0 ? currentPos[0] = 1 : currentPos;
        break;
      case 'left':
        currentPos[1] === 0 ? currentPos[1] = fighters[0].length - 1 : currentPos[1] -= 1;
        break;
      case 'right':
        currentPos[1] === fighters[0].length - 1 ? currentPos[1] = 0 : currentPos[1] += 1;
	break;
    } 
    let row = fighters[currentPos[0]];
    results.push(row[currentPos[1]]);
  }
  return results;
}

console.log(streetFighterSelection([
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
],[0,0],['up', 'left', 'right', 'left', 'left']));
