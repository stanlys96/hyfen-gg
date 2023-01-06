import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-reveal'
import { Social } from './Social'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { mediaSocialsData1, mediaSocialsData2 } from 'mock/socials'

const Footer = ({ bgColor }) => {
	"Home", "Player", "Guild", "Terms and Conditions", "Privacy Policy", "Contact"
	const items = [
		{
			title: "Home",
			link: "/"
		},
		{
			title: "About Us",
			link: "/about"
		},
		{
			title: "Community",
			link: "/community"
		},
		{
			title: "Terms and Conditions",
			link: "/terms-and-conditions"
		},
		{
			title: "Privacy Policy",
			link: "/privacy-policy"
		},
		{
			title: "Support",
			link: "/contact"
		}
	]
	const { t } = useTranslation('common')

	return (
		<footer className={`border-t border-slate-500 pt-10 pb-12 ${bgColor}`}>
			<Fade>
				<div className="container mx-auto">
					<div className="grid grid-cols-4 gap-4 lg:gap-6">
						{/* Company Logo */}
						<div className='col-span-4 lg:col-span-2 order-1 lg:order-1'>
							<div className='text-center lg:text-left'>
								<Image
									src='/images/hyfenlogo.svg'
									className='block'
									alt='BaseLogo'
									width={155}
									height={28}
									layout='fixed'
									quality={100}
								/>
							</div>
						</div>

						{/* Address */}
						<div className="col-span-4 lg:col-span-1 row-span-1 lg:row-span-3 order-3 lg:order-2">
							<div>
								<p className="text-white-700 text-lg font-bold mb-9 text-center lg:text-left">
									Address
								</p>
								<p className="text-white-700 text-sm font-light mb-9 text-center lg:text-left">
									Office 8, Lantai 18 Unit A, Jl Jend Sudirman Kav. 52-53 SCBD Lot. 28, Jakarta Selatan 12190
									<br />
									<br />
									Tel : +62 21 2922 2999
								</p>
							</div>
						</div>

						{/* Follow Us */}
						<div className="col-span-4 lg:col-span-1 row-span-1 lg:row-span-3 order-4 lg:order-3">
							<p className="text-white-700 text-lg font-bold mb-9 text-center lg:text-left">Follow Us</p>
							<div className="mx-auto">
								<Social
									className="grid grid-cols-4 px-10 md:px-0 text-center lg:text-left"
									width={26}
									height={21}
									mediaSocialsData={mediaSocialsData1}
								/>
								<Social
									className="grid grid-cols-3 lg:grid-cols-4 px-10 md:px-0 text-center lg:text-left pt-10"
									width={26}
									height={21}
									mediaSocialsData={mediaSocialsData2}
								/>
							</div>
						</div>

						{/* Links */}
						<div className="col-span-4 lg:col-span-2 order-2 lg:order-4">
							<div className="flex flex-wrap md:flex-row items-center justify-center lg:justify-start">
								{items.map((item, i) => (
									<div
										key={i}
										className={`inline-flex items-center mb-3 md:mb-0 ${i + 1 !== items.length ? "mr-3.5" : ""} pb-4`}
									>
										<Link href={item.link} passHref>
											<a className='text-xs font-medium text-slate-300 hover:text-blue transition-colors duration-300'>
												{t(item.title)}
											</a>
										</Link>
										{i + 1 !== items.length && (<span className="inline-block w-px h-2 bg-slate-300 ml-3.5" />)}
									</div>
								))}
							</div>
						</div>

						{/* Copyright */}
						<div className="col-span-4 lg:col-span-2 order-5 lg:order-5">
							<div className='text-opacity-0.3 text-center lg:text-left text-xs font-medium'>
								<span className='block'>Copyright © 2022 Player One Guild Ltd</span>
								<span className='block'>All rights reserved</span>
							</div>
						</div>
					</div>
				</div>
			</Fade>
		</footer>
	)
}

export default Footer
