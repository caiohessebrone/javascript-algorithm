function dropElements(arr, func) {
  let indexValue = []
  for (let num of arr){
    if (!func(num)){
      indexValue.push(arr.indexOf(num))
    }else{
      break
    }
  }
  arr.splice(indexValue[0] ,(indexValue.length -1)+1)
  return arr;
}


dropElements([1, 2, 3, 4], function(n) {return n > 5;})