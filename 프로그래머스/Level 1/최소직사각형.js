function solution(sizes) {
  let gHeight = 0;
  let gWidth = 0;

  sizes.map((size) => {
    size.sort((a, b) => b - a);
    size[0] > gHeight ? (gHeight = size[0]) : null;
    size[1] > gWidth ? (gWidth = size[1]) : null;
  });

  return gHeight * gWidth;
}
