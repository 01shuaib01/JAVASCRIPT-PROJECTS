
function myFunction() {
    var txt;
    if (confirm("This is advirtiesment!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}

myFunction();
