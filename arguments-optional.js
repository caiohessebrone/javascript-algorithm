const isInt = num => Number.isInteger(num)

const addTogether = (n1, n2=0) =>
  !isInt(n1) || !isInt(n2) ? undefined :
  !n2 == 0 ? n1+n2 : (n3) => !isInt(n3) ?
  undefined : n1+n3

console.log(addTogether(2,3));
console.log(addTogether(5)(7))