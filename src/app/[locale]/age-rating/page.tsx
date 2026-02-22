import { useTranslations } from 'next-intl';
import LegalLayout from '@/components/LegalLayout';

export default function AgeRatingPage() {
    const t = useTranslations('AgeRating');

    return (
        <LegalLayout title={t('title')}>
            <div className="flex items-center gap-6 mb-12">
                <div className="w-24 h-24 rounded-3xl bg-secondary flex items-center justify-center text-4xl font-black text-white shadow-lg">
                    {t('rating')}
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-text">{t('title')}</h2>
                    <p className="text-subtext font-medium">Apple App Store & Google Play</p>
                </div>
            </div>

            <section className="mb-10">
                <p className="text-lg text-text leading-8">
                    {t('body')}
                </p>
            </section>
        </LegalLayout>
    );
}
