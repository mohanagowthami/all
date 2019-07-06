var str="gowthami"
var  letter="g"
function neighbour(str,letter)
{
for (var i=0;i< str.length;i++)
{
    if( str.charAt(i)===letter)
    {
      if(i==0)
      {
    //console.log(str.charAt(i-1));
    console.log(str.charAt(i+1));
      }
     else if(i==str.lenth-1)
     {
    console.log(str.charAt(i-1));
    //console.log(str.charAt(i+1));
     }
    else
    {
        console.log(str.charAt(i-1));
        console.log(str.charAt(i+1));
    }
}
}
}
neighbour(str,letter);