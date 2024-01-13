
const solution = (arr) => {

  const result = [];
  
  arr.forEach((num, idx) => {
    if (idx === 0 || arr[idx - 1] !== num) {
      result.push(num);
    }
  });

  return result;
}