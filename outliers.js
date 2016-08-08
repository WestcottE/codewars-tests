function findOutlier(integers){
  //your code here
  var evens = [],
    odds = [],
    i,
    N;

  for (i = 0; i < integers.length; i++) {
   var check = integers[i]  % 2;
    if (check === 0) {
        evens.push(integers[i]);
    } else {
        odds.push(integers[i]);
    }
    }
    if(evens.length === 1){
      return evens[0];
      }
      else{
      return odds[0];
      }

}

// was not working, previously. Solution was that I had the final if statement running within the loop
