import React, { useMemo } from 'react'
import Image from 'next/image'

const EcoSystemBox = ({ 
  icon, title, description, background, size, withBorder = false
}) => {

  const bg = useMemo(() => {
    if (!withBorder) {
      if (background === "purple") return "purple-transparent"
      if (background === "blue") return "blue-transparent"
    } else {
      if (background === "purple") return "purple-transparent-full-border"
      if (background === "blue") return "blue-transparent-full-border"
    }
    return
  }, [background])

  const titleSize = useMemo(() => {
    if (size === "lg") return "text-base md:text-xl"
    if (size === "fairFunSimple") return "text-xl md:text-3xl"
    return "text-base"
  }, [size])

  const descriptionSize = useMemo(() => {
    if (size === "lg") return "text-sm"
    return "text-sm md:text-base"
  }, [size])

  return (
    <div className={`eco-item-wrapper flex ${bg} h-4/5`}>
      <div className='eco-item pt-[80px] md:pt-[80px] pb-8 px-4 text-center w-full'>
        <span className='eco-item-player__image'>
          <Image
            src={icon}
            className='block py-2'
            width='100%'
            height='100%'
            alt='eco-systems'
            layout='responsive'
            quality={100}
          />
        </span>
        <h5 className={`${titleSize} font-bold`}>{title}</h5>
        <p className={`${descriptionSize} mt-4 opacity-80`}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default EcoSystemBox