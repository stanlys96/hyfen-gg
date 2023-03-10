import { ToastContainer } from 'react-toastify'
import BlankLayout from '../components/Layouts/BlankLayout'
import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout || BlankLayout
	return (
		<>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />

				<meta
					name='google-site-verification'
					content='mVszz2-mmGwWyDhkCadd5hADpUOs5VbtrFWRpSZbCK4'
				/>
				<meta name="google-site-verification" content="6gh6MuLQ6YYR-BDvTIyJutD86QkjCU295Cn3N4iyUPA" />
				<link
					rel='apple-touch-icon'
					sizes='57x57'
					href='/favicon/apple-icon-57x57.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='60x60'
					href='/favicon/apple-icon-60x60.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='72x72'
					href='/favicon/apple-icon-72x72.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='76x76'
					href='/favicon/apple-icon-76x76.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='114x114'
					href='/favicon/apple-icon-114x114.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='120x120'
					href='/favicon/apple-icon-120x120.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='144x144'
					href='/favicon/apple-icon-144x144.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='152x152'
					href='/favicon/apple-icon-152x152.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicon/apple-icon-180x180.png'
				/>

				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='/favicon/android-icon-192x192.png'
				/>

				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon/favicon-32x32.png'
				/>

				<link
					rel='icon'
					type='image/png'
					sizes='96x96'
					href='/favicon/favicon-96x96.png'
				/>

				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon/favicon-16x16.png'
				/>

				<link rel='manifest' href='/manifest.json' />

				<meta name='msapplication-TileColor' content='#ffffff' />

				<meta
					name='msapplication-TileImage'
					content='/favicon/ms-icon-144x144.png'
				/>

				<meta name='theme-color' content='#ffffff'></meta>
			</Head>

			{/* Google Analytics */}
			<Script
				strategy='afterInteractive'
				src='https://www.googletagmanager.com/gtag/js?id=G-5X8GZ4NKFN'
			/>
			<Script
				id='google-analytics'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-5X8GZ4NKFN', {
					page_path: window.location.pathname,
					});`,
				}}
			/>
			<Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-VF14GL84KB" />

			<Script id='google-analytics-2' strategy='afterInteractive' dangerouslySetInnerHTML={{
				__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){
				dataLayer.push(arguments);
				}
				gtag('js', new Date());
			
				gtag('config', 'G-VF14GL84KB');
				`
			}} />

			{/* End Google Analytic */}

			<Layout>
				<Component {...pageProps} />
				<ToastContainer />
			</Layout>
		</>
	)
}

export default MyApp
