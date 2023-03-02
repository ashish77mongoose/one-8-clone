import React, { useContext, useEffect, useState } from "react";
import { modeContext } from "../../App";
import { icons } from './../../utils/icons';

export default function DarkLightMode() {
  const {mode,setMode}=useContext(modeContext);
  const handleMode=()=>{
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setMode('dark');
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setMode('light');
      }

     
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setMode('light');

      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setMode('dark');

      }
    }
  }
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setMode('dark');
    } else {
      document.documentElement.classList.remove("dark");
      setMode('light');

    }
  },[mode]);


  return (
    <button
      id="theme-toggle"
      onClick={handleMode}
      type="button"
      className="ml-6 text-gray-800 bg-white border border-gray-100 dark:border-gray-800 dark:bg-transparent dark:text-gray-500 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
    >

      {mode==='light'? <span className="text-xl">{icons.light}</span>:<span className="text-xl">{icons.dark}</span>}

      
    </button>
  );
}
