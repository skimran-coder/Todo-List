import { useState, useEffect } from "react";

const TodoCards = ({ todo, id, date, setTodos, todos }) => {
  const [isChecked, setIsChecked] = useState(() => {
    const savedState = localStorage.getItem(`isChecked_${id}`);
    // Convert the saved state to a boolean
    const initialState = savedState === "true";
    return initialState;
  });

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    localStorage.setItem(`isChecked_${id}`, isChecked);
  }, [isChecked, id]);

  const deleteHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="bg-neutral-light dark:bg-neutral-dark w-full flex justify-between items-center  rounded-l-md">
      <div className="flex justify-start w-10/12 items-center pl-4 gap-4 ">
        <input
          type="checkBox"
          className={`w-5 h-5 rounded-md accent-background-light focus:accent-background-lighter dark:accent-success-darker   dark:focus:accent-success-dark  `}
          checked={isChecked}
          onChange={(e) => handleCheckboxChange(e)}
        ></input>

        <p
          className={`font-serif text-lg bg-transparent w-10/12 focus:outline-none transition-all duration-150 ease-in-out overflow-x-auto py-2 ${
            isChecked && "line-through"
          } `}
          
        >{todo}</p>

        <p className="text-sm">
          created on: {date}
        </p>

      </div>

      <div className="text-text-light ">
        <button
          className="bg-error-dark py-2 px-4"
          onClick={() => deleteHandler(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCards;
 