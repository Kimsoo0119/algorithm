// function solution(n) {
//    return Array(n).fill().map((value,idx) => idx % 2 === 1 ? "박" : "수").join("")
// }

function solution(n) {
  return "수박".repeat(n / 2 + 1).slice(0, n);
}
