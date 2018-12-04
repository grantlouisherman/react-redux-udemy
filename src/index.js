/*
1. Import React and ReactDom libraries
2. Create React Components
3. Take React Compoenet and put on screen
*/
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
      <label htmlFor="name" className="label">
        Enter Name:
      </label>
      <input id="name" type="text"/>
      <button style={{backgroundColor:"blue",color:"white"}}>
        Submit
      </button>
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
