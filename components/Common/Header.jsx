import ArrowDown from '../Icons/ArrowDown'
import Menu from '../Icons/Menu'
import { languages } from '../../mock'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import ActiveLink from './ActiveLink'
import Collapse from './Collapse'
import SideDrawer from './SideDrawer'
import { menus } from '../../mock'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { Fade } from 'react-reveal';
import DownloadAppButton from './DownloadAppButton'
import DropdownItem from './DropdownItem';

function Header({ fixed = true }) {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const [domLoaded, setDomLoaded] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const { t, lang } = useTranslation('common')
	React.useEffect(() => {
		if (open) {
			setOpen(!open)
		}
		const handleScroll = () => {
			setScrollY(window.scrollY);
		  };
	
		  handleScroll();
	  
		  window.addEventListener("scroll", handleScroll);
		  return () => {
			window.removeEventListener("scroll", handleScroll);
		  };
	}, [router.asPath])

	React.useEffect(() => {
		setDomLoaded(true);
	}, []);
	return (
		domLoaded && <Fade top>
			<div className={`${fixed ? "fixed" : "relative"} z-100 w-full py-5 bg-transparent transition-all duration-700 ease-in-out ${
				 scrollY < 20 ? '' : 'scrolled'
			}`}>
			<div className='container mx-auto'>
				<div className='flex w-full justify-between'>
					<div className='flex flex-1 w-fit items-center justify-between bg-green-500'>
						{/* Icon App */}
							<Link href='/' className=''>
								<a className='flex justify-start items-center '>
									<Image
										src='/images/hyfen-logo.svg'
										className='block py-2'
										alt='BaseLogo'
										width={130}
										height={28}
										layout='fixed'
										quality={100}
									/>
								</a>
							</Link>
							{/* Button Dropdown */}
						<button
							className='flex md:hidden items-center justify-center ml-auto p-3 md:p-4'
							onClick={() => setOpen((o) => !o)}
						>
							<Menu />
						</button>
					</div>
					{/* Tablet Upper */}
					<div className='hidden flex-col md:flex md:flex-row md:gap-64 bg-red-600 w-full'>
						{/* Nav Container */}
						<nav className='w-full h-full gap-x-24 text-xs font-medium flex-col md:flex-row hidden md:flex'>
							<ul className='w-full md:flex justify-end py-0 md:py-0'>
								{menus.map((menu) => (
									<li key={menu.id}>
										{menu.submenu?.length ? (
											<React.Fragment>
												<span className='group hidden md:flex h-full w-full relative'>
													<a
														className={`hidden text-sm md:flex h-full items-center justify-between w-full hover:text-white py-2 text-white-50 mx-3`}
														href='#'
													> 
														{t(menu.title)}
														<ArrowDown className='fill-current w-4 h-4 ml-2' />
													</a>
													<ul
														className={`
														hidden
													dropdown-menu
													absolute
													bg-white
													text-base
													z-50
													py-2
													list-none
													text-left
													rounded-lg
													shadow-lg
													top-full
													m-0
													bg-clip-padding
													border-none
													group-hover:block
													`}
														aria-labelledby="dropdownMenuButton2"
													>
														{menu.submenu.map((submenu, i) => (
															<DropdownItem key={i} additionalClassName={submenu.active && "hover:bg-gray-100"}>
																<a href={submenu.link} className={`${submenu.active ? "" : "text-black-50 cursor-default"} font-bold flex items-center`}>
																<span className="inline-block mr-2">{t(submenu.title)}</span>
																	{
																		submenu.withIcon && <Image 
																			src="/images/home/guidebook-icon-black.svg"
																			height={15}
																			width={15}
																			alt="icon"
																		/>
																	}
																</a>
															</DropdownItem>
														))}
													</ul>
												</span>
											</React.Fragment>
										) : (
											<div className="flex justify-center items-center h-full">
												<ActiveLink href={menu.link} activeClassName='bg-app-primary text-white rounded-full' disabled={menu.disable}>
														<a className='navigation-link cursor-pointer '>
															{t(menu.title)} 
														</a>
												</ActiveLink>
											</div>
										)}
									</li>
								))}
								<li>
									<>
										<Collapse
											trigger={({ show, onClick }) => (
												<a
													className='md:hidden text-sm flex items-center justify-between w-full hover:text-blue py-2'
													href='#'
													onClick={onClick}
												>
													<Image
														src={`/images/arrow_right.svg`}
														className='ml-5'
														width={20}
														height={20}
														alt='BaseLogo'
														layout='intrinsic'
														quality={100}
													/>
													{lang === 'id' ? 'ID' : 'ENG'}
													<ArrowDown
														className={`fill-current transition-transform w-5 h-5 ${
															show && 'transform rotate-180'
														}`}
													/>
												</a>
											)}
										>
											<ul className='hidden
													dropdown-menu
													absolute
													bg-white
													text-base
													z-50
													py-2
													list-none
													text-left
													rounded-lg
													shadow-lg
													top-full
													m-0
													ml-5
													bg-clip-padding
													border-none
													group-hover:block'>
												{languages.map((language, i) => (
													<DropdownItem key={i} additionalClassName={"hover:bg-gray-100"}>
														<ActiveLink
															href={router.pathname}
															locale={language.locale}
														>
															<a className='block w-full py-2 px-4 font-bold text-sm'>
																{language.title}
															</a>
														</ActiveLink>
													</DropdownItem>
												))}
											</ul>
										</Collapse>
										<span className='group hidden md:flex h-full w-full relative'>
											<a
												className={`hidden md:flex h-full items-center justify-between w-full hover:text-white py-2 pl-4 pr-6 text-white-50`}
												href='#'
											>
												<Image
													src={`/images/globe.svg`}
													className='ml-5'
													width={20}
													height={20}
													alt='BaseLogo'
													layout='intrinsic'
													quality={100}
												/>
												<span className="inline-block ml-3 text-sm">{lang === 'id' ? 'ID' : 'ENG'}</span>

												<ArrowDown className='fill-current w-4 h-4' />
											</a>
											<ul className='hidden
													dropdown-menu
													absolute
													bg-white
													text-base
													z-50
													py-2
													list-none
													text-left
													rounded-lg
													shadow-lg
													top-full
													m-0
													bg-clip-padding
													border-none
													ml-5
													group-hover:block'>
												{languages.map((language, i) => (
													<DropdownItem key={i} additionalClassName={"hover:bg-gray-100"}>
														<ActiveLink
															href={`/${language.locale}/${router.pathname}`}
															locale={language.locale}
														>
															<a className='block w-full py-1 px-3 cursor-pointer font-bold text-sm'>
																{language.title}
															</a>
														</ActiveLink>
												</DropdownItem>
												))}
											</ul>
										</span>
									</>
								</li>
								<li>
									<DownloadAppButton />
								</li>
							</ul>
						</nav>
					</div>
					<SideDrawer setOpen={setOpen} handleClose={() => setOpen(false)} open={open} />
				</div>
			</div>
		</div>
		</Fade>
	)
}

export default Header
