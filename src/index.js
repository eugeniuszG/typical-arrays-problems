exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0 
  } 
  if (array.length) {
    let min = array[0]
    array.forEach(element => {
      if (element < min) {
        min = element;
      }
    });
    return min;  
  }
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0 
  }  
  if (array.length) {
    let max = array[0]
    array.forEach(element => {
      if (element > max) {
        max = element;
      }
    });  
    return max
  }

}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0 
  } 
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (array.reduce(reducer))/array.length;
}
