//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for (let i in array) {
    if (operation(array[i])) {
      count++;
    }
  }
  return count >= 5;
}

function checkScores(score) {
  return score > 70;
}

function resultScore(numRoom, check) {
  return check
    ? `นักเรียนห้องที่ ${numRoom} ผ่านเกณฑ์ ✅`
    : `นักเรียนห้องที่ ${numRoom} ไม่ผ่านเกณฑ์ ❌`;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = resultScore(
  1,
  atLeastFive(studentScoresRoom1, checkScores)
);
let scoreRoom2Result = resultScore(
  2,
  atLeastFive(studentScoresRoom2, checkScores)
);
let scoreRoom3Result = resultScore(
  3,
  atLeastFive(studentScoresRoom3, checkScores)
);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
