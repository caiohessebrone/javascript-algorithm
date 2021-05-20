function destroyer(arr,...a) {
  return arr.filter(item => !a.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);