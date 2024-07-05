// process.stdin.setEncoding("utf8");
// process.stdin.on("data", (data) => {
//   const n = data.split(" ");
//   const width = Number(n[0]),
//     height = Number(n[1]);

//   const widthStar = "*".repeat(width);

//   console.log(`${widthStar}\n`.repeat(height));
// });

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const width = Number(n[0]),
    height = Number(n[1]);

  console.log(("*".repeat(width) + "\n").repeat(height));
});
