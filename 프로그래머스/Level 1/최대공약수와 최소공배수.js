function solution(n, m) {
  const gcdValue = gcd(n, m);
  const lcmValue = lcm(n, m, gcdValue);

  return [gcdValue, lcmValue];
}

const gcd = (n, m) => {
  while (m !== 0) {
    let temp = m;
    m = n % m;
    n = temp;
  }

  return n;
};

const lcm = (n, m, gcdValue) => (n * m) / gcdValue;
