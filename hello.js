alert("Hello World!");




var x = parseFloat(prompt("Enter a value < || > to 5", "0"));
var y = "";
y  = (x<5) ? "less than 5!" : (x>5) ? "greater than 5!" : (x === 5) ? "equal to 5!" : "a string!";
console.log(y);
alert("You entered " + x + ",which is " + y);
