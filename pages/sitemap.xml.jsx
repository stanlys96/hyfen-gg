const Sitemap = () => {
	return null
}

export const getServerSideProps = async ({ res }) => {
	const BASE_URL = 'https://www.hyfen.gg'

	const sitemap = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <url>
      <loc>https://www.hyfen.gg/</loc>
      <lastmod>2023-03-14</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/App%20Store.svg</image:loc>
          <image:title>apple-store</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/Google%20Play.svg</image:loc>
          <image:title>android</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fhome%2Fhome-bg-img.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>image-home</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2FExplore.png&amp;w=256&amp;q=100</image:loc>
          <image:title>Explore.png</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2FEarnMoney.png&amp;w=256&amp;q=100</image:loc>
          <image:title>EarnMoney.png</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2FRedeem.png&amp;w=256&amp;q=100</image:loc>
          <image:title>Redeem.png</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Faxie-phone.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>1</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Fgunstar.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>2</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Fthetan-arena.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>3</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Fcastle-crush.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>4</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Fdraco-master.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>5</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Fgalaxy-fight-club.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>6</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Fmythic-protocol.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>7</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Fsipher-odyssey.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>8</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Fleague-of-kingdoms.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>9</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Faavegotchi.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>10</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Fpegaxy.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>11</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Fstepn.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>12</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Fwalken.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>13</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcarousel%2Fgeng.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>14</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/home/arrow-right.svg</image:loc>
          <image:title>Hyfen Play (For Gamers)</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fhome%2Fproduct-1.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>Hyfen Play (For Gamers)</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fhome%2Fproduct-2.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>Hyfen Tools (For Guilds)</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcommunity-bg.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>Community Background</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fhome%2Fjoin-community-mobile-bg.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>Community Background</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/hyfenlogo.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/twitter.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/facebook.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/m.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/tiktok.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/tele.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/discord.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/instagram.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
    </url>
    <url>
      <loc>https://www.hyfen.gg/terms-and-conditions</loc>
      <lastmod>2023-03-14</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/hyfenlogo.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/twitter.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/facebook.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/m.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/tiktok.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/tele.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/discord.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/instagram.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
    </url>
    <url>
      <loc>https://www.hyfen.gg/privacy-policy</loc>
      <lastmod>2023-03-14</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/hyfenlogo.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/twitter.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/facebook.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/m.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/tiktok.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/tele.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/discord.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/instagram.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
    </url>
    <url>
      <loc>https://www.hyfen.gg/community</loc>
      <lastmod>2023-03-14</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcommunity-1.png&amp;w=3840&amp;q=50</image:loc>
          <image:title>image</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcommunity-2.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>image</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/tele.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/discord.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/twitter.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/facebook.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/instagram.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/tiktok.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcommunity%2FEducational%20Workshops.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>Educational Workshops</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcommunity%2FOffline%20Gatherings.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>Offline Gatherings</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcommunity%2FGaming%20Competitions.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>Gaming Competitions</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/arrow_right.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcommunity%2FInterested%20In.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/hyfenlogo.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/m.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
    </url>
    <url>
      <loc>https://www.hyfen.gg/about</loc>
      <lastmod>2023-03-14</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fabout%2Fbg.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>image</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/IVC.svg</image:loc>
          <image:title>Infinity Venture Crypto</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/Huobi.svg</image:loc>
          <image:title>Huobi</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/Standard%20Alpha.svg</image:loc>
          <image:title>Standard Alpha</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/Morningstar%20Ventures.svg</image:loc>
          <image:title>Morningstar Ventures</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/AC%20Capital.svg</image:loc>
          <image:title>AC Capital</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/Chimera%20Global.svg</image:loc>
          <image:title>Chimera Global</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/Seapdol.svg</image:loc>
          <image:title>Seapdol</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/Enjinstarter.svg</image:loc>
          <image:title>Enjinstarter</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/Yolo%20Investments.svg</image:loc>
          <image:title>Yolo Investments</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/Breederdao.svg</image:loc>
          <image:title>Breederdao</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/CSP%20Dao.svg</image:loc>
          <image:title>CSP Dao</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/hyfenlogo.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/twitter.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/facebook.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/m.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/tiktok.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/tele.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/discord.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/instagram.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
    </url>
    <url>
      <loc>https://www.hyfen.gg/contact</loc>
      <lastmod>2023-03-14</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
        <image:image>
          <image:loc>https://www.hyfen.gg/_next/image?url=%2Fimages%2Fcontact%2Fget-in-touch-bg.png&amp;w=3840&amp;q=75</image:loc>
          <image:title>image</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/contact/name-icon.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/contact/email-icon.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/arrow_right.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/hyfenlogo.svg</image:loc>
          <image:title>BaseLogo</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/twitter.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/facebook.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/m.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/tiktok.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/tele.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/discord.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
        <image:image>
          <image:loc>https://www.hyfen.gg/images/social/instagram.svg</image:loc>
          <image:title>social media</image:title>
        </image:image>
    </url>
  </urlset>
  `

	res.setHeader('Content-Type', 'text/xml')
	res.write(sitemap)
	res.end()

	return {
		props: {},
	}
}

export default Sitemap
