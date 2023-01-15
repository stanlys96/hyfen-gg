import { Jumbotron } from 'components/modules/molecules'
import useTranslation from 'next-translate/useTranslation'
import { Fade } from 'react-reveal'
import { hyfenPlayFeatures } from '../../mock/hyfen-play'
import SilderFeature from '../Common/SliderFeature'
import Enjoying from './Enjoying'
import FairFunSimple from './FairFunSimple'

export default function HyfenPlay() {
	const { t } = useTranslation('hyfen-play')

	return (
		<div className='relative overflow-hidden'>
			<div className='bg-hyfen-play'>
				<Jumbotron image={'/images/hyfen-play/jumbotron_play.png'}>
					<Fade top>
						<h1 className='text-[40px] leading-[51px] md:text-[80px] md:leading-[104px] text-center  lg:text-left font-bold hyfen-play-gradient'>
							{t('hyfen-play:Hyfen Play')}
						</h1>
					</Fade>
					{/* Desription */}
					<Fade top>
						<p className='mt-4 text-center font-[400] lg:text-left text-[22px] md:text-[36px] md:pr-24 md:leading-[46px] tracking-wide'>
							{t('hyfen-play:Earn Money')}
						</p>
					</Fade>
				</Jumbotron>
			</div>
			<div className='bg-fair-fun-simple'>
				<FairFunSimple />
			</div>
			<div className='bg-fair-fun-simple'>
				<SilderFeature
					items={hyfenPlayFeatures}
					title={t('Your Gaming Needs in One App')}
					button={null}
					translation='hyfen-play'
					titleGradient={true}
				/>
			</div>
			<div className='bg-fair-fun-simple pt-12'>
				<Enjoying />
			</div>
		</div>
	)
}
