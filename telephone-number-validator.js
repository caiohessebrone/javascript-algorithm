function telephoneCheck(str) {
  let n = /^(^1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
  return n.test(str);
}

telephoneCheck("1(555)555-5555")
telephoneCheck("55555555")