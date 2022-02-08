function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  var totalChar = 0;
  for(var x = 0; x < str1.length ; x++)
  {
      totalChar++;
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
    
  }
  console.log("Total vowel is "+vcount);
  console.log("total charactera is "+totalChar);

}
vowel_count("The quick brown fox");


function checkString(str1){
    var lower = str1.toLowerCase();
    var upper = str1.toUpperCase();

    if(str1 === upper){
        console.log("string is upper case");
    }
    else{
        console.log("string is not upper case");
    }
}

// checkString("The quick brown fox");
checkString("THE QUICK BROWN FOX");

