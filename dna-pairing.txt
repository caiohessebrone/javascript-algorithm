const pairElement = str => {
  return [...str].map(letter =>
    letter == 'A' ? ["A", "T"] 
    : letter == "T" ? ["T", "A"] 
    : letter == "G" ? ["G", "C"]
    : ["C", "G"]
  )
}

pairElement("ATGC");