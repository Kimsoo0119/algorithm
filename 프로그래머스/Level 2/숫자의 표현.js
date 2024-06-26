function solution(num) {
  let count = 1;
  let seperate = 2;

  while (true) {
    const sum = (seperate * (seperate + 1)) / 2;
    if (num - sum < 0) {
      break;
    }

    if ((num - sum) % seperate === 0) {
      count++;
    }

    seperate++;
  }

  return count;
}
