function solution(k, score) {
  let HOF = [];
  const answer = [];

  for (const dailyScore of score) {
    HOF = [dailyScore, ...HOF].sort((a, b) => a - b);
    if (HOF.length > k) HOF.shift();
    answer.push(HOF[0]);
  }

  return answer;
}

function solution(k, score) {
  let HOF = [];
  const answer = [];

  for (const dailyScore of score) {
    HOF.push(dailyScore);
    HOF.sort((a, b) => b - a).splice(k);
    answer.push(HOF.at(-1));
  }

  return answer;
}
