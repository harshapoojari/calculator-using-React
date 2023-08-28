import React, { useState } from "react";
// import Fab from '@mui/material/Fab';
function Body()
{
    const [input,setInput]=useState("");
    
  

    function handleCLick(event)
    {
        
            const value=event.target.value;
          
             setInput(prevValue=>{
                return prevValue+value
            })       
    }
    
    function handleDelete()
    {
            setInput(prevValue=>{
                return prevValue.slice(0,-1)
            })
    }

    function handleDeleteAll()
    {
        setInput("")
    }

    function handleEqual()
    {
    
        setInput(prevValue=>{
            var a=prevValue.slice(-1);
       if(a==='+'||a==='-'||a==='/'||a==='*'||a==='%')
            return "Error"
        else
            return eval(prevValue);
        })
        
    }
    
    function handleMinus(event)
    {
        const value=event.target.value;
      
        setInput(prevValue=>{
           return prevValue+value;
            
           })
           
       }      

    return <div className="items">

        <div className="input">
        <input type="text" placeholder="0" value={input}/>
        </div>
          <div className="row row1">
          
          <button onClick={handleDeleteAll} value="AC">AC</button>
          <button onClick={handleDelete} value="X">X</button>
          <button onClick={handleCLick} value="%">%</button>
          <button onClick={handleCLick} className="special" value="*">*</button>
         </div>
         <div className="row row2">
          <button onClick={handleCLick} value="7">7</button>
          <button onClick={handleCLick} value="8">8</button>
          <button onClick={handleCLick} value="9">9</button>
          <button onClick={handleCLick}className="special" value="/">/</button>
         </div>
         <div className="row row3">
          <button onClick={handleCLick} value="4">4</button>
          <button onClick={handleCLick} value="5">5</button>
          <button onClick={handleCLick} value="6">6</button>
          <button onClick={handleCLick} className="special" value="-">-</button>
         </div>
         <div className="row row4">
          <button  onClick={handleCLick} value="1">1</button>
          <button onClick={handleCLick} value="2">2</button>
          <button onClick={handleCLick} value="3">3</button>
          <button  onClick={handleCLick}className="special" value="+">+</button>
         </div>
         <div className="row row5">
          <button onClick={handleMinus} value="-" name="minus">+/-</button>
          <button onClick={handleCLick} value="0">0</button>
          <button onClick={handleCLick} value=".">.</button>
          <button  onClick={handleEqual}className="special" value="=">=</button>
         </div>
    </div>
}
export default Body