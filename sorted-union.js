const removeEqualValue = (arr) => {
  return arr.filter((item, index) =>
    arr.indexOf(item) == index
  )
}

const joinMatrix = (arr) => {
  return arr
    .reduce((list, item) => list.concat(item), [])
}

function uniteUnique(...arr) {
  const matrix = joinMatrix(arr)
  return removeEqualValue(matrix)
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));