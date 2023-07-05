import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
    title: string;
    container?: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
    text?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface ISearchManufacturerProps {
    manufacturer: string;
    setManufacturer?: (manufacturer: string) => void;
}

export interface ICarProps {
    title: string;
    brand: string;
    price: number;
    type: string;
    image: string;
    data: {
        engine: number;
        turbo: number;
        brake: number;
        trans: number;
        susp: number;
    }
}

export interface ICarTypeProps {
    type: string;
    car: ICarProps[] | null;
}

export interface ICarDetailsProps {
    isOpen: boolean;
    close: () => void
    car: ICarProps;
}