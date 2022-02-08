var count = 0;

while (count < 1) {
  var n = prompt("Enter your name.");
  var age = prompt("Enter your age.");

  if (n == "shuaib") {
    if (age >= 18) {
      alert(n + " you are logged in.");
      count++;
    } else if (age < 18) {
      alert(n + " you are not authorized.");
      count++;
    }
  } else {
    alert("name is incorrect\nplease re-enter your details.");
  }
}
