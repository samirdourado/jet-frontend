import "@/app/globals.css";
import "./styles.css";
import HeaderCard from "../headerCard";

const CardsHolder = () => {
    return (
        <ul className="container__cardsHolder">
            <HeaderCard/>
        </ul>
    )

}

export default CardsHolder;