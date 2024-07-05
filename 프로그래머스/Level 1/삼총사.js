function solution(num) {
  let count = 0;
  for (let i = 0; i <= num.length - 2; i++) {
    for (let j = i + 1; j <= num.length - 1; j++) {
      for (let k = j + 1; k <= num.length; k++) {
        if (num[i] + num[j] + num[k] === 0) {
          count++;
        }
      }
    }
  }
  return count;
}
