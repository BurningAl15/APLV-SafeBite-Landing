"use client";

import { useTranslations } from 'next-intl';

export default function Scenarios() {
    const t = useTranslations('Scenarios');

    const cases = [
        { id: 1, icon: "🔍" },
        { id: 2, icon: "🏠" },
        { id: 3, icon: "📵" }
    ];

    return (
        <section className="w-full max-w-6xl mx-auto py-20 px-8">
            <h2 className="text-3xl font-black text-text mb-12 text-center md:text-left">
                {t('title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cases.map((item) => (
                    <div key={item.id} className="bg-secondary/10 p-8 rounded-[32px] border border-secondary/20 flex flex-col items-start gap-4">
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <h3 className="text-xl font-bold text-text">
                            {t(`case${item.id}Title` as any)}
                        </h3>
                        <p className="text-subtext leading-relaxed">
                            {t(`case${item.id}Desc` as any)}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
