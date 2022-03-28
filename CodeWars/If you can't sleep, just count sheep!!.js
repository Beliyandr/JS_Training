/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countSheep(0), "");
    assert.strictEqual(countSheep(1), "1 sheep...");
    assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
  });
});

*/

const countSheep = function (num) {
  let count = [];
  for (let i = 0; i <= num; i++) {
    if (i !== 0) {
      count.push(`${i} sheep...`);
    } else {
      count.push("");
    }
  }
  return count.join("");
};

console.log(countSheep(5));
