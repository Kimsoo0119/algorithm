function solution(a, b, total) {
  let answer = 0;
  while (total >= a) {
    let returnTotal = Math.floor(total / a) * b;
    let rest = total % a;
    answer += returnTotal;
    total = returnTotal + rest;
  }
  return answer;
}
