import "@/app/globals.css";
import "./styles.css";
import Image from "next/image"
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

const CardMobile = () => {
    return (
        <>        
        <li className="container__cardMobile">
            <main className="cardMobile__main">
                <figure className="cardMobile__figure">
                    <Image 
                        alt={'Mini Cooper'} 
                        src={'/cooper.png'} 
                        width={85} 
                        height={85} 
                        className={"cardMobile__image"}
                    />
                    <IoIosCheckmarkCircle
                        className={"cardMobile__check"}
                        size={30}

                    />
                </figure>
                <section className="cardMobile__data">
                    <h3>Mini Cooper 2020</h3>
                    <p>Next reservation: 11/07</p>
                    <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                </section>
            </main>
            <button><SlOptionsVertical /></button>
        </li>
        <li className="container__cardMobile">
            <main className="cardMobile__main">
                <figure className="cardMobile__figure">
                    <Image 
                        alt={'Mini Cooper'} 
                        src={'/cooper.png'} 
                        width={85} 
                        height={85} 
                        className={"cardMobile__image"}
                    />
                    <IoIosCheckmarkCircle
                        className={"cardMobile__check"}
                        size={30}

                    />
                </figure>
                <section className="cardMobile__data">
                    <h3>Mini Cooper 2020</h3>
                    <p>Next reservation: 11/07</p>
                    <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                </section>
            </main>
            <button><SlOptionsVertical /></button>
        </li>
        </>
    )
};

export default CardMobile;