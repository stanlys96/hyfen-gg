import React from 'react'
import Ambitious from './Ambitious'
import BestIndustry from './BestIndustry'
import CrossPlatform from './CrossPlatform'
import GameFiSlick from './GameFiSlick'
import OurEcosystem from './OurEcosystem'
import PartnerSlide from './PartnerSlide'
import SideBar from './SideBar'
import EasiestWay from './EasiestWay'
import ExploreGames from './ExploreGames'
import OurProducts from './OurProducts'
import JoinCommunity from './JoinCommunity'

export default function Home() {
	return (
		<div className='bgBlack'>
			<div>
				<div className='bg-home'>
					<SideBar />
				</div>
				<div className='bg-easiest-way'>
					<EasiestWay />
					{/* <GameFiSlick />
					<OurEcosystem />
					<PartnerSlide /> */}
				</div>
				<div className="bg-explore-games">
					<ExploreGames />
				</div>
				<div className="bg-products pb-[140px]">
					<OurProducts />
					<JoinCommunity />
				</div>
			</div>
		</div>
	)
}
