function solution(s, n) {
  return [...s]
    .map((char) => {
      if (char === " ") return char;
      const code = char.charCodeAt(0);
      const isUpperCase = code >= 65 && code <= 90;
      const offset = isUpperCase ? 65 : 97;
      return String.fromCharCode(((code - offset + n) % 26) + offset);
    })
    .join("");
}
