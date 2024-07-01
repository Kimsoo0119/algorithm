function solution(s) {
  const middleIndex = Math.floor(s.length / 2);

  return s.length % 2 === 0 ? s[middleIndex - 1] + s[middleIndex] : s[middleIndex];
}
