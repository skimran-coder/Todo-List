import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext';

export const Header = () => {

    const { isDark, setIsDark } = useContext(ThemeContext);

    const toggleTheme = () => {
        setIsDark((prevIsDark) => {
          const newIsDark = !prevIsDark;
          localStorage.setItem("theme", newIsDark); // Save the new value to localStorage
          return newIsDark; // Return the new value to update the state
        });
      };

  return (
    <header className="font-bold text-white  pt-4 text-2xl flex justify-between items-center px-8 border-b-2 pb-4 border-gray-100 ">
          <h1 className="font-serif">Todo List</h1>
          {isDark ? (
            <i
              className="fa-solid fa-sun cursor-pointer"
              onClick={toggleTheme}
            ></i>
          ) : (
            <i
              className="fa-solid fa-moon cursor-pointer"
              onClick={toggleTheme}
            ></i>
          )}
        </header>
  )
}
