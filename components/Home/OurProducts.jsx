import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';

export default function OurProducts() {
    const { t } = useTranslation('home')

	const items = [
		{
			title: t('home:hyfen_play'),
			description1: t('home:hyfen_play_desc')
		},
		{
			title: t('home:hyfen_tools'),
			description1: t('home:hyfen_tools_desc1'),
            description2: t('home:hyfen_tools_desc2')
		}
	]

    return (
        <div 
        className='gamefi pt-[93px] pb-[140px]'
    >
        <Fade top>
            <div className="text-center mb-5">
                <h2 className='text-3xl md:text-5xl easiest-way-title easiest-way-gradient inline-block mx-auto text-center mb-5'>
                    {t('home:Our Products')}
                </h2>
            </div>
        </Fade>
        <div className="2xl:container 2xl:mx-auto">
            {
                items.map((item, i) => (
                    <Fade 
                        key={i}
                        top
                        delay={i !== 0 ? i * 200 : 0}
                    >
                        <div className="relative products-container">
                            <div className={`bg-product-${i + 1} py-8 md:py-14 px-2 md:px-12 relative`}>
                                <div className="container flex justify-around items-center mx-auto relative z-50 gap-12">
                                    <div className="relative flex flex-col gap-4">
                                        <p className="text-xl md:text-4xl mb-3 font-bold">{item.title}</p>
                                        <p className="text-base md:text-xl">{item.description1} {item.description2 && item.description2}</p>
                                    </div>
                                    <img
                                        src={`/images/home/arrow-right.svg`}
                                        className="h-fit"
                                    />
                                </div>
                                <div className="absolute top-0 right-[-45%] w-full -z-10 md:w-2/3 h-full z-minus-5">
                                    <img
                                        src={`/images/home/product-${(i + 1)}.png`}
                                        className="h-full w-full z-minus-5"
                                    />
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))
            }
        </div>
    </div>
    )
}