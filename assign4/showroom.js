
var personA={ firstname: "gowthami",
          lastname:"gajula",
           carswishlist: [{ color:"blue", speed:240,model:"x1", fueltype:"y1",id:1},
                          {  color:"black",speed:320,model:"x2",fueltype:"y2",id:2},
                          {  color:"white",speed:320,model:"x3",fueltype:"y3",id:3}
                                                                              ],
        carsownlist:[{color:"blue", speed:240,model:"x1", fueltype:"y1",id:4}]}


 console.log(" before operations")
 console.log(personA);
 var  showroom=[{color:"blue", speed:240,model:"x1", fueltype:"y1",id:1},
{color:"blue", speed:240,model:"x1", fueltype:"y1",id:2},
{color:"blue", speed:240,model:"x1", fueltype:"y1",id:3},
{color:"blue", speed:240,model:"x1", fueltype:"y1",id:5}]
console.log(showroom);

function addcarsshowroom( obj)
{  showroom.push(obj);
}

var obj={  color:"white",speed:320,model:"x3",fueltype:"y3",id:6}
addcarsshowroom(obj);
console.log("after adding element into showroom");
console.log(showroom);
function addcarsowner(obj)
{
   var newid = obj.id;
           var k  =checkidshowroom(newid)
           if(k==1)
           {
              personA.carsownlist.push(obj) ;
           }
           else
           {
               console.log(" the car is not in the showroom so it can be added to the wishlist");
               personA.carswishlist.push(obj);
           }



}
function checkidshowroom(id)
{  var flag=0;
for(var i=0;i<showroom.length;i++)
{
    if( showroom[i].id==id)
    {   showroom.splice(i,1);
        flag=1;
        break;
    }
}
if(flag==1)
return 1;
else
return 0;
}
addcarsowner(obj);
console.log(" cars own list in person A");
console.log(personA.carsownlist);
function addwishlistfun(obj)
{
    personA.carswishlist.push(obj);

}
addwishlistfun(obj);
console.log(" cars wish list in personA");
console.log(personA.carswishlist);
var obj2={  color:"white",speed:320,model:"x3",fueltype:"y3",id:7}
console.log("without adding to the showroom");
addcarsowner(obj2);
console.log(personA.carsownlist);

       


             
                                                                                    
        
        
        
