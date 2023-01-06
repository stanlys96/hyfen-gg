import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { communityData } from '../../mock/community'
import { Fade } from 'react-reveal'

function CommunityContent() {
    const { t } = useTranslation('community')
    return (
        <div className="community-content pb-24 md:py-32">
            <div className="container mx-auto">
                {communityData.map((item, i) => (
                    <div key={i} className={`py-10 md:flex justify-between ${i % 2 != 0 ? "flex-row-reverse" : ""}`}>
                        <Fade right={i % 2 !== 0} left={i % 2 === 0} delay={i * 150}>
                            <img
                                src={`/images/community/${item.code}.png`}
                                className='block py-2 w-full md:w-1/2'
                                alt='BaseLogo'
                                height="100%"
                                quality={100}
                            />
                        </Fade>
                        <Fade right={i % 2 === 0} left={i % 2 !== 0} delay={i * 250}>
                            <div className={`flex flex-col justify-center w-full md:w-1/2 ${i % 2 != 0 ? "md:mr-10" : "md:ml-10"}`}>
                                <p className="text-2xl">{t(item.code)}</p>
                                <p className="text-base mt-6">{t(item.code + '-desc')}</p>
                            </div>
                        </Fade>
                    </div>
                ))}
                <div className={`my-10 flex justify-between flex-col-reverse md:flex-row-reverse community-manager-container md:pl-10`}>
                    <Fade right delay={150}>
                        <img
                            src={`/images/community/Interested In.png`}
                            className='block w-full md:w-1/2'
                            alt='BaseLogo'
                            height="100%"
                            quality={100}
                        />
                    </Fade>
                    <Fade left delay={250}>
                        <div className={`py-5 md:py-0 flex flex-col justify-center items-start w-full md:w-1/2 md:mr-10 pl-10 md:pl-0`}>
                            <p className="text-2xl">{t('Interested In')}</p>
                            <p className="text-base mt-6">{t('Gain Experience')}</p>
                            <a href="#" className='header__download-button text-slate-900 bg-white py-3 px-6 inline-block text-xs md:text-sm font-bold cursor-pointer mt-5 flex items-center'>
                                <span className="inline-block mr-2">{t('Apply Here')} </span>
                                <Image
                                    src={`/images/arrow_right.svg`}
                                    className='ml-5'
                                    width={20}
                                    height={20}
                                    alt='BaseLogo'
                                    layout='intrinsic'
                                    quality={100}
                                />
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default CommunityContent