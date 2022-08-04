import { createContext, useState } from 'react';

import './App.css';


import Region from './Components/Region';


export const themeContext=createContext(null)

function App() {
  
  const[theme,setTheme]=useState('Light')
  const changeTheme=()=>{
    setTheme((current)=>(
      current==='Light'? 'Dark':'Light'
    ))
  }
   
  
    
  

  
   
  return (
    
    <themeContext.Provider value={{theme,changeTheme }}>
    <div className="App" id={theme}>
       <div className="header">
      <h1>Where in the world?</h1>
      <button className='button' onClick={changeTheme}>{theme} Mode</button>
    </div>
 
    <Region/>
    
     
    </div>
    </themeContext.Provider>
    
  );
}

export default App;
