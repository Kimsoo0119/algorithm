// function solution(participants, completions) {
//   const completionsMap = new Map();
//   completions.map((completion) =>
//     completionsMap.has(completion)
//       ? completionsMap.set(completion, completionsMap.get(completion) + 1)
//       : completionsMap.set(completion, 1)
//   );

//   const b = participants.filter((participant) => {
//     if (completionsMap.has(participant)) {
//       let aCount = completionsMap.get(participant);
//       aCount === 1
//         ? completionsMap.delete(participant)
//         : completionsMap.set(participant, aCount - 1);
//       return false;
//     } else {
//       return true;
//     }
//   });

//   return b[0];
// }

function solution(participants, completions) {
  const completionsObj = {};
  completions.map((completion) => {
    completionsObj[completion] ? completionsObj[completion]++ : (completionsObj[completion] = 1);
  });

  return participants.find((participant) => !completionsObj[participant]--);
}
