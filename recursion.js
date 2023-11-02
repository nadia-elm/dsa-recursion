/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 1) return nums[0];
  let num = nums.pop();
  return num * product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) return words[0].length;
  if (words.length === 2) {
    if (words[0].length >= words[1].length) {
      return words[0].length;
    } else {
      return words[1].length;
    }
  }
  let word1 = words[words.length - 1];
  let word2 = words[words.length - 2];
  if (word1.length > word2.length) {
    word1 = words.pop();
    words.pop();
    words.push(word1);
    return longest(words);
  } else if (word1.length <= word2.length) {
    words.pop();
    return longest(words);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 1) {
    return str[0];
  }
  let char = str[0];
  newStr = str.slice(2);
  if (newStr.length > 0) {
    return char + everyOther(newStr);
  } else {
    return char;
  }
}
/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }
  if (str.length >= 2) {
    if (str[0] === str[str.length - 1]) {
      newStr = str.slice(2, str.length - 2);
      if (newStr.length === 0) return true;
      return isPalindrome(newStr);
    } else {
      return false;
    }
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (arr.length === idx) {
    return -1;
  }
  if (arr[idx] === val) {
    return idx;
  } else {
    idx++;
    return findIndex(arr, val, idx);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = '') {
  if (newStr.length === str.length) return newStr;
  newStr = newStr + str[str.length - (1 + idx)];
  idx++;
  return revString(str, idx, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      console.log(key);
      arr.push(obj[key]);
      console.log(arr);
    }
    if (typeof obj[key] === 'object') {
      arr.push(...gatherStrings(obj[key]));
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
