import { useState } from "react";

export const NavBar = () => {

  const [isActive, setIsActive] = useState("All")

  return (
    <nav className="w-10/12 m-auto mt-4">
      <ul className="flex font-serif  text-white dark:text-text-dark gap-4 text-lg">

        <li className={`px-4 rounded-sm transition-all duration-150 ease-in-out cursor-pointer ${isActive === "All" ? "bg-neutral-light dark:bg-neutral-dark opacity-100 font-bold" : "opacity-70"}`} onClick={(e) => setIsActive(e.target.innerHTML)} value={"All"}>All</li>

        <li className={`px-4 rounded-sm transition-all duration-150 ease-in-out cursor-pointer ${isActive === "Important" ? "bg-neutral-light dark:bg-neutral-dark opacity-100 font-bold" : "opacity-70"}`} onClick={(e) => setIsActive(e.target.innerHTML)} value={"Important"}>Important</li>

        <li className={`px-4 rounded-sm transition-all duration-150 ease-in-out cursor-pointer ${isActive === "Finished" ? "bg-neutral-light dark:bg-neutral-dark opacity-100 font-bold" : "opacity-70"}`} onClick={(e) => setIsActive(e.target.innerHTML)} value={"Finished"}>Finished</li>
      </ul>
    </nav>
  )
}

export default NavBar;
