"use client";

import { useTranslations } from 'next-intl';
import Image from "next/image";
import StoreButtons from '../StoreButtons';

export default function Hero() {
    const t = useTranslations('HomePage');

    return (
        <section id="hero" aria-label={t('headline')} className="w-full max-w-5xl mx-auto pt-20 pb-16 px-8 flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-10 transition-opacity hover:opacity-80" aria-hidden="true">
                <Image
                    className="rounded-full shadow-md border-2 border-white"
                    src="/brand-logo.png"
                    alt=""
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

            <div className="mb-20 w-full">
                <StoreButtons appId="safebite" appName="SafeBite" />
            </div>

            <div className="relative w-full max-w-4xl mx-auto px-4">
                <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-75 -z-10" aria-hidden="true" />
                <Image
                    src="/safebite_hero_mockup.png"
                    alt="SafeBite app screenshot showing a food label scan review"
                    width={1200}
                    height={800}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                />
            </div>
        </section>
    );
}
