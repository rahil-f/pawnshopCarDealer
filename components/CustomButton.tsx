"use client";

import Image from "next/image";
import { ICustomButtonProps } from "@/types"

const CustomButton = ({title, container, handleClick, btnType, text, rightIcon, isDisabled}: ICustomButtonProps) => {
    return (
        <button
            disabled={false}
            className={`custom-btn ${container}`}
            type={btnType || "button"}
            onClick={handleClick}
        >
            <span className={`flex-1 ${text}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>)
}

export default CustomButton