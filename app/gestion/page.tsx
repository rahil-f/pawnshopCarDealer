"use client"

import React, { useState, useEffect } from 'react'
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js'
import { Categories, Manufacturer } from '@/constants'
import { ICarPropsBdd } from '@/types'

async function getAllcarBdd(filter: string, sell: boolean, plate: string): Promise<ICarPropsBdd[]> {
    console.log("getcarBdd", sell)
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    )

    let query = supabaseAdmin
        .from('vehicles')
        .select('*')

    if (filter != '') query = query.like('title', `%${filter}%`)
    if (plate != '') query = query.like('plate', `%${plate}%`)
    if (!sell) query = query.eq("sell", false)
    const { data } = await query;

    return data;
}

const handleChangeSell = async (car: ICarPropsBdd) => {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    )

    const { error } = await supabaseAdmin
        .from('vehicles')
        .update({ sell: !car.sell })
        .eq('id', car.id)

    if (error) {
        console.log(error)
    } else {
        console.log('success')
    }
}

const NewCar = () => {
    const [cars, setCars] = useState<ICarPropsBdd[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [sell, setSell] = useState<boolean>(false)
    const [filter, setFilter] = useState<string>('')
    const [plate, setPlate] = useState<string>('')

    const getCar = async () => {
        setLoading(true);
        try {
            const cars: ICarPropsBdd[] = await getAllcarBdd(filter, sell, plate);
            console.log('cars', cars);
            setCars(cars);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        getCar()
    }, [filter, sell])

    return (
        <main className="overflow-hidden">
            <div className="bg-[url('/formvehtop.png')] h-64 w-screen bg-auto bg-center bg-no-repeat"></div>

            <div className='pt-5 mx-[50px] w-full flex flex-col justify-center justify-items-center content-center items-center'>
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Gestion vehicules vendu</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Cliquez sur vendu quand le vehicule est vendu.</p>
                </div>
                <div className='flex flex-row mt-2 '>
                    <div>
                        <label className='p-5' htmlFor="gilter">filtre nom:</label>
                        <input className="w-[200px] h-[28px] p-4 bg-light-white rounded-full max-sm:rounded-full outline-none cursor-pointer text-sm" value={filter} type="text" name="gilter" id="gilter" onChange={(e) => (setFilter(e.target.value))} />
                    </div>
                    <div>
                        <label className='p-5' htmlFor="gilter">filtre plaque:</label>
                        <input className="w-[200px] h-[28px] p-4 bg-light-white rounded-full max-sm:rounded-full outline-none cursor-pointer text-sm" value={filter} type="text" name="gilter" id="gilter" onChange={(e) => (setPlate(e.target.value))} />
                    </div>
                    <div>
                        <label className='p-5' htmlFor="issell">vehicule vendu</label>
                        {sell ? (<input checked type="checkbox" name="issell" id="issell" onChange={() => (setSell(!sell))} />) : (<input type="checkbox" name="issell" id="issell" onChange={() => (setSell(!sell))} />)}
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-100 min-h-[500px]">
                    {!loading && (
                        <dl className="divide-y divide-gray-100">
                            {cars.map((car) => (
                                <div key={car.id} className="flex flex-row justify-center justify-items-center px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="pt-5 text-sm font-medium leading-6 text-gray-900">{car.title}</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <Image src={car.image} width={80} height={80} alt="1" /> vendu:{car.sell ? (<input readOnly type="checkbox" name="sell" id="sell" checked onClick={() => handleChangeSell(car)} />) : (<input readOnly type="checkbox" name="sell" id="sell" onClick={() => handleChangeSell(car)} />)}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    )}
                </div>
            </div>

        </main>
    )
}

export default NewCar
