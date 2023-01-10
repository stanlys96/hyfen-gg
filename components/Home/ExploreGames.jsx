import React, { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';

export default function ExploreGames() {
    const { t } = useTranslation('home')

	const [index, setIndex] = useState(0);
	const [timeoutId, setTimeoutId] = useState(0);

	const mod = (n, m) => {
	  let result = n % m;
  
	  // Return a positive value
	  return result >= 0 ? result : result + m;
	};

	const cards = [
		{
		  id: "1",
		  image: "/images/carousel/axie-infinity.png",
		  imagePhone: "/images/carousel/axie-phone.png"
		},
		{
		  id: "2",
		  image: "/images/carousel/gunstar.png",
		  imagePhone: "/images/carousel/gunstar-phone.png"
		},
		{
		  id: "3",
		  image: "/images/carousel/thetan-arena.png",
		  imagePhone: "/images/carousel/thetan-arena-phone.png"
		},
		{
			id: "4",
			image: "/images/carousel/castle-crush.png",
			imagePhone: "/images/carousel/castle-crush-phone.png"
		  },
		  {
			id: "5",
			image: "/images/carousel/draco-master.png",
			imagePhone: "/images/carousel/draco-master-phone.png"
		  },
		  {
			id: "6",
			image: "/images/carousel/galaxy-fight-club.png",
			imagePhone: "/images/carousel/galaxy-fight-club-phone.png"
		  },
		  {
			id: "7",
			image: "/images/carousel/mythic-protocol.png",
			imagePhone: "/images/carousel/mythic-protocol-phone.png"
		  },
		  {
			id: "8",
			image: "/images/carousel/sipher-odyssey.png",
			imagePhone: "/images/carousel/sipher-odyssey-phone.png"
		  },
		  {
			id: "9",
			image: "/images/carousel/league-of-kingdoms.png",
			imagePhone: "/images/carousel/league-of-kingdoms-phone.png"
		  },
		  {
			id: "10",
			image: "/images/carousel/aavegotchi.png",
			imagePhone: "/images/carousel/aavegotchi-phone.png"
		  },
		  {
			id: "11",
			image: "/images/carousel/pegaxy.png",
			imagePhone: "/images/carousel/pegaxy-phone.png"
		  },
		  {
			id: "12",
			image: "/images/carousel/stepn.png",
			imagePhone: "/images/carousel/stepn-phone.png"
		  },
		  {
			id: "13",
			image: "/images/carousel/walken.png",
			imagePhone: "/images/carousel/walken-phone.png"
		  },
		  {
			id: "14",
			image: "/images/carousel/geng.png",
			imagePhone: "/images/carousel/geng-phone.png"
		  },
	  ];

	  const [windowWidth, setWindowWidth] = useState(0);
	  let resizeWindow = () => {
		setWindowWidth(window.innerWidth);
	  };
	
	  useEffect(() => {
		resizeWindow();
		window.addEventListener("resize", resizeWindow);
		return () => window.removeEventListener("resize", resizeWindow);
	  }, []);
	
	  useEffect(() => {
		setTimeoutId(setTimeout(() => {
		  setIndex((index + 1) % cards.length);
		  console.log(index);
		}, 3000));
	  }, [index]);

    return (
        <div 
        className='gamefi pt-[93px] pb-[200px] overflow-hidden'
    >
        <Fade top>
			<div className="container mx-auto">
				<h2 className='text-[28px] leading-[36px] md:text-5xl md:leading-[62px] text-center mb-5 font-bold'>
					{t('home:Explore New Games')}
				</h2>
				<h2 className='text-base md:text-xl text-center'>
					{t('home:Immerse Yourself')}
				</h2>
			</div>
        </Fade>
		<Fade top>
			<div className="custom-carousel mt-[150px] 2xl:container 2xl:mx-auto">
				{cards.map((item, i) => {
					const indexLeft = mod(index - 1, cards.length);
					const indexRight = mod(index + 1, cards.length);

					let className = "carousel-card";

					if (i === index) {
						className = "carousel-card carousel-card-active";
					} else if (i === indexRight) {
						className = "carousel-card carousel-card-right";
					} else if (i === indexLeft) {
						className = "carousel-card carousel-card-left";
					} else className = "carousel-card";

					className += windowWidth > 768 ? " width-38" : " width-75";

					return (
						<a
							key={i}
						 	onClick={() => {
							setIndex(i);
							clearTimeout(timeoutId);
						}}>
							<div>
								<img
								key={item.id}
								className={`${className} carousel-phone-bg`}
								width="100%"
								height="100%"
								src={i === index ? item.imagePhone : item.image}
								alt="Comic"/>
							</div>
						</a>
					);
				})}
			</div>
		</Fade>
    </div>
    )
}