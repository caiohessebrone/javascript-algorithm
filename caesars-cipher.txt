function rot13(str) {
  return str.replace(/\w/g, letter => 
  String.fromCharCode((letter.charCodeAt() % 26) + 65))
}

console.log(rot13("SERR PBQR PNZC"));


