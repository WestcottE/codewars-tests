/**
 * Given the number of consecutive integers and the total of the integers,
 * return the consecutive integer at the requested position.
 *
 * @param {int} x number of consecutive integers
 * @param {int} y sum of consecutive integers
 * @param {int} n position of requested integer
 * @return {int} consecutive integer at requested position
 */
function position(x, y, n) {
  // TODO: return consecutive integer at requested position
  var firstInt = [],
      equArray = [],
      count = 0;

  for (var i = 0; i < x; i++) {
    equArray.push(i);
    count = count + equArray[i];
  }

  firstInt.push((y - count)/x);

  for (i = 1; i < x; i++) {
    firstInt.push(firstInt[0]+i);
  }

return firstInt[n];
}

position(7,749,5);
