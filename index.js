

const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"}
]
const superbowlWin=(record) => {
  const winYear= record.find(Element=> Element.result==='W')
  debugger
  if(winYear===undefined){
      return undefined
      
  }
  else if(winYear.result==='W') {
      return winYear.year
  }
}
  
