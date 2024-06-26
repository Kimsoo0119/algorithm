function solution(str) {
  let stack = 0;

  for (let char of str) {
    if (char === "(") {
      stack += 1;
    } else {
      if (stack === 0) {
        return false;
      }
      stack -= 1;
    }
  }

  return stack === 0;
}
