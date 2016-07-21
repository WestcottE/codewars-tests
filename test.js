var xos = 'xo';

function XO(str) {
    //code here

    //turn all string to lowercase
    var string = str.toLowerCase();
    console.log(string);
    var array = [],
        xArray = [],
        oArray = [];

        //pushes the string into the array array
        array.push(string);

        //loops through the array item and seperates the x's and o's into seperate arrays
        for(var i = 0; i < array[0].length; i++) {
          if (array[0].charAt(i) === 'x') {
            xArray.push(array[0].charAt(i));
            console.log(xArray);
          }else if (array[0].charAt(i) === 'o') {
            oArray.push(array[0].charAt(i));
          }
        }


        //checks the length of the xArray and oArray to see if the lengths are the same. Returns true or false
        if (xArray.length === oArray.length){
          return 'True';
          console.log(true);
        }
        else {
          return 'False';
          console.log(false);
        }

}


XO(xos);
