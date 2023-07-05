"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { ICarProps } from '@/types'
import CarDetails from './CarDetails'

const CarCard = ({title, brand, price, type, image, data}: ICarProps) => {

  const [open, setOpen] = useState<boolean>(false)

  const numberImg = (number: number) => {
    switch (number) {
        case 1:
            return (<Image src="/1.png" width={40} height={40} alt="1" />)
        break;
        case 2:
            return (<Image src="/2.png" width={40} height={40} alt="2" />)
        break;
        case 3:
            return (<Image src="/3.png" width={40} height={40} alt="3" />)
        break;
        case 4:
            return (<Image src="/4.png" width={40} height={40} alt="4" />)
        break;
        case 5:
            return (<Image src="/5.png" width={40} height={40} alt="5" />)
        break;
        default:
            return (<Image src="/0.png" width={40} height={40} alt="0" />)
        break;
    }
}

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {title} {brand}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          {price}
        </span>
        <span className="self-end text-[14px] font-medium">
          &nbsp;$$
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={image} alt='image voiture' fill priority className='object-contain' />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex justify-between	 group-hover:invisible w-full text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/engine.png" width={40} height={40} alt="moteur" />
            {numberImg(data.engine)}
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/turbo.png" width={40} height={40} alt="turbo" />
            {numberImg(data.turbo)}
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/brake.png" width={40} height={40} alt="brake" />
            {numberImg(data.brake)}
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/trans.png" width={40} height={40} alt="trans" />
            {numberImg(data.trans)}
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/susp.png" width={40} height={40} alt="susp" />
            {numberImg(data.susp)}
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="Plus d'information"
            container="w-full py-[16px] rounded-full bg-primary-blue"
            handleClick={() => setOpen(true)}
            text="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
          />
        </div>
      </div>

      <CarDetails
        isOpen={open}
        close={() => setOpen(false)}
        car={{title, brand, price, type, image, data}}
      />
    </div>
  )
}

export default CarCard