"use client";

import { useTranslations } from 'next-intl';

export default function ProblemSolution() {
    const t = useTranslations('Story');

    return (
        <section className="w-full max-w-5xl mx-auto py-20 px-8 flex flex-col gap-24">

            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <h2 className="text-sm uppercase font-black text-danger tracking-widest mb-4">
                        {t('problemTitle')}
                    </h2>
                    <p className="text-3xl font-bold text-text mb-6 leading-tight">
                        {t('problemLead')}
                    </p>
                    <p className="text-lg text-subtext leading-relaxed">
                        {t('problemBody')}
                    </p>
                </div>
                <div className="flex-1 bg-secondary/20 rounded-[40px] p-8 aspect-square flex items-center justify-center">
                    <div className="text-8xl italic font-black text-secondary/40 select-none">{"⚠️"}</div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((num) => (
                    <div key={num} className="flex flex-col items-center text-center p-6 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-primary/20">
                            {num}
                        </div>
                        <h3 className="text-xl font-bold text-text mb-3">
                            {t(`step${num}Title` as any)}
                        </h3>
                        <p className="text-subtext">
                            {t(`step${num}Desc` as any)}
                        </p>
                    </div>
                ))}
            </div>


            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="flex-1">
                    <h2 className="text-sm uppercase font-black text-primary tracking-widest mb-4">
                        {t('solutionTitle')}
                    </h2>
                    <p className="text-3xl font-bold text-text mb-6 leading-tight">
                        {t('solutionLead')}
                    </p>
                    <p className="text-lg text-subtext leading-relaxed">
                        {t('solutionBody')}
                    </p>
                </div>
                <div className="flex-1 bg-primary/10 rounded-[40px] p-8 aspect-square flex items-center justify-center border-4 border-dashed border-primary/20">
                    <div className="text-8xl italic font-black text-primary/40 select-none">{"🛡️"}</div>
                </div>
            </div>
        </section>
    );
}
