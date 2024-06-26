function solution(str) {
  let count = 0;
  let zeroCount = 0;

  while (str !== "1") {
    const a = str.split("0").join("");
    zeroCount += str.length - a.length;
    str = a.length.toString(2);
    count++;
  }

  return [count, zeroCount];
}
