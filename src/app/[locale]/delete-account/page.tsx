import { useTranslations } from 'next-intl';
import LegalLayout from '@/components/LegalLayout';

export default function DeleteAccountPage() {
    const t = useTranslations('AccountDeletion');

    return (
        <LegalLayout title={t('title')}>
            <p className="text-lg text-text mb-8">{t('intro')}</p>

            <section className="mb-10 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-text mb-4">{t('inAppTitle')}</h2>
                <p className="text-subtext leading-relaxed">{t('inAppBody')}</p>
            </section>

            <section className="mb-10 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-text mb-4">{t('webTitle')}</h2>
                <p className="text-subtext leading-relaxed mb-5">{t('webBody')}</p>
                <a
                    href={`mailto:${t('email')}?subject=${encodeURIComponent(t('subject'))}`}
                    className="inline-flex rounded-full bg-primary px-6 py-3 font-bold text-white hover:opacity-90 transition-opacity"
                >
                    {t('cta')}
                </a>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-text mb-4">{t('dataTitle')}</h2>
                <p className="text-subtext leading-relaxed">{t('dataBody')}</p>
                <p className="text-sm text-subtext mt-4">{t('safetyNote')}</p>
            </section>
        </LegalLayout>
    );
}
