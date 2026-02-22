"use client";

import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function Hero() {
    const t = useTranslations('HomePage');

    return (
        <section className="w-full max-w-5xl mx-auto pt-20 pb-16 px-8 flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-10 transition-opacity hover:opacity-80">
                <Image
                    className="rounded-full shadow-md border-2 border-white"
                    src="/brand-logo.png"
                    alt="SafeBite logo"
                    width={56}
                    height={56}
                    priority
                />
                <span className="text-3xl font-bold text-text tracking-tight">{t('title')}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-primary mb-6 tracking-tight leading-[1.1]">
                {t('headline')}
            </h1>
            <p className="text-xl sm:text-2xl text-subtext font-medium max-w-2xl mb-12 leading-relaxed">
                {t('subheadline')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">

                <a
                    href="https://apps.apple.com/app/safebite/id123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-black text-white px-8 py-3.5 rounded-2xl hover:scale-105 transition-transform shadow-lg w-full sm:w-auto justify-center"
                >
                    <svg className="w-8 h-8" viewBox="0 0 384 512" fill="currentColor">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-18.1-81.9-18.1-41.9 0-82.9 22.3-103.9 58-31 52.3-7.9 144.1 27 201.7 16.5 27 49 57 85.1 55.7 34.6-1.4 47.3-25.9 88.5-25.7 41.2.2 53 25.9 88.5 25.1 37.1-.8 64.9-27.1 81.3-51.2 18.9-27.7 26.6-54.6 26.9-56-.8-.3-51.9-19.9-52.1-78.1zm-78.6-180.3c15.6-18.9 25.5-44.9 22.2-70.4-22.1 1-47.9 15.3-64 34.1-14.4 16.6-27.2 43.1-23.7 67.9 24.1 1.9 48.7-11.2 65.5-31.6z" />
                    </svg>
                    <div className="flex flex-col items-start leading-tight">
                        <span className="text-[10px] uppercase font-bold opacity-80 letter-spacing-widest">Download on the</span>
                        <span className="text-xl font-bold">App Store</span>
                    </div>
                </a>


                <a
                    href="https://play.google.com/store/apps/details?id=com.FatCatGameStudio.SafeBite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white border-2 border-gray-100 text-text px-8 py-3.5 rounded-2xl hover:scale-105 transition-transform shadow-md w-full sm:w-auto justify-center"
                >
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 0 24 10 24 23v466c0 13 10 23 23 23 4.5 0 8.5-1.3 12-3.5L304 256 59 3.5C55.5 1.3 51.5 0 47 0zm372.2 191.6C419.1 190.5 419.1 187.3 419.1 185.1c0-2.2 0-5.4-2.2-6.5L132.8 5.4 391.2 256 132.8 506.6l284.1-173.2c2.2-1.1 2.2-4.3 2.2-6.5 0-2.2 0-5.4-2.2-6.5l-63.5-38.8 63.5-38.8z" />
                    </svg>
                    <div className="flex flex-col items-start leading-tight">
                        <span className="text-[10px] uppercase font-bold text-subtext tracking-wider">Get it on</span>
                        <span className="text-xl font-bold">Google Play</span>
                    </div>
                </a>
            </div>
        </section>
    );
}
