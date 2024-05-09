
import { useState } from 'react';
import './App.css';
import Body from './Components/Body';

function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "true" // Convert to boolean
  );
  
  return (
    <div className={`App *:m-0 *:p-0 *:box-border *:overflow-x-hidden w-screen h-screen flex justify-center items-center text-text-light bg-background-light dark:bg-background-dark dark:text-text-dark ${isDark && "dark"} `}>
      <Body isDark={isDark} setIsDark={setIsDark}/>
    </div>
  );
}

export default App;
