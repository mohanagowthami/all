
var value;

value=[{ fullname:"gowthami", age:18},{ fullname:"mohana ",age:15}];

function filterfun(argobj)
{
    if(argobj.age>=18)
    return argobj;
}

const newarr=value.filter(filterfun)





console.log(newarr);