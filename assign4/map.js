var inputarray=[1,2,3,4]
var inputnum=2
function mapfun(value)
{
value= value*2
return value;
}
var outputarray=inputarray.map(mapfun)
console.log(outputarray)