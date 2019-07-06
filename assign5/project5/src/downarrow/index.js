import React, { Component } from 'react'
import  './styles.css'
class Downarrow extends Component{

handleclick=()=>
{
    var element = document.getElementById("mydiv");
    
   element.classList.toggle("expanded");
   

}
     



    render()
    {
        
           
        return(
            <div >
                <div className="rectangle">
                <div id="mydiv" className="rect1" >hey, iam here
                    
                </div>
                <div > 
                <img  src='assets/images/arrow.png' className="imgstyles"  alt ="this is arrow "   onClick={this.handleclick}  />
                
                </div>
                </div>

                

            </div>
        )
    }
}
export default Downarrow