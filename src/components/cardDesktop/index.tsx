import "@/app/globals.css";
import "./styles.css";
import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

const CardDesktop = () => {
    return (
        <li className="container__cardDesktop">
            <main className="cardDesktop__main">
                <figure>
                    <Image
                        alt={'Mini Cooper'} 
                        src={'/cooper.png'} 
                        width={49} 
                        height={46} 
                        className={"cardDesktop__image"}
                    />
                </figure>
                <h3 className="cardDesktop__title">Mini Cooper 2020</h3>
            </main>
            <p className="cardDesktop__reservation">11/07</p>
            <p className="cardDesktop__status">Avaiable</p>            
            <span className="cardDesktop__rate"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>            
            <button className="cardDesktop__options"><SlOptionsVertical /></button>
        </li>
    )
};

export default CardDesktop;