function mix(s1, s2) {
  let results = [];
  let s1Array = [];
  let s2Array = [];
  s1 = s1.replace(/[^a-z]/g,'').split('');
  s2 = s2.replace(/[^a-z]/g,'').split('');
  s1.sort();
  s2.sort();
  while(s1.length){
    let element = '' + s1[0];
    if(s1[0]===s1[1]){
      while(s1[0]===s1[1]){
        element += s1[1];
        s1.shift();
      }
      s1Array.push(`1:${element}/`);
    } else {
      s1.shift();
    }
  }
  while(s2.length){
    let element = '' + s2[0];
    if(s2[0]===s2[1]){
      while(s2[0]===s2[1]){
        element += s2[1];
        s2.shift();
      }
      s2Array.push(`2:${element}/`);
    } else {
      s2.shift();
    }
  }
  s1Array.sort((a,b) => b.length - a.length);
  s2Array.sort((a,b) => b.length - a.length);
  for(let i = 0;i < s1Array.length;i++){
    let current = s1Array[i];
    let dupe = s2Array.find((element) => element[2] === current[2]);
    if(dupe){
      s2Array = s2Array.filter(element => element !== dupe); 
      if(dupe.length > current.length){ results.push(dupe) }
      else if(dupe.length < current.length){ results.push(current) }
      else if(dupe.length === current.length){ 
        current = current.split(''); 
        current[0] = '=';
        results.push(current.join('')); 
        } 
      } else {
      results.push(current); 
    }
  }
  results = results.concat(s2Array).sort((a,b) =>{
    if(a.length === b.length && a.codePointAt(0) === b.codePointAt(0)){
      return a.codePointAt(2) - b.codePointAt(2);
    } 
    else if(a.length === b.length){
      return a.codePointAt(0) - b.codePointAt(0);
    }
    else {
      return b.length - a.length; 
    }
  });
  results = results.join('');
  return results.slice(0,results.length - 1);
}

console.log(mix('looping is fun but dangerous','less dangerous than coding'));
