function solution(clothes) {
  const closet = new Map();

  for (const [name, type] of clothes) {
    closet.get(type) ? closet.set(type, closet.get(type) + 1) : closet.set(type, 1);
  }

  let combinations = 1;
  for (let count of closet.values()) {
    combinations *= count + 1;
  }

  return combinations - 1;
}
