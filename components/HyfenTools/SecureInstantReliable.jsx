import useTranslation from 'next-translate/useTranslation'
import EcoSystemBox from '../Common/EcoSystemBox'
import Section from '../Common/Section'
import React from 'react'
import { Fade } from 'react-reveal';
import { secureInstantReliable } from '../../mock/hyfen-tools';

export default function SecureInstantReliable() {
	const { t } = useTranslation('hyfen-tools')
	return (
		<Section size="lg">
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-10 grid-ar'>
					{secureInstantReliable.map((item, index) => (
						<Fade 
							key={item}
							bottom
							delay={index === 0 ? 0 : index * 100}
						>
							<EcoSystemBox 
								background={index % 2 === 0 ? 'blue' : 'purple'}
								icon={item.image}
								description={`${t(item.code + "-desc")}`}
								title={t(item.code)}
                                withBorder={true}
								size="fairFunSimple"
							/>
						</Fade>
					))}
				</div>
			</div>
		</Section>
	)
}
