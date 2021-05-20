var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

const cashBalance = total =>
  total.reduce((acc, value) => acc+value[1], 0)

const checkCashRegister = (price, cash, cid) => {
  const thing = cash-price
  const thingEqualBalance = cashBalance(cid) === thing
  const thingLessBalance = cashBalance(cid) < thing
  const cidAsObject = Object.fromEntries(cid)
  if (thingEqualBalance){
    return {status: 'CLOSED', change: cid}
  }else if (thingLessBalance){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  return denom
    .filter(item => item.val==thing)
}

let a = checkCashRegister(15.0, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

