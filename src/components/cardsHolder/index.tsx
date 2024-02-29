'use client'
import "@/app/globals.css";
import "./styles.css";
import HeaderCard from "../headerCard";
import CardMobile from "../cardMobile/card";
import React, { useState, useEffect } from 'react';

const CardsHolder = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 929);
        };

        window.addEventListener('resize', handleResize);
        handleResize()
    }, []);

    return (
        <ul className="container__cardsHolder">
            { isMobile ? (<CardMobile/>) : (<HeaderCard/>) }            
        </ul>
    )
}

export default CardsHolder;