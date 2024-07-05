function solution(arr1, arr2) {
  return arr1.map((arr, arr1Idx) => arr.map((num, idx) => num + arr2[arr1Idx][idx]));
}
