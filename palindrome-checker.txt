const dirtyStr = str => {
  return str
    .toLowerCase()
    .replace(/\.|,|\s|_|\/|\\|-|\(|\)/g, '')

}
function palindrome(str) {
  const reverseStr = [...dirtyStr(str)]
    .reverse()
    .reduce((acc, item) => acc+item)
  return dirtyStr(str) === reverseStr;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));