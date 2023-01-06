import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { investorsData } from '../../mock/about'
import { Fade } from 'react-reveal'

function AboutContent() {
    const { t } = useTranslation('about')
    return (
        <div className="about-content py-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <Fade left>
                        <p className="col-span-1 text-3xl text-center md:text-left mb-10 md:mb-0">{t('About')}</p>
                    </Fade>
                    <Fade right>
                        <div className="col-span-1 md:col-span-3">
                            <p className="text-base">{t('About_desc1')}</p>
                            <p className="text-base my-5">{t('About_desc2')}</p>
                            <p className="text-base">{t('About_desc3')}</p>
                        </div>
                    </Fade>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 mt-20">
                    <Fade left>
                        <p className="text-3xl col-span-1 text-center md:text-left">{t('Investors')}</p>
                    </Fade>
                    <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
                    {
                        investorsData.map((data, index) => (
                            <Fade
                                key={index}
                                top
                                delay={index !== 0 ? index * 200 : 0}
                            >
                                <div className="investor-img-container flex justify-center cursor-pointer">
                                    <Image
                                        src={`/images/${data.imageUrl}`}
                                        className='ml-5'
                                        width={231}
                                        height={128}
                                        alt={`${data.title}`}
                                        layout='intrinsic'
                                        quality={100}
                                    />
                                </div>
                            </Fade>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent