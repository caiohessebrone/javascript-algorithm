const symbols = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&apos;",
  "\"": "&quot;",
}

const convertHTML = (str) => {
  return str
    .replace(/([<>&'\"])/g, letter => symbols[letter])
}

console.log(convertHTML("Schindler's List"));
