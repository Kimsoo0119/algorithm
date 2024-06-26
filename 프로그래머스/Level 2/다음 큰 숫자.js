function solution(n) {
  let biggerNum = n;
  const nTo2Leng = n.toString(2).split("0").join("").length;

  while (true) {
    biggerNum++;
    const numTO2Leng = biggerNum.toString(2).split("0").join("").length;

    if (nTo2Leng === numTO2Leng) break;
  }

  return biggerNum;
}
