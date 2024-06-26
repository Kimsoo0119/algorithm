function solution(str) {
  return str
    .split(" ")
    .map((char) => {
      if (!char) return;
      return Number.isNaN(char[0]) ? char : char[0].toUpperCase() + char.slice(1).toLowerCase();
    })
    .join(" ");
}
