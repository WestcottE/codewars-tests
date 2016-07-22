var str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
  //...
  var capIt = this.split(" ");

  var array = [];

  console.log(capIt);

  for (var i = 0; i < capIt.length; i++){
    var string = capIt[i].charAt(0).toUpperCase() + capIt[i].substring(1);
    array.push(string);
  }

  console.log(array.join(' '));

};

str.toJadenCase();
