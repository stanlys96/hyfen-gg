import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { communitySocials } from '../../mock/community'
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
                <div className="community-socials grid grid-cols-3 gap-y-8 md:flex md:justify-center">
                    {communitySocials.map((item, i) => (
                        <Fade key={i} right delay={i == 0 ? 100 : i * 200}>
                            <div className="community-social-container cursor-pointer md:mx-6">
                                <Image
                                    src={`/images/social/${item.imageUrl}`}
                                    className='py-2'
                                    width={30}
                                    height={30}
                                    alt='BaseLogo'
                                    layout='intrinsic'
                                    quality={100}
                                />
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroCommunity