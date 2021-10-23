// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
  let arr = str.split("");
  let newArr = [];

  while (arr.length > 0) {
    let twoSimbols = arr.splice(0, 2).join("");
    if (twoSimbols.length < 2) {
      twoSimbols += "_";
    }
    newArr.push(twoSimbols);
  }
  return newArr;
}

console.log(solution("asdgfsaga"));
