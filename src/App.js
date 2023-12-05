import './App.css';
import { useReducer } from 'react';

function App() {

   const IncreaseValue = "INC";
   const DecreaseValue = "DEC";
   const initialState = 1;
   const stateFunction = (state, action) => {
    if(action.IncreaseValue){
      return state + 1;
    } 
    else if(action.DecreaseValue){
    return state - 1;
   }
  }
   const [counter, dispatch] = useReducer(stateFunction,initialState);  

  return (
    <div className="App">
      <h1>Counter is = <span>{counter}</span></h1>
      <button onClick={() => {dispatch({IncreaseValue})}}>Increase</button>
      <button onClick={() => {dispatch({DecreaseValue})}}>Decrease</button>
    </div>
  );
}

export default App;
