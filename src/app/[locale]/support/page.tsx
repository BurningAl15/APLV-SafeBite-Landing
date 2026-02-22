import { useTranslations } from 'next-intl';
import LegalLayout from '@/components/LegalLayout';

export default function SupportPage() {
    const t = useTranslations('Support');

    return (
        <LegalLayout title={t('title')}>
            <p className="text-lg text-text mb-8">{t('intro')}</p>

            <section className="mb-10 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-text mb-4 flex items-center gap-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                </h2>
                <a href={`mailto:${t('email')}`} className="text-2xl font-black text-primary hover:underline break-all">
                    {t('email')}
                </a>
                <p className="mt-4 text-subtext italic">
                    {t('responseTime')}
                </p>
            </section>
        </LegalLayout>
    );
}
