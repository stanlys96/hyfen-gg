import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import ScrollDown from '../Common/ScrollDown'
import { Fade } from 'react-reveal'

function HeroContact() {
    const { t } = useTranslation('contact')
    return (
        <div className="flex flex-row relative justify-center hero-contact relative">
            <div className="absolute top-1/3">
                <Fade top>
                    <p className="text-3xl font-bold text-center mb-6">{t('Get In Touch')}</p>
                </Fade>
                <Fade top delay={200}>
                    <p className="text-xl text-center mb-6">{t('Get In Touch_desc')}</p>
                </Fade>
                <Fade top delay={400}>
                    <ScrollDown className="justify-center flex md:mt-5 mx-auto" />
                </Fade>
            </div>
        </div>
    )
}

export default HeroContact