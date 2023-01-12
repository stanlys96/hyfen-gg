import { menus, languages } from '../../mock'
import Image from 'next/image'
import React from 'react'
import ActiveLink from './ActiveLink'
import ArrowDown from '../Icons/ArrowDown'
import Collapse from './Collapse'
import Link from 'next/link'
import { Social } from './Social'
import useTranslation from 'next-translate/useTranslation'
import { mediaSocialsData1, mediaSocialsData2 } from '../../mock/socials'
import { useRouter } from 'next/router'

export default function SideDrawer({ open, handleClose, setOpen }) {
	const router = useRouter()
	const menuDrawer = [...menus]
	const { t, lang } = useTranslation('common')

	return (
		<div
			className={[
				open ? 'w-screen  z-50 translate-x-0' : 'translate-x-full w-0 -z-10',
				'sidebar fixed h-screen bg-app-bg_app top-0 right-0  text-lg transition-all duration-300 overflow-hidden',
			].join(' ')}
		>
			<div className='sidebar-header flex justify-between py-4 pl-3 pr-5 border-b border-white/30'>
				<div className='flex items-center justify-center'>
					<Link href='/' passHref>
						<a className='flex justify-center items-center relative w-[145px] h-[44px]'>
							<Image
								src='/images/hyfenlogo.svg'
								className='block py-2'
								alt='BaseLogo'
								width={130}
								height={28}
								layout='fixed'
								quality={100}
							/>
						</a>
					</Link>
				</div>
				<div className='flex justify-center items-center' onClick={handleClose}>
					<div className='pr-3'>
						<Image
							src='/images/handleClose.png'
							alt='mobile-logo'
							layout='fixed'
							width='14'
							height='14'
							quality={100}
						/>
					</div>
				</div>
			</div>
			{/* Section Menu */}
			<nav>
				<ul className='relative w-full mt-2 grid'>
					{menuDrawer.map((menu) => (
						<li key={menu.id} className='relative'>
							{menu.submenu?.length ? (
								<div className='relative border-b border-white/20'>
									<Collapse
										trigger={({ show, onClick }) => (
											<button
												className=' hover:text-blue flex w-full items-center justify-between flex-row font-[700] tracking-wide py-[20px] px-[31px] text-[20px] leading-[26px]'
												onClick={onClick}
											>
												{t(menu.title)}

												<ArrowDown
													className={`fill-current transition-transform ${
														show && 'transform rotate-180'
													}`}
												/>
											</button>
										)}
									>
										<ul className='md:hidden grid gap-6 pb-2'>
											{menu.submenu.map((submenu) => (
												<li key={submenu.id}>
													<ActiveLink href={submenu.link}>
														<div className='flex items-center'>
															<a
																onClick={() => {
																	if (router.pathname === submenu.link)
																		setOpen(false)
																}}
																className={`text-left block px-10 py-3 lg:text-lg text-sm ${
																	router.pathname === submenu.link &&
																	'text-blue'
																} ${
																	submenu.active &&
																	'cursor-pointer hover:text-blue'
																} ${
																	!submenu.active &&
																	'text-white-50 cursor-default'
																} flex items-center`}
															>
																<span className='inline-block mr-3 text-[16px]'>
																	{t(submenu.title)}
																</span>
																{submenu.withIcon && (
																	<Image
																		src='/images/home/guidebook-icon.svg'
																		height={20}
																		width={20}
																		alt='icon'
																	/>
																)}
															</a>
															{!submenu.active && (
																<span className='coming-soon-sign py-1.5 px-3 text-sm'>
																	Coming Soon
																</span>
															)}
														</div>
													</ActiveLink>
												</li>
											))}
										</ul>
									</Collapse>
								</div>
							) : (
								<ActiveLink
									href={menu.link}
									disabled={menu.disable}
									passHref
									activeClassName='flex items-start'
								>
									<div className='w-full relative'>
										<button
											onClick={() => {
												if (router.pathname === menu.link) setOpen(false)
											}}
											className={`border-b text-left border-white/20  w-full block py-[20px] px-[31px] text-[20px] leading-[26px] cursor-pointer font-[700] ${
												router.pathname === menu.link && 'text-blue'
											} hover:text-blue`}
										>
											{t(menu.title)}
										</button>
									</div>
								</ActiveLink>
							)}
						</li>
					))}
				</ul>
			</nav>

			{/* Section Button Download App */}
			<div className='relative mt-10 px-6 flex justify-start items-center'>
				<a href='https://apps.apple.com/us/app/metabase-play/id1624878820'>
					<Image
						src='/images/App Store.svg'
						height={50}
						width={200}
						quality={100}
						alt='apple-store'
					/>
				</a>
				<a href='https://apps.apple.com/us/app/metabase-play/id1624878820'>
					<Image
						src='/images/Google Play.svg'
						height={50}
						width={200}
						alt='android'
					/>
				</a>
			</div>

			{/* Section Button Language */}
			<div className='relative mt-5'>
				<Collapse
					trigger={({ show, onClick }) => (
						<>
							<button
								className='md:hidden flex items-center justify-center w-full hover:text-blue py-2 text-lg font-[400]'
								onClick={onClick}
							>
								<Image
									src='/images/globe.svg'
									className='block py-2 pr-3'
									alt='BaseLogo'
									width={20}
									height={20}
									layout='fixed'
								/>
								<span className='block pl-2'>
									{lang === 'id' ? 'ID' : 'ENG'}
								</span>
								<ArrowDown
									className={`fill-current transition-transform w-5 h-5 ${
										show && 'transform rotate-180'
									}`}
								/>
							</button>
						</>
					)}
				>
					<ul className='relative md:hidden ml-4'>
						{languages.map((language) => (
							<li key={language.locale} className='text-center font-[400]'>
								<ActiveLink href='/' locale={language.locale}>
									<p className='block w-full hover:text-blue py-2 px-4 cursor-pointer text-sm'>
										{language.title}
									</p>
								</ActiveLink>
							</li>
						))}
					</ul>
				</Collapse>
				<div className='group hidden md:flex h-full w-full relative'>
					<button
						className={`hidden md:flex h-full items-center justify-between w-full hover:text-blue py-2`}
					>
						{lang === 'id' ? 'ID' : 'ENG'}
						<ArrowDown className='fill-current w-4 h-4' />
					</button>
					<ul className='soft-shadow hidden min-w-full absolute top-full group-hover:block py-2'>
						{languages.map((language) => (
							<li key={language.locale}>
								<ActiveLink href='/' locale={language.locale}>
									<p className='block w-full hover:text-blue py-1 px-3 cursor-pointer'>
										{language.title}
									</p>
								</ActiveLink>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Section Soscial Media */}
			<div className='pt-8 w-full text-center space-y-5'>
				<Social
					className='grid grid-cols-4 px-10 md:px-0 text-center lg:text-left'
					mediaSocialsData={mediaSocialsData1}
					width={20}
					height={20}
				/>
				<Social
					className='grid grid-cols-3 lg:grid-cols-4 px-20 md:px-0 text-center lg:text-left'
					width={20}
					height={20}
					mediaSocialsData={mediaSocialsData2}
				/>
				{/* <AppStore /> */}
			</div>
		</div>
	)
}
