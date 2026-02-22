import { useTranslations } from 'next-intl';
import LegalLayout from '@/components/LegalLayout';

export default function TermsPage() {
    const t = useTranslations('Terms');

    return (
        <LegalLayout title={t('title')} lastUpdated={t('lastUpdated')}>
            <p className="text-lg text-text mb-8">{t('intro')}</p>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-text mb-4">{t('usageTitle')}</h2>
                <p className="text-text leading-7">{t('usageBody')}</p>
            </section>

            <section className="mb-10 bg-red-50 border border-red-100 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-red-800 mb-3">{t('disclaimerTitle')}</h2>
                <p className="text-red-700 leading-6">{t('disclaimerBody')}</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-text mb-4">{t('paymentTitle')}</h2>
                <p className="text-text leading-7">{t('paymentBody')}</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-text mb-4">{t('changesTitle')}</h2>
                <p className="text-text leading-7">{t('changesBody')}</p>
            </section>
        </LegalLayout>
    );
}
