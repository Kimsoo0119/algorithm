function solution(left, right) {
  return Array(right - left + 1)
    .fill()
    .map((_, idx) => calFactors(left + idx))
    .reduce((acc, num) => (acc += num), 0);
}

const calFactors = (num) => {
  const factors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors.push(i);
      if (i !== num / i) {
        factors.push(num / i);
      }
    }
  }
  return factors.length % 2 === 0 ? num : -num;
};
