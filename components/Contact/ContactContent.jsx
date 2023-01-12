import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { textInputData } from '../../mock/contact'
import { Fade } from 'react-reveal'

function ContactContent() {
    const { t } = useTranslation('contact')
    return (
        <div className="about-content py-12">
            <div className="container mx-auto">
                <div className="grid grid-rows-1 gap-y-6 md:gap-y-0 md:grid-cols-2 w-full gap-x-12">
                    {
                        textInputData.map((data, i) => (
                            <Fade key={i} left={i % 2 == 0} right={i % 2 != 0}>
                                <InputTextWithIcon imageUrl={data.imageUrl} title={t(data.code)} placeholder="" key={i} />
                            </Fade>
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-12">
                    <Fade left>
                        <InputDropdown title={t('Your Inquiry')} />
                    </Fade>
                </div>
                <div className="flex flex-col items-start">
                    <InputTextArea title={t('Message')} />
                    <Fade left>
                        <SendMessageButton />
                    </Fade>
                </div>
            </div>
        </div>
    )
}

function InputTextWithIcon({imageUrl, placeholder, title}) {
    return <div>
                <p className="mb-3">{title}</p>
                <div className="relative flex items-center">
                    <img
                        src={imageUrl}
                        className='absolute w-5 h-5 ml-3'
                        width="24px"
                        height="24px"
                        alt='BaseLogo'
                        layout='intrinsic'
                        quality={100}
                    />
                    <input placeholder={placeholder} type="text" className="
                        block
                        w-full
                        rounded-md
                        border-contact-select
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        bg-transparent
                        pr-3
                        pl-10
                    " />
                </div>
            </div>
}

function InputDropdown({title}) {
    const { t } = useTranslation('contact')
    return <div className="my-6 md:my-10">
            <p className="mb-3">{title}</p>
            <div className="relative flex items-center">
                <select placeholder="" type="text" className="
                    block
                    w-full
                    rounded-md
                    border-contact-select
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    bg-transparent
                    text-white
                    select-contact
                ">
                    <option>{t('General Inquiry')}</option>
                    <option>{t('Partnership')}</option>
                    <option>{t('Sales')}</option>
                    <option>{t('Guild Onboard')}</option>
                </select>
            </div>
        </div>
}

function InputTextArea({title}) {
    return <div className="mb-5 w-full">
            <Fade left>
                <p className="mb-3">{title}</p>
                <div className="relative flex items-center">
                    <textarea rows="6" className="
                        block
                        w-full
                        rounded-md
                        border-contact-select
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        bg-transparent
                    " />
                </div>
            </Fade>
        </div>
}

function SendMessageButton() {
    const { t } = useTranslation('contact');
    return <div className="w-full flex justify-center md:w-fit">
    <a href="#" className='mx-auto header__download-button text-slate-900 bg-white py-3 px-6 text-xs md:text-sm font-bold cursor-pointer mt-5 flex items-center justify-start'>
        <span className="inline-block mr-2">{t('Send Message')} </span>
        <Image
            src={`/images/arrow_right.svg`}
            className='ml-5'
            width={20}
            height={20}
            alt='BaseLogo'
            layout='intrinsic'
            quality={100}
        />
    </a>
    </div>
}

export default ContactContent