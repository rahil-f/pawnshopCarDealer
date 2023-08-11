"use client"

import { createClient } from '@supabase/supabase-js'
import React, { useState, useEffect } from 'react'
import { Acceuil, CustomFilter, SearchBar, CarCard } from '@/components'
import { getAllCar } from '@/utils'
import { IFilterProps, ICarPropsBdd } from '@/types'
import { Categories, order } from '@/constants'

async function getcarBdd(filter: IFilterProps): Promise<ICarPropsBdd[]> {
    const { manufacturer, model, type, sell, filterOrder } = filter
    console.log("getcarBdd")
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    )

    let query = supabaseAdmin
        .from('vehicles')
        .select('*')
    // .eq("sell", false)
    // .eq('id', 2);

    //query = query.eq("sell", false)
    if (manufacturer !== '' && manufacturer !== "Toutes") { query = query.like('brand', `%${manufacturer?.toLowerCase()}%`) }
    if (model !== '' && model !== "All") { query = query.like('title', `%${model?.toLowerCase()}%`) }
    if (type !== '') { query = query.like('type', `%${type?.toLowerCase()}%`) }
    query = query.eq("sell", false)
    if (filterOrder !== '') {
        console.log(filterOrder)
        switch (filterOrder) {
            case "Prix croissants":
                query = query.order('price', { ascending: true })
                break
            case "Prix decroissants":
                query = query.order('price', { ascending: false })
                break
            case "Plus récentes":
                query = query.order('created_at', { ascending: false })
                break
            case "Plus anciennes":
                query = query.order('created_at', { ascending: true })
                break
            default:
                query = query.order('id', { ascending: true })
                break
        }
        console.log(query)
    }

    const { data } = await query;
    console.log(data);

    return data;
}

export default function Home() {
    const [cars, setCars] = useState<ICarPropsBdd[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [sell, setSell] = useState<boolean>(false)
    const [filterOrder, setFilterOrder] = useState<string>("Pertinence")

    const [manufacturer, setManufacturer] = useState<string>('')
    const [model, setModel] = useState<string>('')
    const [type, setType] = useState<string>('')

    const getCar = async () => {
        setLoading(true);
        try {
            // const allCar: ICarProps[] = getAllCar({
            //     manufacturer: manufacturer || '',
            //     model: model || '',
            //     type: type || '',
            // });
            //setCars(allCar);
            const cars: ICarPropsBdd[] = await getcarBdd({
                manufacturer: manufacturer,
                model: model,
                type: type,
                filterOrder: filterOrder,
            });
            console.log('cars', cars);
            setCars(cars);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        console.log(cars, manufacturer, model, type);
        getCar()
    }, [manufacturer, model, type, sell, filterOrder])

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
                        <CustomFilter
                            title='order'
                            options={order}
                            setType={setFilterOrder}
                        />
                    </div>
                </div>

                <section>
                    <div className="acceuil__cars-wrapper">
                        {cars.length > 0 ? (
                            cars?.map((carList) => (
                                <CarCard
                                    key={carList.id}
                                    title={carList.title}
                                    brand={carList.brand}
                                    price={carList.price}
                                    type={carList.type}
                                    image={carList.image}
                                    engine={carList.engine}
                                    turbo={carList.turbo}
                                    brake={carList.brake}
                                    trans={carList.trans}
                                    susp={carList.susp}
                                    plate={carList.plate}
                                />
                            ))
                        ) : (
                            <div className='acceuil__error-container'>
                                <h2 className='text-black text-xl font-bold'>Aucun vehicule avec ces filtres</h2>
                            </div>
                        )}
                        {/* <CarSql /> */}
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
