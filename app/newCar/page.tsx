"use client"

import React, { useState } from 'react'
import { redirect } from 'next/navigation';
import { createClient } from '@supabase/supabase-js'
import { Categories, Manufacturer } from '@/constants'

const NewCar = () => {
    const [model, setModel] = useState<string>('')
    const [manufacturer, setManufacturer] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [type, setType] = useState<string>('')
    const [imgCar, setImgCar] = useState<string>('')
    const [engine, setEngine] = useState<number>(0)
    const [turbo, setTurbo] = useState<number>(0)
    const [trans, setTrans] = useState<number>(0)
    const [brake, setBrake] = useState<number>(0)
    const [susp, setSusp] = useState<number>(0)
    const [plate, setPlate] = useState<string>('')


    const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('post')
        const supabaseAdmin = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL || '',
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
        )

        const { error } = await supabaseAdmin
            .from('vehicles')
            .insert({ title: model, brand: manufacturer, price: price, type: type, image: imgCar, engine: engine, turbo: turbo, brake: brake, trans: trans, susp: susp, plate: plate.toUpperCase() })

        if (error) {
            console.log(error)
        } else {
            console.log('success')
            setModel('')
            setManufacturer('')
            setPrice(0)
            setType('')
            setImgCar('')
            setEngine(0)
            setTurbo(0)
            setTrans(0)
            setBrake(0)
            setSusp(0)
            setPlate('')
            redirect('/newCar');
        }
    }

    return (
        <main className="overflow-hidden">
            <div className="bg-[url('/formvehtop.png')] h-64 w-screen bg-auto bg-center bg-no-repeat"></div>
            <form className="pt-5 flex flex-col justify-center justify-items-center content-center items-center" onSubmit={handlePost}>
                <div className="space-y-12">

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Nouveau véhicule</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">ajouter un vehicule toutes les cases sont requise.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="nom-voiture" className="block text-sm font-medium leading-6 text-gray-900">Model de la voiture</label>
                                <div className="mt-2">
                                    <input onChange={(e) => setModel(e.target.value)} type="text" name="nom-voiture" id="nom-voiture" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="marque" className="block text-sm font-medium leading-6 text-gray-900">Marque du véhicule</label>
                                <div className="mt-2">
                                    <select onChange={(e) => setManufacturer(e.target.value)} id="marque" name="marque" autoComplete="marque" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        {Manufacturer.map((item) => (<option key={item} value={item}>{item}</option>))}
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="prix" className="block text-sm font-medium leading-6 text-gray-900">Prix de la voiture</label>
                                <div className="mt-2">
                                    <input onChange={(e) => setPrice(Number(e.target.value))} type="text" name="prix" id="prix" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">Type du véhicule</label>
                                <div className="mt-2">
                                    <select onChange={(e) => setType(e.target.value)} id="type" name="type" autoComplete="type" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        {Categories.map((item) => (<option key={item} value={item}>{item}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">lien image discord</label>
                                <div className="mt-2">
                                    <input onChange={(e) => setImgCar(e.target.value)} id="image" name="image" type="url" autoComplete="url" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="Moteur" className="block text-sm font-medium leading-6 text-gray-900">Moteur</label>
                                <div className="mt-2">
                                    <select onChange={(e) => setEngine(Number(e.target.value))} id="Moteur" name="Moteur" autoComplete="Moteur" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="Turbo" className="block text-sm font-medium leading-6 text-gray-900">Turbo</label>
                                <div className="mt-2">
                                    <select onChange={(e) => setTurbo(Number(e.target.value))} id="Turbo" name="Turbo" autoComplete="Turbo" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>0</option>
                                        <option>1</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="Transmition" className="block text-sm font-medium leading-6 text-gray-900">Transmition</label>
                                <div className="mt-2">
                                    <select onChange={(e) => setTrans(Number(e.target.value))} id="Transmition" name="Transmition" autoComplete="Transmition" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="Frein" className="block text-sm font-medium leading-6 text-gray-900">Frein</label>
                                <div className="mt-2">
                                    <select onChange={(e) => setBrake(Number(e.target.value))} id="Frein" name="Frein" autoComplete="Frein" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="Suspension" className="block text-sm font-medium leading-6 text-gray-900">Suspension</label>
                                <div className="mt-2">
                                    <select onChange={(e) => setSusp(Number(e.target.value))} id="Suspension" name="Suspension" autoComplete="Suspension" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="plate" className="block text-sm font-medium leading-6 text-gray-900">Plaque</label>
                                <div className="mt-2">
                                    <div className="mt-2">
                                        <input onChange={(e) => setImgCar(e.target.value)} id="plate" name="plate" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>
        </main>
    )
}

export default NewCar
