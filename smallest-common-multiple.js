const range = (list) => {
  return Array
    .from({length: Math.max(...list)}, (_, i) => i+1)
    .splice(Math.min(...list)-1)
}

const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b)

const lcm = (a, b) => a * b / gcd(a, b)

const smallestCommons = arr => {
  return range(arr)
    .reduce((multiple, curr) => lcm(multiple, curr))
}


smallestCommons([23, 18]);