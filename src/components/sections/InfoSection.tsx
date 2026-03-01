"use client";

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function InfoSection() {
    const t = useTranslations('InfoSection');
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const content = {
        ingredients: {
            title: t('ingredientsToAvoid'),
            body: t('ingredientsBody')
        },
        shopping: {
            title: t('shoppingTips'),
            body: t('shoppingBody')
        },
        resources: {
            title: t('usefulResources'),
            body: t('resourcesBody')
        }
    };

    const quickGuide = [
        { id: 'ingredients', color: '#FCA5A5', ...content.ingredients },
        { id: 'shopping', color: '#BAE6FD', ...content.shopping },
        { id: 'resources', color: '#E9D5FF', ...content.resources },
    ];

    const toggleSection = (id: string) => {
        setExpandedSection(expandedSection === id ? null : id);
    };

    return (
        <section className="w-full max-w-3xl mx-auto flex flex-col items-center sm:items-start pb-16 px-8" aria-label="CMPA Reference Guide">

            {/* What is CMPA card */}
            <div className="bg-[#FDE68A] rounded-3xl p-6 mb-8 shadow-sm relative overflow-hidden flex flex-col items-start w-full text-left">
                <div className="bg-white/80 self-start px-3 py-1 rounded-full mb-3">
                    <span className="text-[#D97706] text-xs font-bold uppercase">{t('basicTag')}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('whatIsAplv')}</h2>
                <p className="text-gray-800 text-sm leading-5">
                    {t('aplvDescription')}
                </p>
            </div>

            {/* Quick Guide accordion */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 self-start">{t('quickGuide')}</h2>

            <div className="w-full flex flex-col gap-4" role="list">
                {quickGuide.map((item) => {
                    const panelId = `panel-${item.id}`;
                    const isOpen = expandedSection === item.id;
                    return (
                        <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-left" role="listitem">
                            <button
                                onClick={() => toggleSection(item.id)}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                className="p-4 flex w-full flex-row justify-between items-center transition-colors hover:bg-gray-50"
                            >
                                <div className="flex flex-row items-center gap-4">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: item.color }} aria-hidden="true">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg m-0">{item.title}</h3>
                                </div>
                                <div className="text-gray-400" aria-hidden="true">
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div
                                id={panelId}
                                hidden={!isOpen}
                                className="px-5 pb-5 pt-0"
                            >
                                <div className="h-[1px] bg-gray-100 mb-4 w-full" />
                                <p className="text-gray-600 leading-7 text-base whitespace-pre-line m-0">
                                    {item.body}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Emergency card */}
            <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-6 mt-8 w-full text-left" role="alert">
                <div className="flex flex-row items-center mb-4 gap-3">
                    <div className="bg-white p-2.5 rounded-xl shadow-sm" aria-hidden="true">
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h2 className="text-red-800 font-bold text-xl m-0">{t('emergencyTitle')}</h2>
                </div>
                <p className="text-red-800 font-bold mb-2 m-0">{t('severeSymptoms')}</p>
                <p className="text-red-700 text-sm mb-5 leading-5 whitespace-pre-line m-0">
                    {t('symptomsBody')}
                </p>
                <div className="bg-red-200 px-4 py-3.5 rounded-xl flex flex-col items-center justify-center gap-1">
                    <span className="text-red-900 font-bold uppercase tracking-wide text-sm">{t('emergencyStep1')}</span>
                    <span className="text-red-900 font-bold uppercase tracking-wide text-sm">{t('emergencyStep2')}</span>
                </div>
            </div>

        </section>
    );
}
