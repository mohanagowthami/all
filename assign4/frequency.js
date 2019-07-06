var input1=["a","b","c","a","a","b"]

var count=1;
var obj={ }
function frequency(input)
{
    input.sort()
for ( var i=0;i<input.length;i++)
{
    if(input[i]==input[i+1])
    {
        count =count+1;
    }
    else
    { 
        obj[input[i]]=count;
        count=1;
        
    }
}
}
frequency(input1);
console.log(obj)