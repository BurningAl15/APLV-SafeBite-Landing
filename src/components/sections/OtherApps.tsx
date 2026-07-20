"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import StoreButtons from '../StoreButtons';

export default function OtherApps() {
    const t = useTranslations('OtherApps');

    return (
        <section className="w-full max-w-5xl mx-auto py-16 px-8 mt-12 bg-white rounded-3xl border border-gray-100 shadow-sm text-center">
            <h2 className="text-3xl font-black text-text mb-12">{t('title')}</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-left">
                {/* Cozy Pomodoro App */}
                <div className="flex flex-col md:flex-row items-center gap-6 max-w-lg">
                    <div className="w-24 h-24 flex-shrink-0 relative rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                        <Image src="/logos/cozypomodoro_logo.jpg" alt="Cozy Pomodoro Logo" fill className="object-cover" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-text mb-2">{t('cozyAppTitle')}</h3>
                        <p className="text-subtext mb-4 leading-relaxed text-sm">
                            {t('cozyAppDesc')}
                        </p>
                        <StoreButtons appId="cozyPomodoro" appName="Cozy Pomodoro" compact />
                    </div>
                </div>

                {/* Nox Notes App */}
                <div className="flex flex-col md:flex-row items-center gap-6 max-w-lg">
                    <div className="w-24 h-24 flex-shrink-0 relative rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-black">
                        <Image src="/logos/noxnotes_logo.png" alt="Nox Notes Logo" fill className="object-cover" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-text mb-2">{t('noxNotesTitle')}</h3>
                        <p className="text-subtext mb-4 leading-relaxed text-sm">
                            {t('noxNotesDesc')}
                        </p>
                        <StoreButtons appId="noxNotes" appName="Nox Notes" compact />
                    </div>
                </div>
            </div>
        </section>
    );
}
