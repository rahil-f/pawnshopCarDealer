"use client";

import Image from "next/image";
import { CustomButton } from "@/components"

const Acceuil = () => {

    const handleScroll = () => {

    };

    return (
        <div className="acceuil">
            <div className="acceuil__child">
                <h1 className="acceuil__title">
                    Vehicules d&apos;occasion du pawnshop
                </h1>
                <p className="acceuil__subtitle">
                    Vennez faire des affaires en or!
                </p>
                <CustomButton 
                    title="voir les vehicules"
                    container="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="acceuil__image-container">
                <div className="acceuil__image">
                    <Image src="/acceuil_car.png" alt="voiture acceuil image" fill className="object-contain"/>
                </div>
                <div className="acceuil__image-overlay" />
            </div>
        </div>
    )
}

export default Acceuil