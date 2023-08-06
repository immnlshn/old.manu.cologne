"use client";

import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLightbulb, faMoon, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";



export default function Header(){
    const [mounted, setMounted] = useState(false)
    const [navVisible, setNavVisible] = useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
        window.addEventListener('scroll', () => setNavVisible(false));
    }, [])

    if(!mounted) {
        return null
    }


    return (
        <div>
            <nav className="fixed top-0 right-0 m-5 z-10 flex flex-row-reverse gap-5 lg:flex-col items-center">
                <button className="lg:hidden text-4xl" onClick={() => setNavVisible(!navVisible)}>
                    {navVisible ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}
                </button>
                <div className={`flex flex-row-reverse lg:flex-col ${navVisible? "" : "invisible"} lg:visible gap-5 items-center bg-transparent text-4xl`}>
                    <a href="https://instagram.com/immnl.shn" target="_blank"><FontAwesomeIcon className='text-black dark:text-white hover:text-red-500 dark:hover:text-red-400' icon={faInstagram}/></a>
                    <a href="https://discord.com/users/299225879039442944" target="_blank"><FontAwesomeIcon className='text-black dark:text-white hover:text-blue-400 dark:hover:text-blue-500' icon={faDiscord}/></a>
                    <a href="https://github.com/immnlshn" target="_blank"><FontAwesomeIcon className='text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-600' icon={faGithub}/></a>
                    <ThemeButton/>
                </div>
            </nav>
        </div>
    )
}
 


function ThemeButton(){
    const { theme, setTheme } = useTheme();
    return (
        <button onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}>
            {theme === "dark" ? <FontAwesomeIcon className='text-yellow-500 hover:text-yellow-300' icon={faLightbulb}/> : <FontAwesomeIcon className='text-gray-400 hover:text-gray-800' icon={faMoon}/>}               
        </button>
    )
}