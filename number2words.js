function number2words(n){
  let number = n.toString();
  let result = '';
  number = number.split('');
  while(number.length)
  {
    if(number[0] === '0' && result.length > 1) number.shift();
    else {
    switch(number.length)
    {
      case 6:
        {
          if(number[1] === '0' && number[2] === '0')
          {
            result += `${getSingleDigit(number[0])} hundred thousand `;
            number.shift();
            number.shift();
            number.shift();
            break;
          }
          else if(number[1] === '0')
          {
            result += `${getSingleDigit(number[0])} hundred `;
            number.shift();
            number.shift();
            break;
          }
          else
          {
            result += `${getSingleDigit(number[0])} hundred `;
            number.shift();
            break;
          }
        }
      case 5:
        {
          {
            if(number[0]=== '1' && number[1] !== '0')
            {
              result += `${getTens(number[1])} thousand `;
              number.shift();
              number.shift();
              break;
            }
            else if(number[1]=== '0')
            {
              result += `${getDoubleDigit(number[0])} thousand `;
              number.shift();
              number.shift();
              break;
            }
            else
            {
              result += `${getDoubleDigit(number[0])}-`;
              number.shift();
              break;
            }
          }
        }
      case 4:
        {
          result += `${getSingleDigit(number[0])} thousand `;
          number.shift();
          break;
        }
      case 3:
        {
          result += `${getSingleDigit(number[0])} hundred `;
          number.shift();
          break;
        }
      case 2:
        {
          if(number[0]=== '1' && number[1] !== '0')
          {
            result += `${getTens(number[1])}`;
            number.shift();
            number.shift();
            break;
          }
          else if(number[1]=== '0')
          {
            result += `${getDoubleDigit(number[0])}`;
            number.shift();
            number.shift();
            break;
          }
          else
          {
            result += `${getDoubleDigit(number[0])}-`;
            number.shift();
            break;
          }
        }
      case 1:
        {
          result += `${getSingleDigit(number[0])}`;
          number.shift();
          break;
        }
      }
    }
  }
  return result.trim();
}

function getSingleDigit(n)
{
  switch(parseInt(n))
  {
    case 0: return 'zero';
    case 1: return 'one';
    case 2: return 'two';
    case 3: return 'three';
    case 4: return 'four';
    case 5: return 'five';
    case 6: return 'six';
    case 7: return 'seven';
    case 8: return 'eight';
    case 9: return 'nine';
    default: return '';
  }
}

function getDoubleDigit(n)
{
  switch(parseInt(n)){
    case 1: return 'ten';
    case 2: return 'twenty';
    case 3: return 'thirty';
    case 4: return 'forty';
    case 5: return 'fifty';
    case 6: return 'sixty';
    case 7: return 'seventy';
    case 8: return 'eighty';
    case 9: return 'ninety';
    default: return '';
    }
}

function getTens(n){
  switch(parseInt(n))
  {
    case 1: return 'eleven';
    case 2: return 'twelve';
    case 3: return 'thirteen';
    case 4: return 'fourteen';
    case 5: return 'fifteen';
    case 6: return 'sixteen';
    case 7: return 'seventeen';
    case 8: return 'eighteen';
    case 9: return 'nineteen';
    default: return '';
  }
}

console.log(number2words(711581));
