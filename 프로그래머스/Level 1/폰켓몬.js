function solution(nums) {
  const uniqueNums = new Set(nums);

  return uniqueNums.size > nums.length / 2 ? nums.length / 2 : uniqueNums.size;
}
