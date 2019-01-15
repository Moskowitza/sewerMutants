// For any string, find all combinations without repeating

function combine(str) {
  const result = [];
  for (let i = 1; i < Math.pow(2, str.length) - 1; i++)
    result.push([...str].filter((_, pos) => (i >> pos) & 1).join(''));
  return result;
}
console.log(combine('dog'));
