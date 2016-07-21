var iso = "Dermatoglyphics";
var iso2 = "moOse";

function isIsogram(str){
  console.log("Starting Test");
  var string = str.toLowerCase(),
      array = [];

      array.push(string);

      var copy = array.slice(0);
      var i,j;

//seperating and adding letters to array
  for(var i = 0; i < array[0].length; i++) {
      array.push(array[0].charAt(i));
  }

  //shift removes the original word from the array
  array.shift();

//create two loops to check array against itself, but not agaisnt current array item
  for(i = 0; i < array.length; i++){
    for (j = 0; j< array.length; j++){
      if(j != i){
        if(array[i] == array[j]){
          return false;
        }
      }
    }
  }
  return true;
}

isIsogram(iso);
isIsogram(iso2);
