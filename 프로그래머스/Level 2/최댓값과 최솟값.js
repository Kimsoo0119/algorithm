function solution(s) {
  const splitedNum = s.split(" ").sort((a, b) => a - b);

  return splitedNum[0] + " " + splitedNum[splitedNum.length - 1];
}
