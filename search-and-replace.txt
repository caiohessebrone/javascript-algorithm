const titleCase = (word) => {
  let firstLetter = word.slice(0, 1)
  let restWord = word.slice(1)
  return firstLetter.toUpperCase()+restWord
}

const myReplace = (str, before, after) => {
  after = after.toLowerCase()
  let afterTitleCase = before[0] === before[0].toUpperCase() ?
    titleCase(after) : after
  let a = str.split(' ')
    .map(item => item == before ? item = afterTitleCase : item)
    .reduce((acc, word) => acc+' '+word)
  console.log(a)
  return a;
}

myReplace("I think we should look up there", "up", "Down");