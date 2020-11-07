const now = new Date()
const monthStart = new Date(now.setDate(1))
const monthEnd = () => {
  now.setMonth(now.getMonth()+1)
  now.setDate(0)
  return now
}

console.log(monthStart);
console.log(monthEnd());