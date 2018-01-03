function fruit(reels, spins){
  let score = 0;
  let reel1 = reels[0];
  let reel2 = reels[1];
  let reel3 = reels[2];
  let spin1 = reel1[spins[0]];
  let spin2 = reel2[spins[1]];
  let spin3 = reel3[spins[2]];
  if(spin1 === spin2 && spin2 === spin3)
  {
    let slideNumber = scoreTable(spin1);
    score = slideNumber * 10;
  }
  else if(spin1 === spin2)
  {
    let slideNumber = scoreTable(spin1);
    let testForWild = scoreTable(spin3);
    if(testForWild === 10){
      score = slideNumber * 2;
    }
    else
    {
      score = slideNumber;
    }
  }
  else if(spin2 === spin3)
  {
    let slideNumber = scoreTable(spin2);
    let testForWild = scoreTable(spin1);
    if(testForWild === 10)
    {
      score = slideNumber * 2;
    }
    else
    {
      score = slideNumber;
    }
  }
  else if(spin1 === spin3)
  {
    let slideNumber = scoreTable(spin1);
    let testForWild = scoreTable(spin2);
    if(testForWild === 10)
    {
      score = slideNumber * 2;
    }
    else
    {
      score = slideNumber;
    }
  }
  return score;
}

function scoreTable(slide){
  switch(slide)
  {
    case 'Jack': return 1;
    case 'Queen': return 2;
    case 'King': return 3;
    case 'Bar': return 4;
    case 'Cherry': return 5;
    case 'Seven': return 6;
    case 'Shell': return 7;
    case 'Bell': return 8;
    case 'Star': return 9;
    case 'Wild': return 10;
    default: return 0;
  }
}

let reelOne = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
let reelTwo = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
let reelThree = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
let Spin = [3,5,3];

console.log(fruit([reelOne, reelTwo, reelThree], Spin));
