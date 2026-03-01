"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

export default function Footer() {
    const t = useTranslations('Footer');
    const pathname = usePathname();
    const currentLocale = useLocale();

    const languages = [
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'es', label: 'Español', flag: '🇪🇸' },
    ];

    return (
        <footer className="w-full py-16 flex flex-col items-center justify-center text-center gap-10 bg-white/50 backdrop-blur-sm border-t border-gray-100 mt-16 px-8">
            <nav aria-label="Footer navigation">
                <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 list-none p-0 m-0">
                    <li>
                        <Link href="/privacy" className="text-sm text-subtext hover:text-primary transition-colors font-medium">
                            {t('privacy')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/terms" className="text-sm text-subtext hover:text-primary transition-colors font-medium">
                            {t('terms')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/age-rating" className="text-sm text-subtext hover:text-primary transition-colors font-medium">
                            {t('ageRating')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/credits" className="text-sm text-subtext hover:text-primary transition-colors font-medium">
                            {t('credits')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/support" className="text-sm text-subtext hover:text-primary transition-colors font-medium">
                            {t('support')}
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="flex flex-wrap items-center justify-center gap-3" role="group" aria-label="Language selector">
                {languages.map((lang) => (
                    <Link
                        key={lang.code}
                        href={pathname as any}
                        locale={lang.code as any}
                        aria-label={`Switch language to ${lang.label}`}
                        aria-current={currentLocale === lang.code ? 'true' : undefined}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all shadow-sm border ${currentLocale === lang.code
                            ? 'bg-primary text-white border-primary shadow-primary/20 scale-105'
                            : 'bg-white text-subtext border-gray-100 hover:border-gray-200'
                            }`}
                    >
                        <span aria-hidden="true">{lang.flag}</span>
                        {lang.label}
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-1">
                <p className="text-sm text-subtext font-medium opacity-60">
                    {t.rich('author', {
                        heart: (chunks) => <span className="text-danger px-1" aria-hidden="true">{chunks}</span>,
                        name: (chunks) => <span className="font-bold">{chunks}</span>
                    })}
                </p>
                <p className="text-xs text-subtext/40 tracking-wide font-semibold">
                    {t('product')}
                </p>
            </div>
        </footer>
    );
}
