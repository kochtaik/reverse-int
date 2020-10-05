module.exports = function reverse (n) {
  const str = String(n);
  let reversed = str.split('').reverse().join('');
  if (reversed[reversed.length - 1] === '-') {
    reversed = reversed.slice(0, str.length - 1)
  } return Number(reversed);
}
