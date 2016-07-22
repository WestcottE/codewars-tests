var str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
  //...
  function toJadenCase() {
    console.log('Hello');
  }

  console.log(this.charAt(0).toUpperCase() + this.slice(1));
};
