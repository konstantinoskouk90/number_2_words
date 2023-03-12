import { ONES, TENS } from './constants';

function addDecimal(result: string, hasDecimal: boolean, arr: string[]): string {
  // We strip all digits but the last 3 if it's a decimal when doing recursion
  // That way we take into account the <= 1000 limitation and handle infinity e.g. 9.999999999999999888887777 etc.
  // NOTE: We inform the users of the fact that we handle up to 3 decimal points in the README.md file
  return result + (hasDecimal ? ' point ' + toWords(parseInt(arr[1].substring(0,3))) : '');
}

export default function toWords(num: number): string {
  // --- CONSTRAINTS --- //

  if (num < 1 || num > 1000) {
    throw new Error('Please enter a number between 1 and 1000!');
  }

  // --- RESULTS --- //

  const numStr = num.toString();
  const numStrArr = numStr.split('.');
  const hasDecimal = numStrArr.length > 1;

  // 0 - 19
  if (num < 20) {
    // The number inputed will match the index of the number in the array
    return addDecimal(
      ONES[parseInt(numStrArr[0])],
      hasDecimal,
      numStrArr,
    );
  }

  // >= 20 && < 100
  if (num >= 20 && num < 100) {
    const firstChar  = +numStr[0];
    const secondChar = +numStr[1];

    return addDecimal(
      TENS[firstChar] + '-' + ONES[secondChar],
      hasDecimal,
      numStrArr,
    );
  }

  // >= 100 && < 1000
  if (num >= 100 && num < 1000) {
    const firstChar  = +numStr[0];

    if (numStr[1] === '0' && numStr[2] === '0') {
      return addDecimal(
        ONES[firstChar] + ' hundred',
        hasDecimal,
        numStrArr,
      );
    }

    return addDecimal(
      ONES[firstChar] + ' hundred and ' + toWords(+(numStr[1] + numStr[2])),
      hasDecimal,
      numStrArr,
    );
  }

  // 1000
  if (!hasDecimal && numStrArr[0].length === 4) {
    return "one thousand";
  }
}