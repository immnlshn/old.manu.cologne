import { faCss3Alt, faDocker, faHtml5, faJava, faJs, faLine, faLinux, faPython, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Skills({ className }: { className?: string }) {
    return (
        <div className={`${className} relative overflow-hidden py-5`}>
            <div className="min-h-screen mx-auto relative flex items-center justify-center
            before:absolute before:h-[400px] before:w-[400px] before:content-[''] before:left-[-150px] before:-translate-y-[15vh] lg:before:-translate-y-[25vh]
            before:-z-20 before:overflow-hidden dark:before:opacity-50 before:rounded-8xl before:bg-gradient-radial before:from-blue-300
            before:to-transparent before:blur-2xl dark:before:from-blue-800  
            after:absolute after:h-[400px] after:w-[400px] after:content-[''] after:right-[-150px] after:translate-y-[10vh] lg:after:translate-y-[20vh]
            after:-z-20 after:overflow-hidden after:rounded-8xl after:bg-gradient-radial after:from-cyan-400 after:to-transparent after:blur-2xl
            dark:after:from-cyan-800 dark:after:to-transparent
            ">
                <div className="flex flex-col items-center space-y-5 p-5">
                    <div className="relative h-[24rem] w-[24rem]">
                        <Image priority src="/techstack.svg" fill={true} className='object-contain' alt="developer svg"/>
                    </div>
                    <h2 className="text-4xl font-bold tracking-wider text-center">Skills & Experiences</h2>
                    <p className="px-5">Over the past few years, I dived in technologies and frameworks of various kinds. These are the technologies I love and use the most:</p>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-12 text-3xl">
                        <div className="group flex relative justify-center">
                            <FontAwesomeIcon className="text-red-500" icon={faJava} size="2xl"/>
                            <span className="group-hover:opacity-100 transition-opacity bg-gray-300 dark:bg-neutral-800 px-1 text-sm rounded-md absolute  opacity-0 m-4 mx-auto translate-y-14">Java</span>
                        </div>
                        <div className="group flex relative justify-center">
                            <FontAwesomeIcon className="text-orange-500" icon={faHtml5} size="2xl"/>
                            <span className="group-hover:opacity-100 transition-opacity bg-gray-300 dark:bg-neutral-800 px-1 text-sm rounded-md absolute  opacity-0 m-4 mx-auto translate-y-14">HTML</span>
                        </div>
                        <div className="group flex relative justify-center">
                            <FontAwesomeIcon className="text-blue-500" icon={faCss3Alt} size="2xl"/>
                            <span className="group-hover:opacity-100 transition-opacity bg-gray-300 dark:bg-neutral-800 px-1 text-sm rounded-md absolute  opacity-0 m-4 mx-auto translate-y-14">CSS</span>
                        </div>
                        <div className="group flex relative justify-center">
                            <FontAwesomeIcon className="text-yellow-500" icon={faJs} size="2xl"/>
                            <span className="group-hover:opacity-100 transition-opacity bg-gray-300 dark:bg-neutral-800 px-1 text-sm rounded-md absolute  opacity-0 m-4 mx-auto translate-y-14">JavaScript</span>
                        </div>
                        <div className="group flex relative justify-center">
                            <FontAwesomeIcon className="text-blue-500" icon={faPython} size="2xl"/>
                            <span className="group-hover:opacity-100 transition-opacity bg-gray-300 dark:bg-neutral-800 px-1 text-sm rounded-md absolute  opacity-0 m-4 mx-auto translate-y-14">Python</span>
                        </div>
                        <div className="group flex relative justify-center">
                            <FontAwesomeIcon className="text-cyan-500" icon={faReact} size="2xl"/>
                            <span className="group-hover:opacity-100 transition-opacity bg-gray-300 dark:bg-neutral-800 px-1 text-sm rounded-md absolute  opacity-0 m-4 mx-auto translate-y-14">React.JS</span>
                        </div>
                        <div className="group flex relative justify-center">
                            <FontAwesomeIcon className="text-green-500" icon={faVuejs} size="2xl"/>
                            <span className="group-hover:opacity-100 transition-opacity bg-gray-300 dark:bg-neutral-800 px-1 text-sm rounded-md absolute  opacity-0 m-4 mx-auto translate-y-14">Vue.JS</span>
                        </div>
                        <div className="group flex relative justify-center">
                            <FontAwesomeIcon className="text-sky-600" icon={faDocker} size="2xl"/>
                            <span className="group-hover:opacity-100 transition-opacity bg-gray-300 dark:bg-neutral-800 px-1 text-sm rounded-md absolute  opacity-0 m-4 mx-auto translate-y-14">Docker</span>
                        </div>
                        <div className="group flex relative justify-center">
                        <FontAwesomeIcon className="text-black dark:text-white" icon={faLinux} size="2xl"/>
                            <span className="group-hover:opacity-100 transition-opacity bg-gray-300 dark:bg-neutral-800 px-1 text-sm rounded-md absolute  opacity-0 m-4 mx-auto translate-y-14">Linux</span>
                        </div>
                        <div className="group flex relative justify-center">
                            <FontAwesomeIcon className="text-cyan-500" icon={faDatabase} size="2xl"/>
                            <span className="group-hover:opacity-100 transition-opacity bg-gray-300 dark:bg-neutral-800 px-1 text-sm rounded-md absolute  opacity-0 m-4 mx-auto translate-y-14">Databases</span>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    )
}