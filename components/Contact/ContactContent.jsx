import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { contactSupportData } from 'mock/contact'
import { Fade } from 'react-reveal'

function ContactContent() {
    const { t } = useTranslation('contact')
    return (
        <div className="about-content py-56">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-10">
                {
                    contactSupportData.map((item, i) => (
                        <Fade top delay={i == 0 ? 0 : 200 * i}>
                            <div className="text-center contact-content-box">                
                                <Image
                                    src={`/images/${item.imageUrl}`}
                                    height={100}
                                    width={100}
                                    quality={100}
                                    key={i}
                                />
                                <p className="font-bold text-2xl my-5">{t(item.code)}</p>
                                <p className="text-base">{t(item.code + '-desc')}</p>
                            </div>
                        </Fade>
                     ))
                }
            </div>
        </div>
    )
}

export default ContactContent