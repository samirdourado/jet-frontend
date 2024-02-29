import "@/app/globals.css";
import "./styles.css";
import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import dataCars from "@/database";
import iCarCard from "@/interface/carCar.interface";


const CardDesktop = () => {
    
    const generateStars = (rate: number) => {
        const stars = [];

        for (let i = 0; i <= rate; i++) {
            stars.push(<FaStar key={i} />);
        }

        return stars
    };

    return (
        dataCars &&

        dataCars.map((data: iCarCard) => (
            <li className="container__cardDesktop" key={data.id}>
                <main className="cardDesktop__main">
                    <figure>
                        <Image
                            alt={'Mini Cooper'} 
                            src={data.img} 
                            width={49} 
                            height={46} 
                            className={"cardDesktop__image"}
                            priority
                        />
                    </figure>
                    <h3 className="cardDesktop__title">{data.title}</h3>
                </main>
                <p className="cardDesktop__reservation">{data.reservation}</p>
                <p className={`cardDesktop__status ${data.status}`}>{data.status}</p>
                <span className="cardDesktop__rate">{generateStars(data.rate)}</span>            
                <button className="cardDesktop__options"><SlOptionsVertical /></button>
            </li>
        ))
    )    
};

export default CardDesktop;