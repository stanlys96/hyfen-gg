import React from 'react'
import HeroHyfenPlay from './HeroHyfenPlay'
import FairFunSimple from './FairFunSimple'
import SilderFeature from '../Common/SliderFeature'
import { hyfenPlayFeatures } from '../../mock/hyfen-play'
import useTranslation from 'next-translate/useTranslation'
import Enjoying from './Enjoying';

export default function HyfenPlay() {
    const { t } = useTranslation('hyfen-play') 
	return (
        <div>
            <div className='bg-hyfen-play'>
                <HeroHyfenPlay />
            </div>
            <div className="bg-fair-fun-simple">
                <FairFunSimple />
            </div>
            <div className="bg-fair-fun-simple">                
                <SilderFeature 
                    items={hyfenPlayFeatures} 
                    title={t('Your Gaming Needs in One App')}
                    button={null}
                    translation="hyfen-play"
                    titleGradient={true}
                />
            </div>
            <div className="bg-fair-fun-simple pt-12">
                <Enjoying /> 
            </div>
        </div>
	)
}