import React from 'react'
import useTranslation from 'next-translate/useTranslation'

export default function TermsAndConditions() {
    const { t } = useTranslation('terms-and-conditions') 

	return (
        <div
        className='privacy-policy-content terms-and-conditions-bg'
        > 
            <div className="flex flex-col gap-4 container mx-auto py-24">
            <div>
                <h1 className='text-2xl font-bold'>{t('TermsOfService')}</h1>
                <p className="text-xl font-bold">{t('TOSAgreement')}</p>
                <p>{t('TOSAgreement_desc1')}</p>
                <p>{t('TOSAgreement_desc2')}</p>
                <p className="text-xl font-bold">{t('PrivacyPolicy')}</p>
                <p>{t('PrivacyPolicy_desc1')}</p>
                <p className="text-xl font-bold">{t('UpdatedTermsOfService')}</p>
                <p>{t('UpdatedTermsOfService_desc1')}</p>
                <p className="text-xl font-bold">{t('Eligible')}</p>
                <p>{t('Eligible_desc1')}</p>
                <p className="text-xl font-bold">{t('Services')}</p>
                <p>{t('Services_desc1')}</p>
                <p>{t('HyfenAllowsYou')}</p>
                <ul className="list-disc">
                    <li>{t('HyfenAllowsYou_1')}</li>
                    <li>{t('HyfenAllowsYou_2')}</li>
                    <li>{t('HyfenAllowsYou_3')}</li>
                    <li>{t('HyfenAllowsYou_4')}</li>
                    <li>{t('HyfenAllowsYou_5')}</li>
                </ul>
                <p className="text-xl font-bold">{t('DigitalWalletAddress')}</p>
                <p>{t('DigitalWalletAddress_desc1')}</p>
                <p className="text-xl font-bold">{t('UseOfDappsAndDex')}</p>
                <p>{t('UseOfDappsAndDex_desc1')}</p>
                <p className="text-xl font-bold">{t('UseOfStakingServices')}</p>
                <p>{t('UseOfStakingServices_desc1')}</p>
                <p className="text-xl font-bold">{t('PurchaseDigitalAssets')}</p>
                <p>{t('PurchaseDigitalAssets_desc1')}</p>
                <p className="text-xl font-bold">{t('DigitalAssetTransactions')}</p>
                <p>{t('DigitalAssetTransactions_desc1')}</p>
                <p className="text-xl font-bold">{t('AccuracyOfInformationProvided')}</p>
                <p>{t('AccuracyOfInformationProvided_desc1')}</p>
                <p className="text-xl font-bold">{t('DigitalWalletRegistration')}</p>
                <p>{t('DigitalWalletRegistration_desc1')}</p>
                <p className="text-xl font-bold">{t('PushNotifications')}</p>
                <p>{t('PushNotifications_desc1')}</p>
                <p className="text-xl font-bold">{t('PaymentsAndFees')}</p>
                <p>{t('PaymentsAndFees_desc1')}</p>
                <p className="text-xl font-bold">{t('TransactionFees')}</p>
                <p>{t('TransactionFees_desc1')}</p>
                <p className="text-xl font-bold">{t('Tax')}</p>
                <p>{t('Tax_desc1')}</p>
                <p className="text-xl font-bold">{t('ServicesAndThirdPartyContent')}</p>
                <p>{t('ServicesAndThirdPartyContent_desc1')}</p>
                <p className="text-xl font-bold">{t('IntellectualProperty')}</p>
                <p>{t('IntellectualProperty_desc1')}</p>
                <p className="text-xl font-bold">{t('YourFeedback')}</p>
                <p>{t('YourFeedback_desc1')}</p>
                <p className="text-xl font-bold">{t('LinksToOtherWebsites')}</p>
                <p>{t('LinksToOtherWebsites_desc1')}</p>
                <p className="text-xl font-bold">{t('Termination')}</p>
                <p>{t('Termination_desc1')}</p>
                <p className="text-xl font-bold">{t('LimitationOfLiability')}</p>
                <p>{t('LimitationOfLiability_desc1')}</p>
                <p className="text-xl font-bold">{t('AsIsDisclaimer')}</p>
                <p>{t('AsIsDisclaimer_desc1')}</p>
                <p className="text-xl font-bold">{t('GoverningLaw')}</p>
                <p>{t('GoverningLaw_desc1')}</p>
                <p className="text-xl font-bold">{t('SeverabilityAndWaiver')}</p>
                <p className="text-xl font-bold">{t('Severability')}</p>
                <p>{t('Severability_desc1')}</p>
                <p className="text-xl font-bold">{t('Waiver')}</p>
                <p>{t('Waiver_desc1')}</p>
                <p className="text-xl font-bold">{t('ChangesToThese')}</p>
                <p>{t('ChangesToThese_desc1')}</p>
                <p>{t('ByContinuing')}</p>
                <p className="text-xl font-bold">{t('ContactUs')}</p>
                <p>{t('IfYouHave')}</p>
                <p>{t('Email')}</p>
                <p>{t('Address')}</p>
            </div>
            </div>
        </div>
	)
}
