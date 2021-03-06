function makeRollBook(date){
  const days = [];
  date = new Date(date)
  
  const monthStart = new Date(date.setDate(1))
  date.setMonth(date.getMonth()+1)
  date.setDate(0)
  const monthEnd = date

  while(monthStart.getTime() <= monthEnd.getTime()){
    days.push(`${monthStart.getFullYear()}-${monthStart.getMonth()+1 < 10 ? `0${monthStart.getMonth()+1}` : monthStart.getMonth()+1}-${monthStart.getDate() < 10 ? `0${monthStart.getDate()}` : monthStart.getDate()}`);
    monthStart.setDate(monthStart.getDate()+1)
  }
  return {
    days
  }
}

console.log(makeRollBook(new Date()));