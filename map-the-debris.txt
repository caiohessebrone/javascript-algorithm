const getOrbPeriod = value => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let aPowerThree = Math.pow(earthRadius+value, 3)
  let y = Math.sqrt(aPowerThree/GM)
  let towPISqrt = 2*Math.PI
  return Math.round(towPISqrt*y)
}

function orbitalPeriod(arr) {
  return arr.map(({ name, avgAlt }) => {
    return {name: name, orbitalPeriod: getOrbPeriod(avgAlt)}
  })
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
