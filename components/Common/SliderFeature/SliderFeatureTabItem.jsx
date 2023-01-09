import React from 'react'
import Collapse from "@kunukn/react-collapse";
import useTranslation from 'next-translate/useTranslation'

const SliderFeatureTabItem = ({
   title, index, description, active, onChange, translation
}) => {
  const { t } = useTranslation(translation)

  return (
    <div 
      className='mb-6 xl:mb-8 cursor-pointer' 
      onClick={() => onChange(index)}
    >
      <h2 className={`text-xl lg:text-xl font-bold transition-all mb-3 hover:text-white ${active ? "text-white" : "text-gray-200"}`}>{t(title)}</h2>
      <Collapse isOpen={active}>
        <p className=" text-sm xl:text-base text-gray-200">{t(description)}</p>
      </Collapse>
    </div>
  )
}

export default SliderFeatureTabItem