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
		  image: "/images/carousel/axie-infinity.svg",
		  imagePhone: "/images/carousel/axie-phone.svg"
		},
		{
		  id: "2",
		  image: "/images/carousel/gunstar.svg",
		  imagePhone: "/images/carousel/gunstar-phone.svg"
		},
		{
		  id: "3",
		  image: "/images/carousel/thetan-arena.svg",
		  imagePhone: "/images/carousel/thetan-arena-phone.svg"
		},
		{
			id: "4",
			image: "/images/carousel/castle-crush.svg",
			imagePhone: "/images/carousel/castle-crush-phone.svg"
		  },
		  {
			id: "5",
			image: "/images/carousel/draco-master.svg",
			imagePhone: "/images/carousel/draco-master-phone.svg"
		  },
		  {
			id: "6",
			image: "/images/carousel/galaxy-fight-club.svg",
			imagePhone: "/images/carousel/galaxy-fight-club-phone.svg"
		  },
		  {
			id: "7",
			image: "/images/carousel/mythic-protocol.svg",
			imagePhone: "/images/carousel/mythic-protocol-phone.svg"
		  },
		  {
			id: "8",
			image: "/images/carousel/sipher-odyssey.svg",
			imagePhone: "/images/carousel/sipher-odyssey-phone.svg"
		  },
		  {
			id: "9",
			image: "/images/carousel/league-of-kingdoms.svg",
			imagePhone: "/images/carousel/league-of-kingdoms-phone.svg"
		  },
		  {
			id: "10",
			image: "/images/carousel/aavegotchi.svg",
			imagePhone: "/images/carousel/aavegotchi-phone.svg"
		  },
		  {
			id: "11",
			image: "/images/carousel/pegaxy.svg",
			imagePhone: "/images/carousel/pegaxy-phone.svg"
		  },
		  {
			id: "12",
			image: "/images/carousel/stepn.svg",
			imagePhone: "/images/carousel/stepn-phone.svg"
		  },
		  {
			id: "13",
			image: "/images/carousel/walken.svg",
			imagePhone: "/images/carousel/walken-phone.svg"
		  },
		  {
			id: "14",
			image: "/images/carousel/geng.svg",
			imagePhone: "/images/carousel/geng-phone.svg"
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
            <h2 className='text-5xl text-center mb-5 font-bold'>
                {t('home:Explore New Games')}
            </h2>
            <h2 className='text-xl text-center'>
                {t('home:Immerse Yourself')}
            </h2>
        </Fade>
		<Fade top>
			<div className="custom-carousel mt-[150px]">
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