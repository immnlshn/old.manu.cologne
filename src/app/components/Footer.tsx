import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return(
        <footer className='absolute bottom-0 flex flex-col items-center justify-center gap-2 p-5 w-screen'>
            <p className='text-center'>© 2023 manu.cologne</p>
            <p className='text-center'>Made with <span><FontAwesomeIcon className='text-blue-500' icon={faHeart} size='xl'></FontAwesomeIcon></span> and Next.JS</p>
        </footer>
    )
}