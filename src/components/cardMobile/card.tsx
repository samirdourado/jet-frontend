import "@/app/globals.css";
import "./styles.css";
import Image from "next/image"
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import dataCars from "@/database";
import iCarCard from "@/interface/carCar.interface";

const CardMobile = () => {

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
            <li className="container__cardMobile" key={data.id}>
                <main className="cardMobile__main">
                    <figure className="cardMobile__figure">
                        <Image 
                            alt={'Mini Cooper'} 
                            src={data.img} 
                            width={85} 
                            height={85} 
                            className={"cardMobile__image"}
                            priority
                        />
                        <IoIosCheckmarkCircle
                            className={`cardMobile__${data.status}`}
                            size={30}
                        />
                    </figure>
                    <section className="cardMobile__data">
                        <h3>{data.title}</h3>
                        <p>{`Next reservation: ${data.reservation}`}</p>
                        <span>{generateStars(data.rate)}</span>
                    </section>
                </main>
                <button><SlOptionsVertical /></button>
            </li>

        ))
       
    )
};

export default CardMobile;