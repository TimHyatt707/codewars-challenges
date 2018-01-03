function alphabetPosition(text) {
  let array = text.toLowerCase().split('');
  let result = '';
  for(let i = 0; i < array.length; i++ )
  {
    let element = array[i].codePointAt(0);
    if(element >= 97 && element <=122)
    {
      result += `${element - 96} `;
    }
  }
  return result.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
