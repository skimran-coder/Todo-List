
import { useState } from 'react';
import './App.css';
import Body from './Components/Body';
import ThemeContext from './Context/ThemeContext';
import TodoContext from './Context/TodoContext';

function App() {

  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "true" // Convert to boolean
  );

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos === null || storedTodos === undefined) {
      const d = new Date()
      return [{
        todo: "Code a TodoList",
        id: Math.random(),
        date: d
      }];
    }

    try {
      return JSON.parse(storedTodos);
    } catch (error) {
      return [];
    }
  });
  
  return (

    <TodoContext.Provider value={{todos, setTodos}}>
    <ThemeContext.Provider value={{isDark, setIsDark}}>
        
          <Body />
        
    </ThemeContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
