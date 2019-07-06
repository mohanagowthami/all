  var idarray=[]
  var distinction=0,gradeA=0,gradeB=0,gradeC=0,fail=0;

   var inputarray=    [
    {
    "name" : "John",
    "id": 1,
    "gpa" : 7.8
    },
    {
    "name" : "Rick",
    "id": 2,
    "gpa" : 3.9
    },
    {
    "name" : "Lisa",
    "id": 3,
    "gpa" : 8.9
    },
    {
    "name" : "John",
    "id": 1,
    "gpa" : 8.9
    }

]

function duplicatesremove(obj)
{  //console.log(obj)
   var flag=0;
   
    if(idarray.length==0)
    {
        idarray.push(obj.id)
         return obj
    }
    else{
        for(var i=0;i< idarray.length;i++){
            if(obj.id==idarray[i])
            {
                flag=1;
                break;

            }
        }
        if(flag==0)
        {
            idarray.push(obj.id)
            return obj;
        }
        else
        return ;
    }





}




var outputarray=inputarray.filter(duplicatesremove);
console.log(outputarray);
function grading( outputarray)
{
for(var i=0;i<outputarray.length;i++)
{   //console.log(outputarray[i].gpa)
    var value=outputarray[i].gpa
    if(value>=8)
    distinction=distinction+1;
    else if(8>value && value>=7)
    gradeA=gradeA+1;
    else if(7>value && value>=6)
    gradeB=gradeB+1;
    else if(6>value && value >=4)
    gradeC=gradeC+1;
    else
     fail=fail+1;
}
}
grading(outputarray);
console.log(distinction);
console.log(gradeA);
console.log(gradeB);
console.log(gradeC);
console.log(fail);
