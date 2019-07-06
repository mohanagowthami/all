function strikerate(runs,balls)
{
    if(balls!=0)
    {
 var res=((runs/balls)*100).toFixed(2);
 return res;
    }
    else 
    return "infinity condition"
}
var res2=strikerate(0,20);
console.log(res2);