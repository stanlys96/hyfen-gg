import React, { useEffect, useState } from 'react'
import HeroAbout from './HeroAbout'
import AboutContent from './AboutContent'

export default function About() {
	return (
        <div>
            <div className="hero-about">
                <HeroAbout />
            </div>
            <AboutContent />
        </div>
	)
}