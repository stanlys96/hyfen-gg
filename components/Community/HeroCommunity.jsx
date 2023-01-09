import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { communitySocials1, communitySocials2 } from '../../mock/community'
import { Fade } from 'react-reveal'

function HeroCommunity() {
    const { t } = useTranslation('community')
    return (
        <div className="flex flex-col md:flex-row relative justify-center hero-community">
            <img src="/images/community-1.png" className="w-full md:w-1/2" height="100%" />
            <img src="/images/community-2.png" className="w-full md:w-1/2" height="100%" />
            <div className="absolute top-1/3 container mx-auto">
                <Fade top>
                    <p className="text-3xl md:text-5xl font-bold text-center mb-6">{t('Home Gamers')}</p>
                </Fade>
                <div className="flex items-center justify-center md:flex-row flex-col">
                    <div className="community-socials flex justify-center items-center md:mt-4">
                        {communitySocials1.map((item, i) => (
                            <Fade key={i} right delay={i == 0 ? 100 : i * 200}>
                                <div className="community-social-container cursor-pointer mx-8">
                                    <a href="#" className="flex justify-center items-center">
                                        <Image
                                            src={`/images/social/${item.imageUrl}`}
                                            className='py-2'
                                            width={30}
                                            height={30}
                                            alt='BaseLogo'
                                            layout='intrinsic'
                                            quality={100}
                                        />
                                    </a>
                                </div>
                            </Fade>
                        ))}
                    </div>
                    <div className="community-socials flex justify-center items-center mt-8 md:mt-4">
                        {communitySocials2.map((item, i) => (
                            <Fade key={i} right delay={i == 0 ? 400 : i * 3 * 200}>
                                <div className="community-social-container cursor-pointer mx-8">
                                    <a href="#" className="flex justify-center items-center">
                                        <Image
                                            src={`/images/social/${item.imageUrl}`}
                                            className='py-2'
                                            width={30}
                                            height={30}
                                            alt='BaseLogo'
                                            layout='intrinsic'
                                            quality={100}
                                        />
                                    </a>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCommunity