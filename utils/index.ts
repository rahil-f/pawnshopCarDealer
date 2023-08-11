import { createClient } from '@supabase/supabase-js'
import { Car } from "@/data";
import { IPropsData, ICarProps } from '@/types'

export function getAllCar(filter: IPropsData) {
    var carList: ICarProps[] = [];
    if (filter.manufacturer === '' && filter.model === '' && filter.type === '') carList = Car
    else carList = BuildCarList(filter)
    //todo sort function
    return carList
}

function BuildCarList(filter: IPropsData) {
    var carList: ICarProps[] = [];

    if (filter.manufacturer !== '' && filter.model !== '' && filter.type !== '') {
        Car?.map((cars) => {
            if (cars.type.toLowerCase() === filter.type.toLowerCase() &&
                (filter.manufacturer.toLowerCase() === cars.brand.toLowerCase() || filter.manufacturer.toLowerCase() === 'toutes') &&
                cars.title.toLowerCase().includes(filter.model.toLowerCase())) {
                carList.push(cars)
            }
        })
    } else if (filter.manufacturer !== '' && filter.model !== '' && filter.type === '') {
        Car?.map((cars) => {
            if ((filter.manufacturer.toLowerCase() === cars.brand.toLowerCase() || filter.manufacturer.toLowerCase() === 'toutes') &&
                cars.title.toLowerCase().includes(filter.model.toLowerCase())) {
                carList.push(cars)
            }
        })
    } else if (filter.manufacturer === '' && filter.model !== '' && filter.type !== '') {
        Car?.map((cars) => {
            if (cars.type.toLowerCase() === filter.type.toLowerCase() &&
                cars.title.toLowerCase().includes(filter.model.toLowerCase())) {
                carList.push(cars)
            }
        })
    } else if (filter.manufacturer !== '' && filter.model === '' && filter.type !== '') {
        Car?.map((cars) => {
            if (cars.type.toLowerCase() === filter.type.toLowerCase() &&
                (filter.manufacturer.toLowerCase() === cars.brand.toLowerCase() || filter.manufacturer.toLowerCase() === 'toutes')) {
                carList.push(cars)
            }
        })
    } else {
        Car?.map((cars) => {
            if (cars.type.toLowerCase() === filter.type.toLowerCase() ||
                (filter.manufacturer.toLowerCase() === cars.brand.toLowerCase() || filter.manufacturer.toLowerCase() === 'toutes') ||
                (filter.model.toLowerCase() !== '' && cars.title.toLowerCase().includes(filter.model.toLowerCase()))) {
                carList.push(cars)
            }
        })
    }


    return carList;
}

export const updateSearch = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newSearch = `${window.location.pathname}?${searchParams.toString()}`;

    return newSearch;
}

// export async function getcarBdd() {
//     console.log("getcarBdd")
//     const supabaseAdmin = createClient(
//         process.env.NEXT_PUBLIC_SUPABASE_URL || '',
//         process.env.SUPABASE_SERVICE_ROLE_KEY || ''
//     )

//     const { data } = await supabaseAdmin
//         .from('vehicles')
//         .select('*')
//         .order('id', { ascending: true });

//     console.log(data);

//     return data;
// }