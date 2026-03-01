"use client";

import { useTranslations } from 'next-intl';

export default function Pricing() {
    const t = useTranslations('Pricing');

    const tiers = [
        {
            name: t('freeTitle'),
            price: t('freePrice'),
            period: t('freePeriod'),
            features: [
                t('freeFeature1'),
                t('freeFeature2'),
                t('freeFeature3'),
                t('freeFeature4'),
            ],
            cta: t('cta'),
            highlighted: false,
        },
        {
            name: t('weeklyTitle'),
            price: t('weeklyPrice'),
            period: t('weeklyPeriod'),
            features: [
                t('proFeature1'),
                t('proFeature2'),
                t('proFeature3'),
                t('proFeature4'),
            ],
            cta: t('cta'),
            highlighted: false,
        },
        {
            name: t('monthlyTitle'),
            price: t('monthlyPrice'),
            period: t('monthlyPeriod'),
            features: [
                t('proFeature1'),
                t('proFeature2'),
                t('proFeature3'),
                t('proFeature4'),
            ],
            cta: t('cta'),
            highlighted: true,
        },
        {
            name: t('yearlyTitle'),
            price: t('yearlyPrice'),
            period: t('yearlyPeriod'),
            features: [
                t('proFeature1'),
                t('proFeature2'),
                t('proFeature3'),
                t('proFeature4'),
            ],
            cta: t('cta'),
            highlighted: false,
        }
    ];

    return (
        <section className="w-full max-w-6xl mx-auto py-24 px-8" id="pricing" aria-labelledby="pricing-heading">
            <div className="text-center mb-16">
                <h2 id="pricing-heading" className="text-4xl md:text-5xl font-black text-text mb-4">
                    {t('title')}
                </h2>
                <p className="text-xl text-subtext font-medium text-balance max-w-2xl mx-auto">
                    {t('subtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tiers.map((tier, index) => (
                    <div
                        key={index}
                        className={`relative p-8 rounded-[32px] border transition-all duration-300 hover:scale-[1.02] flex flex-col ${tier.highlighted
                            ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-105 z-10'
                            : 'bg-white text-text border-gray-100 shadow-sm hover:shadow-md'
                            }`}
                    >
                        {tier.highlighted && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm" aria-label="Best Value plan">
                                Best Value
                            </div>
                        )}
                        <div className="mb-8">
                            <h3 className={`text-xl font-black mb-2 ${tier.highlighted ? 'text-white' : 'text-primary'}`}>
                                {tier.name}
                            </h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black tracking-tight">{tier.price}</span>
                                <span className={`text-xs font-bold opacity-80 ${tier.highlighted ? 'text-white' : 'text-subtext'}`}>
                                    {tier.period}
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10 flex-1" role="list">
                            {tier.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start gap-3 text-sm">
                                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${tier.highlighted ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                                        }`} aria-hidden="true">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className={`font-medium leading-snug ${tier.highlighted ? 'text-white' : 'text-gray-600'}`}>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Anchor link instead of JS button — improves LCP/TBT, works without JS */}
                        <a
                            href="#hero"
                            aria-label={`${tier.cta} – ${tier.name} plan`}
                            className={`w-full py-4 rounded-2xl font-bold text-base transition-all text-center block ${tier.highlighted
                                ? 'bg-white text-primary hover:bg-gray-100'
                                : 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/10'
                                }`}
                        >
                            {tier.cta}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
