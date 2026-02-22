import { useTranslations } from 'next-intl';
import LegalLayout from '@/components/LegalLayout';

export default function PrivacyPage() {
    const t = useTranslations('Privacy');

    return (
        <LegalLayout title={t('title')} lastUpdated={t('lastUpdated')}>
            <p className="text-lg text-text mb-8">{t('intro')}</p>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-text mb-4">{t('designTitle')}</h2>
                <p className="text-text leading-7">{t('designBody')}</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-text mb-4">{t('collectionTitle')}</h2>
                <p className="text-text leading-7 whitespace-pre-line">{t('collectionBody')}</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-text mb-4">{t('cameraTitle')}</h2>
                <p className="text-text leading-7">{t('cameraBody')}</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-text mb-4">{t('thirdPartyTitle')}</h2>
                <p className="text-text leading-7">{t('thirdPartyBody')}</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-text mb-4">{t('rightsTitle')}</h2>
                <p className="text-text leading-7">{t('rightsBody')}</p>
            </section>

            <section className="mb-10 bg-red-50 border border-red-100 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-red-800 mb-3">{t('disclaimerTitle')}</h2>
                <p className="text-red-700 leading-6">{t('disclaimerBody')}</p>
            </section>

            <p className="mt-12 text-subtext font-medium">{t('contact')}</p>
        </LegalLayout>
    );
}
