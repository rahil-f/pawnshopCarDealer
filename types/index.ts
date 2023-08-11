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
    searchManufacturer: string;
    setSearchManufacturer?: (manufacturer: string) => void;
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

export interface ICarPropsBis {
    title: string;
    brand: string;
    price: number;
    type: string;
    image: string;
    engine: number;
    turbo: number;
    brake: number;
    trans: number;
    susp: number;
    plate: string;
}

export interface ICarDetailsProps {
    isOpen: boolean;
    close: () => void
    car: ICarProps;
}

export interface ICarDetailsPropsBis {
    isOpen: boolean;
    close: () => void
    car: ICarPropsBis;
}

export interface IPropsData {
    manufacturer: string;
    model: string;
    type: string;
}

export interface IFilter {
    title: string;
    options: string[];
    setType: (type: string) => void;
}

export interface ISearchBar {
    setManufacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;

}

export interface ICarPropsBdd {
    id: number;
    created_at: string;
    title: string;
    brand: string;
    price: number;
    type: string;
    image: string;
    engine: number;
    turbo: number;
    brake: number;
    trans: number;
    susp: number;
    sell: boolean;
    plate: string;
}

export interface IFilterProps {
    manufacturer?: string;
    model?: string;
    type?: string;
    sell?: boolean;
    filterOrder?: string;
}