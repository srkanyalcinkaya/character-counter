import { useEffect, useState } from 'react'
import { IoSunnyOutline, IoMoonOutline, IoMenuOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
export default function useTheme() {
    const optionsTheme = [
        {
            value: "dark",
            label: "Dark",
            icon: (
                <IoMoonOutline size={20} />
            )
        },
        {
            value: "light",
            label: "Light",
            icon: (
                <IoSunnyOutline size={20} />
            )
        },
        {
            value: "system",
            label: "System",
            icon: (
                <HiOutlineComputerDesktop />
            )
        },

    ]
    const [theme, setTheme] = useState(localStorage.getItem("@theme") || "dark");
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (newTheme) => {
        if (newTheme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    };

    const onWindowMatch = () => {
        const storedTheme = localStorage.getItem("@theme");
        if (storedTheme === "dark" || (!storedTheme && darkQuery.matches)) {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }
    };

    useEffect(() => {
        switch (theme) {
            case "dark":
            case "light":
                applyTheme(theme);
                localStorage.setItem("@theme", theme);
                break;
            default:
                localStorage.removeItem("@theme");
                onWindowMatch();
                break;
        }

        const handleThemeChange = (e) => {
            if (!localStorage.getItem("@theme")) {
                applyTheme(e.matches ? "dark" : "light");
            }
        };

        darkQuery.addEventListener("change", handleThemeChange);
        return () => {
            darkQuery.removeEventListener("change", handleThemeChange);
        };
    }, [theme]);


    return {
        optionsTheme,
        theme,
        setTheme,

    }

}