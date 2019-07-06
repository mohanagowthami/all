
var inputobj={ 1:"one",2:"two"};
var outputobj={}

function viceversa(inputobj)
{
for ( var name  in inputobj)
{
    var val=inputobj[name];
    outputobj[val]=name;
}
console.log(outputobj)
}
viceversa(inputobj);
