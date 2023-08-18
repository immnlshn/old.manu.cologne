import { faDownLong, faHandPeace } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Hero({ className }: { className?: string }){
    return (
        <div className={`${className} relative overflow-hidden w-screen py-5`}>
            <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen w-screen py-32 space-y-12 space-x-12 before:absolute before:h-[400px] before:w-[600px] before:-translate-x-24 before:rounded-full before:content-[''] before:-z-20 before:bg-gradient-radial before:from-blue-300 before:to-transparent before:blur-2xl dark:before:from-blue-800 after:absolute after:h-[500px] after:w-[250px] after:translate-x-1/2  after:-z-10 after:rounded-full after:content-[''] after:bg-gradient-radial after:from-cyan-200 after:to-blue-300 after:blur-2xl dark:after:from-cyan-700 dark:after:to-blue-900">
                <div className="flex flex-col space-y-3 w-72">
                    <h1 className="text-4xl font-bold tracking-wider">Hi, my name is <span className="text-blue-500">Immanuel</span>!</h1>
                    <p>I&apos;m a 20-years-old computer science student with a passion for all things related to computers. Let&apos;s connect and explore the possibilities of working together to bring your ideas to life. Get in touch and let&apos;s create something amazing!</p>
                </div>
                <div className="relative h-[32rem] w-[32rem]">
                    <Image priority src="/developer.svg" fill={true} className='object-contain' alt="developer svg"/>
                </div>
            </div>
        </div>
    )

}