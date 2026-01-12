function average(array) {
  const sum = array.reduce((acc, num) => acc + num, 0);
  const averageNum = (sum / array.length);
  return averageNum
}

module.exports = average;