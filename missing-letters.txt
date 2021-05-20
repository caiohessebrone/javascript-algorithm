function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const indexAlph = alphabet.indexOf(str[0])
  let sliceAlph = [...alphabet].slice(indexAlph)
  if(str === alphabet){return undefined}
  for (let letter in str){
    if (str[letter] !== sliceAlph[letter]){
      return sliceAlph[letter]
    }
  }
}

console.log(fearNotLetter("stvwx"));