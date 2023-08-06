import { faDiscord, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact(){
    return (
        <div className="relative overflow-hidden">
            <div className="h-screen mx-auto relative flex items-center justify-center
            before:absolute before:h-[400px] before:w-[400px] before:content-[''] before:-translate-x-24
            before:-z-20 before:overflow-hidden dark:before:opacity-50 before:rounded-8xl before:bg-gradient-radial before:from-blue-300
            before:to-transparent before:blur-2xl dark:before:from-blue-800  
            after:absolute after:h-[400px] after:w-[400px] after:content-[''] after:translate-x-32 after:translate-y-14
            after:-z-20 after:overflow-hidden after:rounded-8xl after:bg-gradient-radial after:from-cyan-400 after:to-transparent after:blur-2xl
            dark:after:from-cyan-800 dark:after:to-transparent
            ">
                <div className="flex flex-col items-center space-y-5 p-5 w-3/4 lg:w-1/2">
                    <h2 className="text-4xl font-bold tracking-wider text-center">Contact me</h2>
                    <p>Don't hesitate to reach out - Let's connect to turn your vision into reality! Contact me today, and let's take the first step towards a fun and effective partnership!</p>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-5 p-5">
                        <div className="flex lg:flex-col text-4xl items-center gap-5">
                            <a href="https://instagram.com/immnl.shn" target="_blank"><FontAwesomeIcon className="text-black dark:text-white hover:text-red-500 dark:hover:text-red-400" icon={faInstagram}/></a>
                            <a href="https://discord.com/users/299225879039442944" target="_blank"><FontAwesomeIcon className="text-black dark:text-white hover:text-blue-400 dark:hover:text-blue-500" icon={faDiscord}/></a>
                            <a href="https://github.com/immnlshn" target="_blank"><FontAwesomeIcon className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-600" icon={faGithub}/></a>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>Or just write me an Email:</p>
                            <a href="mailto:me@manu.cologne" className="font-bold text-blue-400 tracking-wider hover:underline">me@manu.cologne</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}