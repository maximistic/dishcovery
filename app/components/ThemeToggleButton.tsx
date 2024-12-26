"use client";

import * as React from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import { RiMoonClearFill } from "react-icons/ri";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const {theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() =>{
        setMounted(true);
    }, []);

    if (!mounted) { 
        return null;
    }

    const toggleTheme = () => {
        const newTheme = resolvedTheme  === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    return(
        <button
            className="p-2 transition-all bg-gray-200 rounded-full dark:bg-gray-800"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
        >
            {resolvedTheme === "dark" ? (
                <FaSun className="w-6 h-6 text-yellow-500" />
            ) : (
                <RiMoonClearFill className="w-6 h-6 text-blue-500" />
            )}
        </button>
    );
}