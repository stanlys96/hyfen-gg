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
	const router = useRouter();
	const menuDrawer = [...menus]
	const { t, lang } = useTranslation('common')
	console.log(router.pathname, "<<<");

	return (
		open && (
			<div className='sidebar fixed w-screen h-screen bg-black-100 top-0 left-0 z-50 text-lg'>
				<div className='sidebar-header flex justify-between py-2 pl-[20px] pr-[30px]'>
					<div className='flex items-center justify-center'>
						<Link href='/' passHref>
							<div
								className='flex justify-center items-center relative w-[145px] h-[44px]'
							>
							<Image
								src='/images/hyfenlogo.svg'
								className='block py-2'
								alt='BaseLogo'
								width={130}
								height={28}
								layout='fixed'
								quality={100}
							/>
							</div>
						</Link>
					</div>
					<div className="flex justify-center items-center" onClick={handleClose}>
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
				<hr/>
				<nav>
					<ul className=''>
						{menuDrawer.map((menu) => (
							<li key={menu.id} className='text-center leading-[26.04px] text-lg font-bold'>
								{menu.submenu?.length ? (
									<React.Fragment>
										<Collapse
											trigger={({ show, onClick }) => (
												<div>
													<a
														className='hover:text-blue flex items-center justify-between flex-row-reverse py-5 px-10 lg:text-lg text-sm'
														href='#'
														onClick={onClick}
													>
														<ArrowDown
															className={`fill-current transition-transform ${
																show && 'transform rotate-180'
															}`}
														/>
														{t(menu.title)}
													</a>
													<hr className={`${show && 'hidden'}`} />
												</div>
											)}
										>
											<ul className='md:hidden'>
												{menu.submenu.map((submenu) => (
													<li key={submenu.id}>
														<ActiveLink href={submenu.link}>
															<div className="flex items-center">
																<a onClick={() => {
																	if (router.pathname === submenu.link) setOpen(false)
																}} className={`text-left block px-10 py-3 lg:text-lg text-sm ${router.pathname === submenu.link && "text-blue"} ${submenu.active && 'cursor-pointer hover:text-blue'} ${!submenu.active && "text-white-50 cursor-default"} flex items-center`}>
																	<span className="inline-block mr-3">{t(submenu.title)}</span>
																	{
																		submenu.withIcon && <Image 
																			src="/images/home/guidebook-icon.svg"
																			height={20}
																			width={20}
																			alt="icon"
																		/>
																	}
																</a>
																{!submenu.active && <span className="coming-soon-sign py-1.5 px-3 text-sm">Coming Soon</span>}
															</div>
														</ActiveLink>
													</li>
												))}
											</ul>
											<hr className="mt-5" />
										</Collapse>
										<span className=''>
											{/* <a className={``} href='#'>
												{t(menu.title)}
												<ArrowDown className='' />
											</a> */}
											<ul className=''>
												{menu.submenu.map((submenu) => (
													<li key={submenu.id}>
														<ActiveLink
															href={submenu.link}
															activeClassName='text-blue'
														>
															<a className=''></a>
														</ActiveLink>
													</li>
												))}
											</ul>
										</span>
									</React.Fragment>
								) : (
									<ActiveLink href={menu.link} disabled={menu.disable} passHref activeClassName='flex items-start'>
										<div>
											<a onClick={() => {
												if (router.pathname === menu.link) setOpen(false)
											}} className={`block py-5 text-left px-10 lg:text-lg text-sm cursor-pointer ${router.pathname === menu.link && "text-blue"} hover:text-blue`}>{t(menu.title)}</a>
											<hr />
										</div>
									</ActiveLink>
								)}
							</li>
						))}
						<li>
							<ul className="flex justify-center mt-6">
								<li className="mr-6">
									<a href="#">
										<Image
											src='/images/Google Play.svg'
											className='block py-2'
											alt='BaseLogo'
											width={150}
											height={40}
											layout='fixed'
											quality={100}
										/>
									</a>
								</li>
								<li>
									<a href="#">
										<Image
											src='/images/App Store.svg'
											className='block py-2'
											alt='BaseLogo'
											width={150}
											height={40}
											layout='fixed'
											quality={100}
										/>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<>
								<Collapse
									trigger={({ show, onClick }) => (
										<div>
											<a
												className='md:hidden flex items-center justify-center w-full hover:text-blue py-2 text-lg font-bold'
												href='#'
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
												<span className="block pl-2">{lang === 'id' ? 'ID' : 'ENG'}</span>
												<ArrowDown
													className={`fill-current transition-transform w-5 h-5 ${
														show && 'transform rotate-180'
													}`}
												/>
											</a>
										</div>
									)}
								>
									<ul className='border-l-2 border-blue md:hidden ml-4'>
										{languages.map((language) => (
											<li
												key={language.locale}
												className='text-center font-bold'
											>
												<ActiveLink href='/' locale={language.locale}>
													<a className='block w-full hover:text-blue py-2 px-4 cursor-pointer text-sm'>
														{language.title}
													</a>
												</ActiveLink>
											</li>
										))}
									</ul>
								</Collapse>
								<span className='group hidden md:flex h-full w-full relative'>
									<a
										className={`hidden md:flex h-full items-center justify-between w-full hover:text-blue py-2`}
										href='#'
									>
										{lang === 'id' ? 'ID' : 'ENG'}
										<ArrowDown className='fill-current w-4 h-4' />
									</a>
									<ul className='soft-shadow hidden min-w-full absolute top-full group-hover:block py-2'>
										{languages.map((language) => (
											<li key={language.locale}>
												<ActiveLink href='/' locale={language.locale}>
													<a className='block w-full hover:text-blue py-1 px-3 cursor-pointer'>
														{language.title}
													</a>
												</ActiveLink>
											</li>
										))}
									</ul>
								</span>
							</>
						</li>
					</ul>
				</nav>
				<div className='pt-8 w-full text-center space-y-5'>
					<Social 
						className="grid grid-cols-4 px-10 md:px-0 text-center lg:text-left" 
						mediaSocialsData={mediaSocialsData1} 
						width={20} 
						height={20} 
					/>
					<Social
						className="grid grid-cols-3 lg:grid-cols-4 px-20 md:px-0 text-center lg:text-left"
						width={20}
						height={20}
						mediaSocialsData={mediaSocialsData2}
					/>
					{/* <AppStore /> */}
				</div>
			</div>
		)
	)
}
