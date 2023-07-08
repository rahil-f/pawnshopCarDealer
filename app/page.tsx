"use client"

import React, { useState, useEffect } from 'react'
import { Acceuil, CustomFilter, SearchBar, CarCard } from '@/components'
import { getAllCar } from '@/utils'
import { ICarProps } from '@/types'
import { Categories } from '@/constants'

export default function Home() {
    const [cars, setCars] = useState<ICarProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const [manufacturer, setManufacturer] = useState<string>('')
    const [model, setModel] = useState<string>('')
    const [type, setType] = useState<string>('')

    const getCar = () => {
        setLoading(true);
        try {
            const allCar: ICarProps[] = getAllCar({
                manufacturer: manufacturer || '',
                model: model || '',
                type: type || '',
            });
            setCars(allCar);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        console.log(cars, manufacturer, model, type);
        getCar()
    }, [manufacturer, model, type])

    return (
        <main className="overflow-hidden">
            <Acceuil />
            <div className="mt-12 padding-y padding-x max-width" id="vehicules">
                <div className='acceuil__text-container'>
                    <h1 className='text-4xl font-extrabold'>
                        Catalogue des véhicules
                    </h1>
                    <p>choissisez le vehicules de vos rêves</p>
                </div>
                <div className='acceuil__filters'>
                    <SearchBar
                        setManufacturer={setManufacturer}
                        setModel={setModel}
                    />
                    <div className='acceuil__filter-container'>
                        <CustomFilter
                            title='type'
                            options={Categories}
                            setType={setType}
                        />
                    </div>
                </div>

                <section>
                    <div className="acceuil__cars-wrapper">
                        {cars.length > 0 ? (
                            cars?.map((carList) => (
                                <CarCard
                                    key={`${carList.image}${Math.floor(Math.random() * 1000)}`}
                                    title={carList.title}
                                    brand={carList.brand}
                                    price={carList.price}
                                    type={carList.type}
                                    image={carList.image}
                                    data={carList.data}
                                />
                            ))
                        ) : (
                            <div className='acceuil__error-container'>
                                <h2 className='text-black text-xl font-bold'>Aucun vehicule avec ces filtres</h2>
                            </div>
                        )}
                    </div>
                    {loading && (
                        <div>
                            <p>loading skeleton todo</p>
                        </div>
                    )}
                </section>

            </div>
        </main>
    )
}
