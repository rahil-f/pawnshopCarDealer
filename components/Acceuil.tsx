"use client";

import Image from "next/image";
import { CustomButton } from "@/components"

const Acceuil = () => {

    const handleScroll = () => {
        const nextSection = document.getElementById("vehicules");

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-[url('/ps.png')] h-screen bg-cover bg-center bg-no-repeat">
            <div className="acceuil">
                <div className="acceuil__child">
                    <h1 className="acceuil__title text-white">
                        Vehicules d&apos;occasion du pawnshop
                    </h1>
                    <p className="acceuil__subtitle text-white">
                        Vennez faire des affaires en or!
                    </p>
                    <CustomButton
                        title="voir les vehicules"
                        container="bg-primary-blue text-white rounded-full mt-10"
                        handleClick={handleScroll}
                    />
                </div>
            </div>
        </div>
    )
}

export default Acceuil