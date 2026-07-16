"use client";

import { useTranslations, useLocale } from 'next-intl';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function OtherApps() {
    const t = useTranslations('OtherApps');
    const locale = useLocale();
    const cozyAppStoreLink = `https://apps.apple.com/${locale}/app/cozy-pomodoro-timer-enfoque/id6759178972`;

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
                        <div className="flex flex-col sm:flex-row gap-3 items-center md:items-start">
                            <a 
                                href={cozyAppStoreLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Download on the App Store"
                                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:scale-105 transition-transform shadow-md w-full sm:w-auto justify-center"
                            >
                                <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-18.1-81.9-18.1-41.9 0-82.9 22.3-103.9 58-31 52.3-7.9 144.1 27 201.7 16.5 27 49 57 85.1 55.7 34.6-1.4 47.3-25.9 88.5-25.7 41.2.2 53 25.9 88.5 25.1 37.1-.8 64.9-27.1 81.3-51.2 18.9-27.7 26.6-54.6 26.9-56-.8-.3-51.9-19.9-52.1-78.1zm-78.6-180.3c15.6-18.9 25.5-44.9 22.2-70.4-22.1 1-47.9 15.3-64 34.1-14.4 16.6-27.2 43.1-23.7 67.9 24.1 1.9 48.7-11.2 65.5-31.6z" />
                                </svg>
                                <div className="flex flex-col items-start leading-tight">
                                    <span className="text-[8px] uppercase font-bold opacity-80 tracking-wider">Download on the</span>
                                    <span className="text-sm font-bold">App Store</span>
                                </div>
                            </a>
                            <a 
                                href="https://play.google.com/store/apps/details?id=com.fatcatgamestudio.cozypomodoro" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Get it on Google Play"
                                className="flex items-center gap-2 bg-white border border-gray-200 text-text px-4 py-2 rounded-xl hover:scale-105 transition-transform shadow-sm w-full sm:w-auto justify-center"
                            >
                                <svg aria-hidden="true" className="w-5 h-5 text-primary" viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 0 24 10 24 23v466c0 13 10 23 23 23 4.5 0 8.5-1.3 12-3.5L304 256 59 3.5C55.5 1.3 51.5 0 47 0zm372.2 191.6C419.1 190.5 419.1 187.3 419.1 185.1c0-2.2 0-5.4-2.2-6.5L132.8 5.4 391.2 256 132.8 506.6l284.1-173.2c2.2-1.1 2.2-4.3 2.2-6.5 0-2.2 0-5.4-2.2-6.5l-63.5-38.8 63.5-38.8z" />
                                </svg>
                                <div className="flex flex-col items-start leading-tight">
                                    <span className="text-[8px] uppercase font-bold text-subtext tracking-wider">Get it on</span>
                                    <span className="text-sm font-bold">Google Play</span>
                                </div>
                            </a>
                        </div>
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
                        <div className="flex flex-col sm:flex-row gap-3 items-center md:items-start">
                            <a 
                                href="https://play.google.com/store/apps/details?id=com.fatcatgamestudio.noxnotes" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Get it on Google Play"
                                className="flex items-center gap-2 bg-white border border-gray-200 text-text px-4 py-2 rounded-xl hover:scale-105 transition-transform shadow-sm w-full sm:w-auto justify-center"
                            >
                                <svg aria-hidden="true" className="w-5 h-5 text-primary" viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 0 24 10 24 23v466c0 13 10 23 23 23 4.5 0 8.5-1.3 12-3.5L304 256 59 3.5C55.5 1.3 51.5 0 47 0zm372.2 191.6C419.1 190.5 419.1 187.3 419.1 185.1c0-2.2 0-5.4-2.2-6.5L132.8 5.4 391.2 256 132.8 506.6l284.1-173.2c2.2-1.1 2.2-4.3 2.2-6.5 0-2.2 0-5.4-2.2-6.5l-63.5-38.8 63.5-38.8z" />
                                </svg>
                                <div className="flex flex-col items-start leading-tight">
                                    <span className="text-[8px] uppercase font-bold text-subtext tracking-wider">Get it on</span>
                                    <span className="text-sm font-bold">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
