import { useTranslations } from 'next-intl';
import { Search, Home, WifiOff } from 'lucide-react';

export default function Scenarios() {
    const t = useTranslations('Scenarios');

    const cases = [
        { id: 1, icon: Search, color: "text-blue-500", bg: "bg-blue-50" },
        { id: 2, icon: Home, color: "text-orange-500", bg: "bg-orange-50" },
        { id: 3, icon: WifiOff, color: "text-red-500", bg: "bg-red-50" }
    ];

    return (
        <section className="w-full max-w-6xl mx-auto py-24 px-8">
            <h2 className="text-4xl font-black text-text mb-16 text-center lg:text-left tracking-tight">
                {t('title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cases.map(({ id, icon: Icon, color, bg }) => (
                    <div key={id} className="group p-10 rounded-[40px] border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-start gap-6">
                        <div className={`w-14 h-14 rounded-2xl ${bg} ${color} flex items-center justify-center transition-transform group-hover:rotate-6`}>
                            <Icon size={28} strokeWidth={2.5} />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors">
                                {t(`case${id}Title` as any)}
                            </h3>
                            <p className="text-lg text-subtext leading-relaxed font-medium">
                                {t(`case${id}Desc` as any)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
