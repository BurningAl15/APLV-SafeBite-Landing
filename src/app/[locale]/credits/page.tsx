import { useTranslations } from 'next-intl';
import LegalLayout from '@/components/LegalLayout';

export default function CreditsPage() {
    const t = useTranslations('Credits');

    return (
        <LegalLayout title={t('title')}>
            <section className="mb-10">
                <p className="text-lg text-text leading-8">
                    {t('body')}
                </p>
            </section>

            <section className="mt-12 bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                <h2 className="text-xl font-bold text-text mb-4">FatCat Game Studio</h2>
                <p className="text-subtext">
                    © 2025 FatCat Game Studio. Todos los derechos reservados.
                </p>
            </section>
        </LegalLayout>
    );
}
