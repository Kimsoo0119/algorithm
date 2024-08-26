function solution(s) {
  return [...s].map((str, idx) => {
    const splitedS = s.slice(0, idx).lastIndexOf(str);
    return splitedS === -1 ? -1 : idx - splitedS;
  });
}
