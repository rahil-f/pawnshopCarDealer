"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchManufacturer from "./SearchManufacturer";
import { ISearchBar } from "@/types";

const SearchButton = ({ buttonClasses }: { buttonClasses:string}) => (
    <button type="submit" className={`-ml-3 z-10 ${buttonClasses}`}>
        <Image
            src='/magnifying-glass.svg'
            alt='Search'
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
)

const SearchBar = ({ setManufacturer, setModel }: ISearchBar) => {
    const [searchManufacturer, setSearchManufacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');
    const router = useRouter();
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // if (searchManufacturer === '' && searchModel === '') return alert(`fill the search field`);

        setModel(searchModel.toLowerCase());
        setManufacturer(searchManufacturer.toLocaleLowerCase());
    };

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer 
                    searchManufacturer={searchManufacturer}
                    setSearchManufacturer={setSearchManufacturer}
                />
                <SearchButton 
                    buttonClasses="sm:hidden"
                />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    alt='model icon'
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                />
                <input
                    type="text"
                    name="model"
                    className="searchbar__input"
                    placeholder="Dubsta"
                    onChange={(e) => setSearchModel(e.target.value)}
                    value={searchModel}
                />  
                <SearchButton 
                    buttonClasses="sm:hidden"
                />
            </div>
            <SearchButton 
                buttonClasses="max-sm:hidden"
            />
        </form>
    )
}

export default SearchBar