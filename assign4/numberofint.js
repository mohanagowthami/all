
var countint=0,countobj=0,countstr=0,countother=0;

function numberofint(arr)
{
    for(i=0;i<arr.length;i++)
    { console.log(typeof arr[i])
        switch( typeof arr[i]){
            
            case ("number"):
                countint=countint+1;
                break;
            case ("string"):
                countstr=countstr+1;
                break;
            case ("object"):
                countobj=countobj+1;
                break;
                default:
                countother=countother+1;
                break;
        }

        }
    
}
numberofint([1,2,"gowthami",{ name :"gowthami"}]);
console.log(countint);
console.log(countstr);
console.log(countobj);
console.log(countother);
