var iso = "Dermatoglyphics";
var iso2 = "moOse";

function isIsogram(str){
  var string = str.toLowerCase(),
      array = [];

      array.push(string);

      var copy = array.slice(0);

      console.log(array);
      console.log(copy);

//seperating and adding letters to array
  for(var i = 0; i < array[0].length; i++) {
      array.push(array[0].charAt(i));
  }

  //shift removes the original word from the array
  array.shift();

  for(var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

isIsogram(iso);
isIsogram(iso2);
