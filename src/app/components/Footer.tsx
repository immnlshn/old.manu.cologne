import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return(
        <footer className="flex flex-col items-center justify-center gap-2 w-screen">
            <p className="text-center">© 2023 manu.cologne</p>
            <p className="text-center">Made with <span><FontAwesomeIcon className="text-blue-500" icon={faHeart} size="xl"></FontAwesomeIcon></span>, TailwindCSS and Next.JS</p>
            <p className="text-center"><a href="https://storyset.com/web">Web</a>, <a href="https://storyset.com/technology">Technology</a> & <a href="https://storyset.com/people">People</a> illustrations by <a className="text-sky-500" href="https://storyset.com/">Storyset</a></p>
            <p className="text-center">View source-code <a className="text-blue-400" href="https://github.com/immnlshn/manu.cologne" target="_blank">here</a>!</p>
        </footer>
    )
}   