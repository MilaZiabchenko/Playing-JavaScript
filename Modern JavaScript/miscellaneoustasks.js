import { recentDates } from './constants.js';

const calcDays = (prevDate, nextDate) => {
  const date1 = new Date(prevDate);
  const date2 = new Date(nextDate);

  return Math.round(
    (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)
  );
};

const calcPeriods = arr => {
  const periods = [];

  for (let i = 0; i < arr.length - 1; i++) {
    periods.push(calcDays(arr[i], arr[i + 1]));
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

const calcDaysNum = date => {
  const now = new Date();
  date = new Date(date);

  return Math.round((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
};

console.log(`${calcDaysNum('07/03/2021')} days`);
console.log(`${calcDaysNum('09/28/2021')} days`);
console.log(`${calcDaysNum('01/01/2022')} days`);

const showFormattedDate = date => {
  let stringDate = date + '';
  let day = stringDate.slice(8, 10);
  let month = stringDate.slice(4, 7);
  let year = stringDate.slice(11, 15);
  let formattedDate = `'The date is ${day} of ${month}, ${year}'`;

  return formattedDate;
};

console.log(showFormattedDate(new Date('2021-12-29T01:00:00')));
console.log(showFormattedDate(new Date()), new Date());

function reverseNumber(num) {
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
}

console.log(reverseNumber(-579));
console.log(reverseNumber(89753));

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

const findMaxDifference = arr => {
  let maxDiff = arr[1] - arr[0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > maxDiff) {
        maxDiff = arr[j] - arr[i];
      }
    }
  }

  return maxDiff;
};

const findMinDifference = arr => {
  let arrCopy = [...arr];
  arrCopy.sort((a, b) => a - b);

  let diff = Number.MAX_VALUE;

  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] - arrCopy[i - 1] < diff) {
      diff = arrCopy[i] - arrCopy[i - 1];
    }
  }

  return diff;
};

function adjacentElementsMaxProduct(array) {
  let newArr = [];
  
  for (let i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1]);
  }

  return Math.max(...newArr);
}

let array = [1, 55, 17, 77, 709, 95, -10, 100, 205];

console.log(getBiggestNumber(array));
console.log(findMaxDifference(array));
console.log(findMinDifference(array));
console.log(adjacentElementsMaxProduct(array));

function findHighestScoringWord(x) {
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
}

console.log(findHighestScoringWord('man i need a taxi up to ubud'));
console.log(findHighestScoringWord('what time are we climbing up the volcano'));
console.log(findHighestScoringWord('take me to semynak'));
console.log(findHighestScoringWord('bbc z aaaaaaaa'));

function domainName(url) {
  return url
    .split('://')[1]
    .replace('www.', '')
    .replace('.com', '')
    .split('/')[0]
    .split('.')[0];
}

console.log(domainName('http://google.co.jp'));
console.log(domainName('http://github.com/carbonfive/raygun'));
console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('https://www.cnet.com'));

function palindrome(string) {
  const re = /[\W_]/g;
  const lowRegStr = string.toLowerCase().replace(re, '');
  const splittedStr = lowRegStr.split('');

  let reversedStrArr = [];

  for (let i = splittedStr.length - 1; i >= 0; i--) {
    reversedStrArr.push(splittedStr[i]);
  }

  const reversedStr = reversedStrArr.join('');

  return reversedStr === lowRegStr;
}

console.log(palindrome('A man, a plan, a canal. Panama'));
console.log(palindrome('A man, a plan, a canal. Panama!'));
console.log(palindrome('A man, a plan, a canal. Panamas'));

let word = 'RaceCar';

console.log(palindrome(word));
console.log(word.toLowerCase().split('').reverse().join(''));

const makeAcronym = fullName => {
  return fullName
    .split(' ')
    .map(name => `${name.charAt(0).toUpperCase()}.`)
    .join('');
};

console.log(makeAcronym('teo meo'));

const splitStringIntoPairs = str => {
  const arr = str.split('');

  if (arr.length % 2 !== 0) {
    arr.push('_');
  }

  const subArr = [];

  for (let i = 0; i < arr.length; i += 2) {
    subArr.push(arr[i] + arr[i + 1]);
  }

  return subArr;
};

console.log(splitStringIntoPairs('abcdef12345'));

function validBraces(braces) {
  let tracer = [];

  for (let brace of braces) {
    if (brace === '(' || brace === '{' || brace === '[') {
      tracer.push(brace);
    } else {
      if (tracer.length === 0) return false;

      let lastBrace = tracer[tracer.length - 1];
      if (
        (brace === ']' && lastBrace === '[') ||
        (brace === '}' && lastBrace === '{') ||
        (brace === ')' && lastBrace === '(')
      ) {
        tracer.pop();
      } else {
        break;
      }
    }
  }

  return tracer.length === 0;
}

console.log(validBraces('()'));
console.log(validBraces('(){}[]'));
console.log(validBraces('([{}])'));
console.log(validBraces('[({})](]'));
console.log(validBraces('[(])'));
console.log(validBraces('(}'));

function swapCase(str) {
  const arr = str.split('');
  const newArr = [];

  for (let el of arr) {
    if (el === el.toLowerCase()) {
      newArr.push(el.toUpperCase());
    } else if (el === el.toUpperCase()) {
      newArr.push(el.toLowerCase());
    } else {
      newArr.push(el);
    }
  }

  return newArr.join('');
}

console.log(swapCase(`Hey, how's Michaela?`));

function toCamelCase(str) {
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
}

console.log(toCamelCase('_some_variable'));
console.log(toCamelCase('Strange-naming'));

let arr = [3, 5, 7, 9, 7, 3];

const arrOfUniqueValues = [...new Set(arr)];
const setOfUniqueValues = new Set(arr);

const findDuplicates = arr => {
  const arrOfDuplicates = [];
  arr.filter((el, index) => {
    if (arr.indexOf(el) !== index) {
      arrOfDuplicates.push(el);
    }
  });

  return arrOfDuplicates;
};

const arrOfDuplicates = findDuplicates(arr);
const setOfDuplicates = new Set(arrOfDuplicates);

console.log(arrOfUniqueValues);
console.log(arrOfDuplicates);
console.log(setOfUniqueValues);
console.log(setOfDuplicates);

function deleteNth(arr, n) {
  arr.map(el => {
    let arrOfDuplicates = arr.filter(num => num === el);

    if (arrOfDuplicates.length > n) {
      for (let i = 0; i < arrOfDuplicates.length - n; i++) {
        arr.splice(arr.lastIndexOf(el), 1);
      }
    }
  });

  return arr;
}

console.log(deleteNth([1, 1, 1, 1, 2], 2));
console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([10, 17, 10, 18, 2], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));

arr = [9, 'watermelon', 9, 3, null, 9, '99', 3, 'watermelon', 99];

const findAllIndices = (arr, element) => {
  let indices = [];
  let index = arr.indexOf(element);

  for (let el of arr) {
    if (el === element) {
      indices.push(index);
      index = arr.indexOf(el, index + 1);
    }
  }

  return indices;
};

console.log(findDuplicates(arr));
console.log(findAllIndices(arr, 9));
console.log(findAllIndices(arr, 'watermelon'));

const peak = arr => {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (
      arr.slice(0, i).reduce((total, current) => total + current, 0) ===
      arr.slice(i + 1).reduce((total, current) => total + current, 0)
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

const moveZerosToTheEnd = arr => {
  const newArr1 = [];
  const newArr2 = [];

  arr.map(num => (num !== 0 ? newArr1.push(num) : newArr2.push(num)));

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
  gloves.reduce((acc, cur) => {
    return acc + (cur === color ? 1 : 0);
  }, 0);

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

function likes(names) {
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
}

console.log(likes(['Mila', 'Leo']));

array = [1, 0, 3, 4, 5, 650, 7, 8];

let indexL = 0;
let largest = array[indexL];
let indexS = 0;
let smallest = array[indexS];

for (let i = 0; i < array.length; i++) {
  array[i] > largest && (indexL = i) && (largest = array[i]);
  array[i] < smallest && (indexS = i) && (smallest = array[i]);
}

console.log(`${largest} is the largest element at the index ${indexL}`);
console.log(`${smallest} is the smallest element at the index ${indexS}`);

array.length = 10;

console.log(array);

array[12] = '13th element';
array[10] = function () {
  return 'Hey there!';
};

console.log(array);

console.log(array[10]());

const calcAverage = arr => {
  let total = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    typeof arr[i] === 'number' && (total += arr[i]) && count++;
  }

  return total / count;
};

const average = calcAverage(array);

console.log(average);

const denseArray = [];

for (let i = 0; i < array.length; i++) {
  array[i] && denseArray.push(array[i]);
}

console.log(denseArray);

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

console.log(DNAStrand.name); // getting function name property

const [first, second, third, ...rest] = DNAStrand.name; // string destructuring with rest

console.log(first, second, third);
console.log(...rest);

const zipWith = (fn, a0, a1) => {
  const arr = [];

  const minLength = Math.min(a0.length, a1.length);

  for (let i = 0; i < minLength; i++) {
    arr.push(fn(a0[i], a1[i]));
  }

  return arr;
};

console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]));
console.log(zipWith((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3]));
