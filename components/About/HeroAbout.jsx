import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import ScrollDown from '../Common/ScrollDown'
import { Fade } from 'react-reveal'

function HeroAbout() {
    const { t } = useTranslation('about')
    return (
        <div className="flex flex-col justify-center items-center container mx-auto h-full">
            <Fade top>
                <p className="text-3xl md:text-5xl font-bold text-center mb-6">{t('Onboarding')}</p>
            </Fade>
            <Fade top delay={200}>
                <ScrollDown className="justify-center lg:justify-start flex md:mt-5" />
            </Fade>
        </div>
    )
}

export default HeroAbout