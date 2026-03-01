import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Scan, Search, ShieldCheck } from 'lucide-react';

export default function ProblemSolution() {
    const t = useTranslations('Story');

    const steps = [
        { num: 1, icon: Scan },
        { num: 2, icon: Search },
        { num: 3, icon: ShieldCheck },
    ];

    return (
        <section className="w-full max-w-5xl mx-auto py-20 px-8 flex flex-col gap-24">
            {/* Problem */}
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    {/* eyebrow label — not a heading, just a styled label */}
                    <p className="text-sm uppercase font-black text-danger tracking-widest mb-4">
                        {t('problemTitle')}
                    </p>
                    <h2 className="text-3xl font-bold text-text mb-6 leading-tight">
                        {t('problemLead')}
                    </h2>
                    <p className="text-lg text-subtext leading-relaxed">
                        {t('problemBody')}
                    </p>
                </div>
                <div className="flex-1 bg-secondary/20 rounded-[40px] overflow-hidden aspect-square flex items-center justify-center relative group">
                    <Image
                        src="/problem_anxiety_supermarket.png"
                        alt="A person looking anxious while reading food labels at a supermarket"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-danger/10 group-hover:bg-transparent transition-colors duration-500" aria-hidden="true" />
                </div>
            </div>

            {/* Steps */}
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0 m-0">
                {steps.map(({ num, icon: Icon }) => (
                    <li key={num} className="flex flex-col items-center text-center p-6 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-all duration-300" aria-hidden="true">
                            <Icon size={32} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-xl font-bold text-text mb-3">
                            {t(`step${num}Title` as any)}
                        </h3>
                        <p className="text-subtext">
                            {t(`step${num}Desc` as any)}
                        </p>
                    </li>
                ))}
            </ol>

            {/* Solution */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="flex-1">
                    {/* eyebrow label */}
                    <p className="text-sm uppercase font-black text-primary tracking-widest mb-4">
                        {t('solutionTitle')}
                    </p>
                    <h2 className="text-3xl font-bold text-text mb-6 leading-tight">
                        {t('solutionLead')}
                    </h2>
                    <p className="text-lg text-subtext leading-relaxed">
                        {t('solutionBody')}
                    </p>
                </div>
                <div className="flex-1 bg-primary/10 rounded-[40px] overflow-hidden aspect-square flex items-center justify-center border-4 border-dashed border-primary/20 relative group">
                    <Image
                        src="/solution_shield_check.png"
                        alt="SafeBite app showing a green checkmark confirming a scanned label is dairy-free"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
            </div>
        </section>
    );
}
