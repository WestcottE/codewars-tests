function digital_root(n){
    var num = n.toString();
    var numArr = [],
        i;

    for (i = 0; i < num.length; i++) {
        numArr.push(num.charAt(i));
    }

    console.log(numArr);
}

digital_root(123);
