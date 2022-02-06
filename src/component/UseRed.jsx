import React, { useReducer } from 'react';


const initialState=0;


const reducer=(state,action)=>{
    console.log(state,action);
    if(action.type==="inc"){
        return state+1
    }
    if(action.type==="dec"){
        return state-1
    }

}

const UseRed = () => {
    const[state,dispatch]=useReducer(reducer,initialState);




  return (
      <>
      <h1>UseReducer Example</h1>
      <div className='box'>
      <p>{state}</p>
      <button onClick={()=>dispatch({type:"inc"})}>Ince</button>
      
      <br />
      <button onClick={()=>dispatch({type:"dec"})}>Decrement</button>
      <br />
      </div>
      

      </>
  )
};

export default UseRed;
