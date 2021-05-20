function translatePigLatin(str) {
  let chunkConsonant = ''
  const vowels = 'aeiou'
  for (let letter of str){
    if (!vowels.includes(letter)){
      chunkConsonant+=letter
    }else{
      break
    }
  }
  let rest = str.slice(chunkConsonant.length)
  return !vowels.includes(str[0]) ? 
  rest+chunkConsonant+'ay' : str+'way'
}

translatePigLatin("glove");