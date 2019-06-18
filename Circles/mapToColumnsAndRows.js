// For carving up an array into rows and columns
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const totArr = [];

while (arr.length > 0) {
  const chunk = arr.splice(0, 3);
  const d = chunk.map(i => `<col>${i}</col>`);
  totArr.push(`<row>`);
  totArr.push(d);
  totArr.push(`</row>`);
}
console.log(totArr.flat(2));
