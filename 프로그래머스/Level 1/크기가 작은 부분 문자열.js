function solution(t, p) {
  const arr = [];
  for (let i = 0; i <= t.length - p.length; i++) {
    arr.push(t.slice(i, i + p.length));
  }

  return arr.filter((num) => p >= num).length;
}
