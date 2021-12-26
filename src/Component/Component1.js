import React from "react";

const para2 ={
    color: 'blue',
    marginTop: '10px'
   }
function Greet(){
   return (
    <div className='box-1'>
         <h1>This is created using functional Component</h1>
               <p className="para1">This is  done using external CSS</p>
               <p style={para2}>This is  done using inlines CSS</p>
    </div>
    )
}

export default Greet;