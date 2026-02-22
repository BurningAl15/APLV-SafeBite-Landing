"use client";

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Link } from '@/i18n/routing';

interface LegalLayoutProps {
    title: string;
    lastUpdated?: string;
    children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
    const homeT = useTranslations('HomePage');
    const footerT = useTranslations('Footer');

    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            <main className="flex-1 max-w-3xl mx-auto py-16 px-8 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                    <Link className="flex items-center gap-3 transition-opacity hover:opacity-80" href="/">
                        <Image
                            className="rounded-full shadow-sm"
                            src="/brand-logo.png"
                            alt="SafeBite logo"
                            width={40}
                            height={40}
                        />
                        <span className="text-xl font-bold text-text tracking-tight">{homeT('title')}</span>
                    </Link>

                    <Link href="/" className="text-sm font-bold text-primary hover:bg-primary/5 px-4 py-2 rounded-xl transition-colors border border-primary/20 flex items-center gap-2 self-start sm:self-auto">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        {footerT('back')}
                    </Link>
                </div>

                <h1 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">{title}</h1>
                {lastUpdated && <p className="text-subtext mb-8 italic">{lastUpdated}</p>}

                <div className="prose prose-slate max-w-none">
                    {children}
                </div>
            </main>
        </div>
    );
}
