  const symbols = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    "\"": "&quot;",
  }

const convertHTML = (str) => {
  return [...str]
    .map(letter => [...'&><"\''].includes(letter) ? 
      letter = symbols[letter] : letter)
    .reduce((acc, letter) => 
      acc+letter
  )
}

console.log(convertHTML("Schindler's List"));
