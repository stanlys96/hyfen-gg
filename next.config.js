/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

module.exports = nextTranslate({
	reactStrictMode: false,
	env: {
		BASE_URL: process.env.BASE_URL,
	},
})
