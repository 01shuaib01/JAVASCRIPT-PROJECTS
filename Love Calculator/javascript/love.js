// alert("Love calculator");

// function Love(){
//    var LoveScore = Math.random();
//    LoveScore =LoveScore * 100;
//    LoveScore = Math.floor(LoveScLoveScore)+1;

//    alert(LoveScore);
// //    if(LoveScore > 70){
// //        alert("your love score is "+LoveScore+"%"+"you made each other.");
// //    }
// //    else{
// //     alert("your love score is "+LoveScore+"%");
// //    }
// }

function call(){
    // alert("Hello shuaib");
    document.getElementById("demo").innerHTML = "Hello bhai";
}

function LoveCal(){
    var LoveScore = Math.random();
    LoveScore = LoveScore * 100;
    LoveScore = Math.floor(LoveScore) + 1;
    
    if(LoveScore > 70){
        document.getElementById("demo").innerHTML = ("Your Love Score is "+LoveScore+"%"+" Both are made each other");
    }
    else{
        document.getElementById("demo").innerHTML = ("your love score is "+LoveScore+"%");
    }
}