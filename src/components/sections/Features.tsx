"use client";

import { useTranslations } from 'next-intl';

import { Zap, WifiOff, ShieldCheck, History } from 'lucide-react';

export default function Features() {
    const t = useTranslations('Features');

    const featureList = [
        {
            title: t('ocrTitle'),
            description: t('ocrDesc'),
            icon: Zap
        },
        {
            title: t('offlineTitle'),
            description: t('offlineDesc'),
            icon: WifiOff
        },
        {
            title: t('dairyTitle'),
            description: t('dairyDesc'),
            icon: ShieldCheck
        },
        {
            title: t('historyTitle'),
            description: t('historyDesc'),
            icon: History
        }
    ];

    return (
        <section className="w-full max-w-6xl mx-auto py-24 px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featureList.map(({ title, description, icon: Icon }, index) => (
                    <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="bg-secondary/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                            <Icon size={32} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-xl font-bold text-text mb-3">{title}</h3>
                        <p className="text-subtext leading-relaxed">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
