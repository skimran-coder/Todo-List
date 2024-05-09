import {  useEffect, useState } from "react"
import TodoCards from "./TodoCards"

const Body = ({isDark, setIsDark}) => {

    const toggleTheme = () => {
        setIsDark((prevIsDark) => {
          const newIsDark = !prevIsDark;
          localStorage.setItem("theme", newIsDark); // Save the new value to localStorage
          return newIsDark; // Return the new value to update the state
        });
      };
    
    const [input, setInput] = useState("")

    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos === null || storedTodos === undefined) {
          console.log("it is undefine")
          return [{
            todo: "Code a TodoList",
            id: Math.random()
          }];
        }

        try {
          console.log("try block")
          console.log(storedTodos)
          return JSON.parse(storedTodos);
        } catch (error) {
          console.error("Error parsing todos from localStorage:", error);
          return [];
        }
      });
      
      

    const handleInput = (e) => {
        if (input === "" || input.trim().length === 0) {
            return
        }
        if (e.key === "Enter" || e.target.value === "add") {
          const newTodo = {
            todo: input,
            id: Math.random(),
          };
          setTodos((prevTodo) => [...prevTodo, newTodo]); // Update todo using setTodo
          setInput(""); // Clear input after adding todo
        }
      };
    
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos])
    

    return(
        <div className="w-11/12 max-w-3xl h-4/5  bg-primary-light dark:bg-primary-dark transition-all duration-150 ease-in-out rounded-md">
            {/* Header */}
            <header className="font-bold text-white  pt-4 text-2xl flex justify-between items-center px-8">
            <h1 className="font-serif">Todo List</h1>
            {
                isDark ? (
                <i className="fa-solid fa-sun cursor-pointer" onClick={toggleTheme}></i>
                ) : (
                <i className="fa-solid fa-moon cursor-pointer" onClick={toggleTheme}></i>
                )
            }
            </header>

            <main >
                <div className="flex w-11/12 m-auto mt-8">

                <input className="w-11/12 bg-gray-100 rounded-l-full h-12 focus:outline-none text-gray-600 px-4 placeholder:font-serif placeholder:text-lg text-lg font-serif" placeholder="What needs to be done?" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => handleInput(e, input, setTodos)}></input>

                <button className="bg-gray-600 hover:bg-gray-700 transition-colors duration-150 ease-in-out px-5  text-text-light font-serif font-bold" onClick={(e) => handleInput(e, input, setTodos)} value={"add"}>ADD</button>

                </div>

                <div className="flex w-11/12 m-auto mt-8 text-gray-600 dark:text-text-dark font-serif flex-col gap-4 mb-4 ">
                    {
                    todos &&
                      todos?.map((todo => <TodoCards {...todo} setTodos={setTodos} todos={todos}/> )) 
                    }
                </div>
            </main>
        </div>
    )
}

export default Body;