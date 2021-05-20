function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.forEach(item => {
    if (!arr2.includes(item))
    newArr.push(item)
  })
  arr2.forEach(item => {
    if (!arr1.includes(item))
    newArr.push(item)
  })
  console.log(newArr)
  return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);