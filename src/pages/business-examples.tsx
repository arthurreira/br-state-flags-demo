import { statesData, getStateName, getRegionName } from 'br-state-flags';
import * as Flags from 'br-state-flags';
import { Building2, Clock, Landmark, ShoppingCart, Globe, Briefcase, TrendingUp, BarChart3 } from 'lucide-react';
import { useLanguage } from '../lib/i18n/language-context';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { ChartContainer, ChartTooltip } from '../components/ui/chart';

export default function BusinessExamples() {
    const { locale, setLocale, t } = useLanguage();

    // Example Data: Finnish Logistics Company in Brazil
    const logisticsCompany = {
        name: "NordicTrans Brasil Oy",
        hq: "SP",
        hubs: ["SC", "PR", "AM"],
        activeShipments: 1242
    };

    const chartData = [
        { name: t.enterprise.analytics.regions.north, value: 450, color: '#3b82f6' },
        { name: t.enterprise.analytics.regions.northeast, value: 890, color: '#10b981' },
        { name: t.enterprise.analytics.regions.center, value: 340, color: '#f59e0b' },
        { name: t.enterprise.analytics.regions.southeast, value: 1420, color: '#8b5cf6' },
        { name: t.enterprise.analytics.regions.south, value: 760, color: '#ec4899' },
    ];

    return (
        <main className="pt-24 pb-16 min-h-screen bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-6 space-y-16">

                {/* Header */}
                <div className="space-y-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                        <Briefcase className="w-3 h-3" />
                        {t.enterprise.badge}
                    </div>
                    <h1 className="text-5xl font-black tracking-tight">{t.enterprise.title}</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t.enterprise.subtitle}
                    </p>

                    <div className="flex justify-center gap-2 mt-8">
                        <button onClick={() => setLocale('fi')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${locale === 'fi' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}>Suomi 🇫🇮</button>
                        <button onClick={() => setLocale('en')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${locale === 'en' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}>English 🇺🇸</button>
                        <button onClick={() => setLocale('pt-BR')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${locale === 'pt-BR' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}>Português 🇧🇷</button>
                    </div>
                </div>

                {/* Logistics Dashboard */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold uppercase tracking-tight">{t.enterprise.dashboard.title}</h2>
                            <p className="text-sm text-muted-foreground">{t.enterprise.dashboard.sub}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Sidebar info */}
                        <div className="bg-card border border-border rounded-3xl p-8 space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t.enterprise.dashboard.company}</label>
                                <p className="text-xl font-black text-foreground">{logisticsCompany.name}</p>
                            </div>

                            <div className="p-6 bg-secondary/30 rounded-2xl border border-border/50">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{getRegionName('Southeast', locale)} HQ</span>
                                    <Flags.SP className="w-8 h-5 rounded shadow-sm" />
                                </div>
                                <p className="text-lg font-bold text-foreground">{getStateName('SP', locale)}</p>
                                <p className="text-xs text-muted-foreground mt-1">São Paulo, BR</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">{t.enterprise.dashboard.hubs}</h3>
                                <div className="space-y-3">
                                    {logisticsCompany.hubs.map(hub => {
                                        const Flag = (Flags as any)[hub];
                                        const state = statesData[hub as keyof typeof statesData];
                                        return (
                                            <div key={hub} className="flex items-center gap-3 p-3 bg-background border border-border/50 rounded-xl hover:border-primary/30 transition-colors">
                                                <Flag className="w-10 h-6 rounded border border-border/50" />
                                                <div className="flex-1">
                                                    <p className="text-sm font-bold leading-none mb-1 text-foreground">{getStateName(hub as any, locale)}</p>
                                                    <p className="text-[10px] text-muted-foreground uppercase">{getRegionName(state.region, locale)}</p>
                                                </div>
                                                <TrendingUp className="w-4 h-4 text-green-500" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Main Stats */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Regional Growth Chart */}
                            <div className="md:col-span-2 bg-card border border-border rounded-3xl p-8 flex flex-col h-[350px]">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <BarChart3 className="w-4 h-4 text-primary" />
                                        <h3 className="font-bold text-foreground">{t.enterprise.analytics.title}</h3>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t.enterprise.analytics.hubs}</span>
                                </div>
                                <ChartContainer className="flex-1 w-full">
                                    <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: 'currentColor', opacity: 0.5, fontSize: 10, fontWeight: 700 }}
                                            interval={0}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: 'currentColor', opacity: 0.5, fontSize: 10, fontWeight: 700 }}
                                        />
                                        <Tooltip content={<ChartTooltip />} cursor={{ fill: 'currentColor', opacity: 0.05 }} />
                                        <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                                            {chartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ChartContainer>
                            </div>

                            <div className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden group">
                                <Globe className="absolute -right-8 -bottom-8 w-32 h-32 text-primary/5 group-hover:text-primary/10 transition-colors" />
                                <div className="relative">
                                    <p className="text-sm font-bold text-muted-foreground mb-2">{t.enterprise.dashboard.market}</p>
                                    <p className="text-4xl font-black mb-4 text-foreground">27/27</p>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        {t.enterprise.dashboard.marketDesc}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-card border border-border rounded-3xl p-8">
                                <p className="text-sm font-bold text-muted-foreground mb-2">{t.enterprise.dashboard.precision}</p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end border-b border-border/50 pb-2">
                                        <span className="text-xs font-medium text-foreground">{t.enterprise.dashboard.accuracy}</span>
                                        <span className="text-sm font-black text-foreground">99.9%</span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-border/50 pb-2">
                                        <span className="text-xs font-medium text-foreground">{t.enterprise.dashboard.svg}</span>
                                        <span className="text-sm font-black text-foreground">&lt; 50kB avg</span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-border/50 pb-2">
                                        <span className="text-xs font-medium text-foreground">{t.enterprise.dashboard.lang}</span>
                                        <span className="text-sm font-black text-foreground">3 Locales</span>
                                    </div>
                                </div>
                            </div>

                            {/* Timezone Calc Example */}
                            <div className="md:col-span-2 bg-gradient-to-br from-secondary/50 to-background border border-border rounded-3xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold text-foreground">{t.enterprise.timezone.title}</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {[
                                        { city: 'Helsinki', tz: 'EET', time: '16:15', off: '+2' },
                                        { city: 'Brasília', tz: 'BRT', time: '11:15', off: '-3' },
                                        { city: 'Rio Branco', tz: 'ACT', time: '09:15', off: '-5' }
                                    ].map(t_item => (
                                        <div key={t_item.city} className="p-4 bg-background/50 border border-border/50 rounded-2xl text-center">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{t_item.city}</p>
                                            <p className="text-2xl font-black text-foreground">{t_item.time}</p>
                                            <p className="text-[10px] font-bold text-primary">{t_item.tz} (UTC {t_item.off})</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-muted-foreground mt-6 text-center italic">
                                    {t.enterprise.timezone.footer}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Business Use Cases Grid */}
                <section className="bg-primary/5 rounded-[3rem] p-8 md:p-16 border border-primary/10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4 text-foreground">{t.enterprise.useCases.title}</h2>
                        <p className="text-muted-foreground">{t.enterprise.useCases.sub}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {t.enterprise.useCases.items.map((item, i) => {
                            const Icons = [ShoppingCart, Landmark, Globe];
                            const Icon = Icons[i];
                            return (
                                <div key={i} className="bg-background p-8 rounded-[2rem] border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group">
                                    <Icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-xl font-bold mb-3 text-foreground">{item.t}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

            </div>
        </main>
    );
}
