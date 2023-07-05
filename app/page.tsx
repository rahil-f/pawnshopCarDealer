import Image from 'next/image'
import { Acceuil, CustomFilter, SearchBar, CarCard } from '@/components'
import { getAllCar } from '@/utils'
import { ICarTypeProps, ICarProps } from "@/types"

export default function Home() {
  const allCar = getAllCar()

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
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
          <CustomFilter title='type' />
          <CustomFilter title='emplacement' />            
          </div>
        </div>

        <section>
          <div className="home__cars-wrapper">
            {allCar?.map((carList)=> (
              carList?.map((cars)=> (
                cars?.map((car)=> (
                  <CarCard 
                    key={car.image}
                    title={car.title}
                    brand={car.brand}
                    price={car.price}
                    type={car.type}
                    image={car.image}
                    data={car.data}
                  />
              )
            )))))}
          </div>
        </section>

      </div>
    </main>
  )
}
