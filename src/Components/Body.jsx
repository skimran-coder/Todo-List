import { useContext, useEffect, useState } from "react";
import TodoCards from "./TodoCards";
import ThemeContext from "../Context/ThemeContext";
import TodoContext from "../Context/TodoContext";
import NavBar from "./NavBar";
import { Header } from "./Header";

const Body = () => {
  const { isDark } = useContext(ThemeContext);
  const { todos, setTodos } = useContext(TodoContext);
  const [input, setInput] = useState("");

  

  const handleInput = (e) => {
    if (input === "" || input.trim().length === 0) {
      return;
    }
    if (e.key === "Enter" || e.target.value === "add") {
      const date = new Date()
      const dateStr = date.toLocaleDateString()
      console.log(dateStr)
      const newTodo = {
        todo: input,
        id: Math.random(),
        date: dateStr
      };
      setTodos((prevTodo) => [...prevTodo, newTodo]); // Update todo using setTodo
      setInput(""); // Clear input after adding todo
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={`App *:m-0 *:p-0 *:box-border *:overflow-x-hidden w-screen h-screen flex justify-center items-center text-text-light bg-background-light dark:bg-background-dark dark:text-text-dark ${
        isDark && "dark"
      } `}
    >
      <div className="w-11/12 max-w-3xl h-4/5  bg-primary-light dark:bg-primary-dark transition-all duration-150 ease-in-out rounded-md">
        
        
        <Header />
        <NavBar />

        <main>
          <div className="flex w-11/12 m-auto mt-8">
            <input
              className="w-11/12 bg-gray-100 rounded-l-full h-12 focus:outline-none text-gray-600 px-4 placeholder:font-serif placeholder:text-lg text-lg font-serif"
              placeholder="What needs to be done?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => handleInput(e, input, setTodos)}
            ></input>

            <button
              className="bg-gray-600 hover:bg-gray-700 transition-colors duration-150 ease-in-out px-5  text-text-light font-serif font-bold"
              onClick={(e) => handleInput(e, input, setTodos)}
              value={"add"}
            >
              ADD
            </button>
          </div>

          <div className="flex w-11/12 m-auto mt-8 text-gray-600 dark:text-text-dark font-serif flex-col gap-4 mb-4 ">
            {todos &&
              todos?.map((todo) => (
                <TodoCards {...todo} setTodos={setTodos} todos={todos} key={todo.id}/>
              ))}
          </div>
        </main>

      </div>
    </div>
  );
};

export default Body;
