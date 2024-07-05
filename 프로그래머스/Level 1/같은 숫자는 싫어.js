function solution(arr) {
  return arr.reduce((acc, value) => {
    if (acc[acc.length - 1] !== value) acc.push(value);
    return acc;
  }, []);
}
