import { recentDates } from './constants.js';

const calcDaysDiffBetweenDates = (prevDate, nextDate) => {
  const date1 = new Date(prevDate);
  const date2 = new Date(nextDate);

  return Math.round(
    (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)
  );
};

const calcPeriods = array => {
  const periods = [];

  for (let i = 0; i < array.length - 1; i++) {
    periods.push(calcDaysDiffBetweenDates(array[i], array[i + 1]));
  }

  return periods;
};

const recentPeriods = calcPeriods(recentDates);

console.log(recentPeriods);

const calcAveragePeriod = () =>
  Math.floor(
    recentPeriods.reduce((acc, period) => acc + period, 0) /
      recentPeriods.length
  );

console.log(calcAveragePeriod());

const calcNextDate = (lastDate, days) => {
  const latestDate = new Date(lastDate);

  return new Date(latestDate.getTime() + days * (1000 * 60 * 60 * 24));
};

console.log(
  `My next cycle is expected on ${calcNextDate(
    recentDates.at(-1),
    calcAveragePeriod()
  )}.`
);

const reverseNumber = num => {
  let numStr = num + ''; // number => string
  let numArr = numStr.split('');
  let reversedNum = [];

  for (let i = numArr.length - 1; i >= 0; i--) {
    reversedNum.push(numArr[i]);
  }

  reversedNum = reversedNum + ''; //array => string
  reversedNum = reversedNum.replaceAll(',', '');
  reversedNum = parseInt(reversedNum) * Math.sign(num);

  return reversedNum;
};

console.log(reverseNumber(-579));
console.log(reverseNumber(89753));

const getLargestAndSmallestValues = array => {
  let smallest = array[0];
  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) smallest = array[i];
    if (array[i] > largest) largest = array[i];
  }

  return `${smallest} and ${largest}  are the smallest and the largest values in the array.`;
};

const getBiggestNumber = args => {
  if (args.length < 2) {
    throw new Error('Not enough arguments');
  }

  if (args.some(arg => typeof arg !== 'number')) {
    throw new Error('Wrong argument type');
  }

  const maxNum = Math.max(...args);

  return maxNum;
};

const findMaxDifference = array => {
  let maxDiff = array[1] - array[0];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] - array[i] > maxDiff) {
        maxDiff = array[j] - array[i];
      }
    }
  }

  return maxDiff;
};

const findMinDifference = array => {
  const sortedArr = [...array].sort((a, b) => a - b);

  let minDiff = Number.MAX_VALUE;

  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] - sortedArr[i - 1] < minDiff) {
      minDiff = sortedArr[i] - sortedArr[i - 1];
    }
  }

  return minDiff;
};

const isSorted1 = array => {
  const sortedArr = [...array].sort((a, b) => a - b);

  let sorted = true;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      array[i] !== sortedArr[i] && (sorted = false);
    }
  }

  return sorted;
};

const isSorted2 = array => {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) return false;
  }

  return true;
};

const isSorted3 = array =>
  array.slice(1).every((value, index) => array[index] < value);

const isSorted4 = array =>
  array.every((value, index) => index === 0 || array[index - 1] < value);

const adjacentElementsMaxProduct = array => {
  let productsArr = [];

  for (let i = 0; i < array.length - 1; i++) {
    productsArr.push(array[i] * array[i + 1]);
  }

  return Math.max(...productsArr);
};

const unsortedArray = [1, 55, 17, 77, 709, 95, -10, 100, 205];
const sortedArray = [-10, 0, 1, 10, 77, 500, 709];

console.log(getLargestAndSmallestValues(unsortedArray));
console.log(getBiggestNumber(unsortedArray));
console.log(findMaxDifference(unsortedArray));
console.log(findMinDifference(unsortedArray));
console.log(isSorted1(sortedArray));
console.log(isSorted1(unsortedArray));
console.log(isSorted2(sortedArray));
console.log(isSorted2(unsortedArray));
console.log(isSorted3(sortedArray));
console.log(isSorted3(unsortedArray));
console.log(isSorted4(sortedArray));
console.log(isSorted4(unsortedArray));
console.log(adjacentElementsMaxProduct(unsortedArray));

const removeFalsy = array => array.filter(Boolean);

console.log(removeFalsy(sortedArray));

const makeArrayOfMatches = (array1, array2) =>
  array1.filter(el => array2.includes(el));

const makeArrayOfDifferences = (array1, array2) => {
  const set = new Set(array2);

  return array1.filter(el => !set.has(el));
};

console.log(makeArrayOfMatches(sortedArray, unsortedArray));
console.log(makeArrayOfDifferences(sortedArray, unsortedArray));

const makeArrayOfUniqueValues = array => {
  const arrOfUniqueValuesNewWay = [];

  array.filter(
    (el, index) =>
      array.indexOf(el) === index && arrOfUniqueValuesNewWay.push(el)
  );

  return arrOfUniqueValuesNewWay;
};

const array = [37, 5, 7, 9, '9', 5, 7, 37, 3];

const arrOfUniqueValuesOldWay = makeArrayOfUniqueValues(array);
const arrOfUniqueValuesNewWay = [...new Set(array)];

const findDuplicates = array => {
  const arrOfDuplicates = [];

  array.filter((el, index) => {
    if (array.indexOf(el) !== index) {
      arrOfDuplicates.push(el);
    }
  });

  return arrOfDuplicates;
};

const arrOfDuplicates = findDuplicates(array);

console.log(arrOfUniqueValuesOldWay);
console.log(arrOfUniqueValuesNewWay);
console.log(arrOfDuplicates);

const countOccurrences = (arr, targetValue) =>
  arr.reduce((acc, value) => (value === targetValue ? acc + 1 : acc), 0);

console.log(countOccurrences(array, 5));
console.log(countOccurrences([5, 5, 2, 1, 2, 3, 5], 5));

const deleteNth = (array, n) => {
  array.map(el => {
    let arrOfDuplicates = array.filter(num => num === el);

    if (arrOfDuplicates.length > n) {
      for (let i = 0; i < arrOfDuplicates.length - n; i++) {
        array.splice(array.lastIndexOf(el), 1);
      }
    }
  });

  return array;
};

console.log(deleteNth([1, 1, 1, 1, 2], 2));
console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([10, 17, 10, 18, 2], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));

const findAllIndices = (array, element) => {
  let indices = [];
  let index = array.indexOf(element);

  for (let el of array) {
    if (el === element) {
      indices.push(index);
      index = array.indexOf(el, index + 1);
    }
  }

  return indices;
};

console.log(findDuplicates(array));
console.log(findAllIndices(array, 37));

const zipWith = (fn, arr1, arr2) => {
  const array = [];

  const minLength = Math.min(arr1.length, arr2.length);

  for (let i = 0; i < minLength; i++) {
    array.push(fn(arr1[i], arr2[i]));
  }

  return array;
};

console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]));
console.log(zipWith((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3]));

const peak = array => {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (
      array.slice(0, i).reduce((total, current) => total + current, 0) ===
      array.slice(i + 1).reduce((total, current) => total + current, 0)
    ) {
      index = i;
    }
  }

  return index;
};

console.log(peak([1, 2, 3, 5, 3, 2, 1]));
console.log(peak([1, 12, 3, 3, 6, 3, 1]));
console.log(peak([10, 20, 30, 40]));

const isLuckyTicket = digits => {
  digits = digits.toString();

  let firstHalf = 0;
  let secondHalf = 0;

  for (let i = 0; i < digits.length / 2; i++) {
    firstHalf += Number(digits[i]);
  }

  for (let j = digits.length / 2; j < digits.length; j++) {
    secondHalf += Number(digits[j]);
  }

  return firstHalf === secondHalf;
};

console.log(isLuckyTicket(123_456));
console.log(isLuckyTicket(123_321));
console.log(isLuckyTicket(123_303));

const calculateTotalSumOfLuckyTickets = digits => {
  const isThisNumberLucky = digits => {
    digits = digits.toString().split('');

    let firstHalf = 0;
    let secondHalf = 0;

    digits.map((digit, index) => {
      index < digits.length / 2
        ? (firstHalf += Number(digit))
        : (secondHalf += Number(digit));
    });

    return firstHalf === secondHalf;
  };

  let sum = 0;

  for (let i = 0; i <= digits; i++) {
    i = i.toString().padStart(6, 0);
    isThisNumberLucky(i) && (sum += 1);
  }

  return sum;
};

console.log(calculateTotalSumOfLuckyTickets(999_999));

const moveZerosToTheEnd = array => {
  const newArr1 = [];
  const newArr2 = [];

  array.map(num => (num !== 0 ? newArr1.push(num) : newArr2.push(num)));

  return newArr1.concat(newArr2);
};

console.log(moveZerosToTheEnd([1, 0, 2, 0, 0, 3]));

const sortArray = array => {
  const tempArr = [];
  const arrOfOdds = [];
  const sortedArray = [];

  array.map(el => {
    if (el % 2 === 0) {
      tempArr.push(el);
    } else {
      tempArr.push('');
      arrOfOdds.push(el);
    }
  });

  tempArr.map(el => sortedArray.push(el));
  arrOfOdds.sort((a, b) => a - b);

  sortedArray.map(el => {
    if (el === '') {
      for (let elem of arrOfOdds) {
        sortedArray.splice(sortedArray.indexOf(el), 1, elem);
      }
    }
  });

  return sortedArray;
};

console.log(sortArray([5, 8, 6, 3, 4]));

const countPairs = gloves => {
  const obj = gloves.reduce((acc, glove) => {
    !acc[glove] && (acc[glove] = 0);

    acc[glove]++;

    return acc;
  }, {});

  let count = 0;

  for (let item in obj) {
    count += Math.floor(obj[item] / 2);
  }

  return count;
};

console.log(countPairs(['red', 'green', 'blue']));
console.log(countPairs(['red', 'green', 'red', 'blue', 'blue']));
console.log(countPairs(['red', 'red', 'red', 'red', 'red', 'red']));

const findAllGlovesOfAColor = (gloves, color) =>
  gloves.reduce((acc, cur) => acc + (cur === color ? 1 : 0), 0);

console.log(
  findAllGlovesOfAColor(
    ['green', 'red', 'green', 'red', 'blue', 'blue', 'green'],
    'green'
  )
);

console.log(
  findAllGlovesOfAColor(
    ['green', 'red', 'green', 'red', 'blue', 'blue', 'green'],
    'black'
  )
);

const buildASquare = num => ('+'.repeat(num) + '\n').repeat(num).trim();

console.log(buildASquare(3));
console.log(buildASquare(5));

const likes = names => {
  if (!Array.isArray(names) || names.length <= 0) return;

  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
};

console.log(likes(['Mila', 'Leo']));

const domainName = url =>
  url
    .split('://')[1]
    .replace('www.', '')
    .replace('.com', '')
    .split('/')[0]
    .split('.')[0];

console.log(domainName('http://google.co.jp'));
console.log(domainName('http://github.com/carbonfive/raygun'));
console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('https://www.cnet.com'));

const palindrome = string => {
  const re = /[\W_]/g;
  const lowRegStr = string.toLowerCase().replace(re, '');
  const splittedStr = lowRegStr.split('');

  let reversedStrArr = [];

  for (let i = splittedStr.length - 1; i >= 0; i--) {
    reversedStrArr.push(splittedStr[i]);
  }

  const reversedStr = reversedStrArr.join('');

  return reversedStr === lowRegStr;
};

console.log(palindrome('A man, a plan, a canal. Panama'));
console.log(palindrome('A man, a plan, a canal. Panama!'));
console.log(palindrome('A man, a plan, a canal. Panamas'));

let word = 'RaceCar';

console.log(palindrome(word));
console.log(word.toLowerCase().split('').reverse().join(''));

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

console.log(capitalize('oops'));

const makeAcronym = fullName => {
  return fullName
    .split(' ')
    .map(name => `${name.charAt(0).toUpperCase()}.`)
    .join('');
};

console.log(makeAcronym('teo meo'));

const swapCase = str => {
  const array = str.split('');
  const newArr = [];

  for (let el of array) {
    if (el === el.toLowerCase()) {
      newArr.push(el.toUpperCase());
    } else if (el === el.toUpperCase()) {
      newArr.push(el.toLowerCase());
    } else {
      newArr.push(el);
    }
  }

  return newArr.join('');
};

console.log(swapCase(`Hey, how's Michaela?`));

const toCamelCase = str => {
  const newArr = [];

  const createNewStr = sign => {
    const splittedStr = str.split(sign);

    splittedStr.map(word => {
      splittedStr.indexOf(word) === 0
        ? newArr.push(word)
        : newArr.push(`${word.charAt(0).toUpperCase()}${word.slice(1)}`);
    });
  };

  if (str.includes('-')) {
    createNewStr('-');

    return newArr.join('');
  } else if (str.includes('_')) {
    createNewStr('_');

    return newArr.join('');
  } else {
    return str;
  }
};

console.log(toCamelCase('_some_variable'));
console.log(toCamelCase('Strange-naming'));

const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (err) {
    return false;
  }
};

console.log(isValidJSON('{"name":"Danny","id":12345}'));
console.log(isValidJSON('{"name":"Danny",id:12345}'));

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms. In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".

const DNAStrand = dna => dna.replace(/./g, char => DNAStrand.pairs[char]);

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}; // assigning property to a function

console.log(DNAStrand(''));
console.log(DNAStrand('ATGC'));
console.log(DNAStrand('GTAT'));
console.log(DNAStrand('AAAA'));

const findHighestScoringWord = x => {
  const words = x.split(' ');
  const alphabetMap = {};

  for (let i = 'a'.charCodeAt(), j = 1; i <= 'z'.charCodeAt(); i++, j++) {
    alphabetMap[i] = j;
  }

  let highestScoringWord = { word: '', score: 0 };

  words.forEach(w => {
    const chars = w.split('');

    const sumOfChars = chars.reduce(
      (count, char) => count + alphabetMap[char.charCodeAt()],
      0
    );

    if (sumOfChars > highestScoringWord.score) {
      highestScoringWord = { word: w, score: sumOfChars };
    }
  });

  return highestScoringWord.word;
};

console.log(findHighestScoringWord('man i need a taxi up to ubud'));
console.log(findHighestScoringWord('what time are we climbing up the volcano'));
console.log(findHighestScoringWord('take me to semynak'));
console.log(findHighestScoringWord('bbc z aaaaaaaa'));

const splitStringIntoPairs = str => {
  const array = str.split('');

  if (array.length % 2 !== 0) {
    array.push('_');
  }

  const subArr = [];

  for (let i = 0; i < array.length; i += 2) {
    subArr.push(array[i] + array[i + 1]);
  }

  return subArr;
};

console.log(splitStringIntoPairs('abcdef12345'));

const validBraces = braces => {
  let tracer = [];

  for (let brace of braces) {
    if (brace === '(' || brace === '{' || brace === '[') {
      tracer.push(brace);

      if (tracer.length === 0) return false;
    } else {
      let lastBrace = tracer[tracer.length - 1];

      if (
        (lastBrace === '[' && brace === ']') ||
        (lastBrace === '{' && brace === '}') ||
        (lastBrace === '(' && brace === ')')
      ) {
        tracer.pop();
      } else {
        break;
      }
    }
  }

  return tracer.length === 0;
};

console.log(validBraces('()'));
console.log(validBraces('(){}[]'));
console.log(validBraces('([{}])'));
console.log(validBraces('[({})](]'));
console.log(validBraces('[(])'));
console.log(validBraces('(}'));
