import "@/app/globals.css";
import "./styles.css";
import CardDesktop from "../cardDesktop";

const HeaderCard = () => {
    return (
        <>
        <li className="container__headerCard">
            <p>CAR</p>
            <p>NEXT RESERVATION</p>
            <p>STATUS</p>
            <p>RATING</p>
            <p>ACTIONS</p>
        </li>            
            <CardDesktop/>
        </>
    );
};

export default HeaderCard;