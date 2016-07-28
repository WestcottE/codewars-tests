/*
COMPLETE THE PATTERN #1
You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:

If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
*/
function pattern(n){
 var output="";
   // Happy Coding ^_^
   for (var i = 0; i < n; i++) {
     for (var j = 0; j < i; j++) {
       output += i;
     }
     if (i === n) break;
     output += "/n";
   }
 console.log(output);
}

pattern(1);
pattern(2);
pattern(3);
pattern(4);
