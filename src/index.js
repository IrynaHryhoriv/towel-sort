




module.exports = function towelSort (matrix) {
  
  let arr = [];
  (arguments.length == 0 || matrix.length == 0) ? (arr) : (
  
  matrix.forEach((element, index) => {
      (index != 0 && index % 2 != 0) ? (element.reverse()) : ('')
      console.log(element)
      element.forEach(i => {result.push(i)})
  })
  )
  
  return arr

}