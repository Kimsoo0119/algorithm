function solution(price, money, count) {
  const result =
    money -
    Array(count)
      .fill()
      .reduce((acc, _, idx) => (acc += price * (idx + 1)), 0);

  return result >= 0 ? 0 : -result;
}
