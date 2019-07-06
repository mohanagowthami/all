import React, { Component } from 'react'
import  './styles.css'
import Singlegrid from './singlegrid.js'
class Grid extends Component{
    
display=(props)=>
{   var array=[];
    var finalarray=[];
    
    for(var j=0;j< this.props.rows;j++)
    {
    for( var i=0;i< this.props.cols;i++)
    {

        var k =<div><Singlegrid  columns={this.props.cols}/></div>
        array.push(k);
        

    }
    var p=<div> {array}</div>
    finalarray.push(p);
    

    }
    
    console.log(finalarray);
    return finalarray;

}



render()
{
    return(
    <div className="flex-container">
        {this.display()}
    

    </div>
    



    )
}



}
export default Grid