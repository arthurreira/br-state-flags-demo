import { useState, useMemo } from 'react';
import * as Flags from 'br-state-flags';
import { statesData, getStateName, getRegionName } from 'br-state-flags';
import type { Locale, BRStateData } from 'br-state-flags';
import { Search, Info, MapPin, Users, Maximize2, Clock, Globe, ExternalLink, Compass } from 'lucide-react';
import { REGIONS_CONFIG } from '../lib/constants';
import { useLanguage } from '../lib/i18n/language-context';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip';

// Mapping of flag viewBoxes to fix scaling issues in components missing them
const FLAG_VIEWBOXES: Record<string, string> = {
    AC: "0 0 500 350",
    AL: "0 0 175.006 116.671",
    AM: "0 0 2100 1500",
    AP: "0 0 1000 700",
    BA: "0 0 1500 1000",
    CE: "-200 -140 400 280",
    DF: "0 0 1453.846 1050",
    ES: "0 0 1320 924",
    GO: "0 0 560 392",
    MA: "0 0 1350 900",
    MG: "0 0 5120 3072",
    MS: "0 0 1000 700",
    MT: "0 0 2000 1400",
    PA: "0 0 900 600",
    PB: "0 0 6000 4200",
    PE: "0 0 540 360",
    PI: "0 0 1950 1300",
    PR: "0 0 2500 1748",
    RJ: "-1000 -700 2000 1400",
    RN: "0 0 900 600",
    RO: "-1000 -700 2000 1400",
    RR: "0 0 2000 1400",
    RS: "-1000 -700 2000 1400",
    SC: "-418 -304 836 608",
    SE: "0 0 1000 700",
    SP: "0 0 1950 1300",
    TO: "0 0 20 14"
};

const RegionBadge = ({ region, locale }: { region: any; locale: Locale }) => {
    const config = REGIONS_CONFIG[region as keyof typeof REGIONS_CONFIG];
    const translatedRegion = getRegionName(region, locale);
    return (
        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${config?.bgClass || 'bg-secondary text-secondary-foreground'}`}>
            {translatedRegion}
        </span>
    );
};

const StateDetailReport = ({ state, locale, flagViewBox }: { state: BRStateData; locale: Locale; flagViewBox?: string }) => {
    const FlagComponent = (Flags as any)[state.uf];
    const { t } = useLanguage();
    const formatNumber = (num: number) => {
        return new Intl.NumberFormat(locale === 'en' ? 'en-US' : locale === 'fi' ? 'fi-FI' : 'pt-BR').format(num);
    };

    return (
        <div className="flex flex-col h-full overflow-y-auto custom-scrollbar pt-8 pb-12 px-2">
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-border/50 bg-secondary/10 shadow-2xl mb-12 group/flag">
                {FlagComponent && (
                    <FlagComponent
                        className="w-full h-full p-8 transition-transform duration-700 group-hover/flag:scale-110"
                        viewBox={flagViewBox}
                        preserveAspectRatio="xMidYMid meet"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>

            <div className="space-y-12">
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <div className="space-y-1">
                            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">{t.directory.report.identity}</h3>
                            <h2 className="text-5xl font-black tracking-tight text-foreground">{getStateName(state.uf, locale)}</h2>
                        </div>
                        <div className="text-6xl font-black text-primary/10 select-none pb-4">{state.uf}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-card border border-border rounded-3xl space-y-2 group hover:border-primary transition-colors">
                            <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            <p className="text-xs font-bold text-muted-foreground uppercase opacity-60">{t.directory.report.city}</p>
                            <p className="text-xl font-black">{state.capital}</p>
                        </div>
                        <div className="p-6 bg-card border border-border rounded-3xl space-y-2 group hover:border-primary transition-colors">
                            <Globe className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            <p className="text-xs font-bold text-muted-foreground uppercase opacity-60">{t.directory.report.iso}</p>
                            <p className="text-xl font-black">{state.iso}</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">{t.directory.report.demographics}</h3>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-8 bg-primary/5 border border-primary/20 rounded-[2.5rem] flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-primary uppercase tracking-widest">{t.directory.report.resident}</p>
                                <p className="text-4xl font-black tracking-tight">{formatNumber(state.population)}</p>
                            </div>
                            <Users className="w-12 h-12 text-primary/20" />
                        </div>
                        <div className="p-8 bg-secondary/5 border border-secondary/20 rounded-[2.5rem] flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-secondary-foreground/60 uppercase tracking-widest">{t.directory.report.territorial}</p>
                                <p className="text-4xl font-black tracking-tight">{formatNumber(state.area)} <span className="text-lg font-bold opacity-40">km²</span></p>
                            </div>
                            <Maximize2 className="w-12 h-12 text-secondary-foreground/10" />
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">{t.directory.report.global}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-6 bg-card border border-border rounded-3xl flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-secondary/20 rounded-xl">
                                    <Clock className="w-4 h-4 text-secondary-foreground" />
                                </div>
                                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">{t.directory.report.time}</p>
                            </div>
                            <div>
                                <p className="text-lg font-bold">{state.timezone}</p>
                                <p className="text-sm text-primary font-black uppercase">UTC {state.utcOffset > 0 ? `+${state.utcOffset}` : state.utcOffset}:00</p>
                            </div>
                        </div>
                        <div className="p-6 bg-card border border-border rounded-3xl flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-xl">
                                    <Compass className="w-4 h-4 text-primary" />
                                </div>
                                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">{t.directory.report.coordinates}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-bold truncate">LAT: {state.coordinates.latitude.toFixed(4)}°</p>
                                <p className="text-sm font-bold truncate">LNG: {state.coordinates.longitude.toFixed(4)}°</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="pt-4">
                    <button className="w-full flex items-center justify-center gap-2 py-4 bg-foreground text-background rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[0.98] transition-transform shadow-xl shadow-foreground/10">
                        {t.directory.report.explore}
                        <ExternalLink className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function FlagDirectory() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const { locale: currentLocale, t } = useLanguage();

    const filteredStates = useMemo(() => {
        return Object.values(statesData).filter(state => {
            const translatedName = getStateName(state.uf, currentLocale);
            const matchesSearch = translatedName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                state.uf.toLowerCase().includes(searchQuery.toLowerCase()) ||
                state.capital.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesRegion = !selectedRegion || state.region === selectedRegion;
            return matchesSearch && matchesRegion;
        });
    }, [searchQuery, selectedRegion, currentLocale]);

    const formatNumber = (num: number) => {
        return new Intl.NumberFormat(currentLocale === 'en' ? 'en-US' : currentLocale === 'fi' ? 'fi-FI' : 'pt-BR').format(num);
    };

    return (
        <TooltipProvider>
            <div className="max-w-7xl mx-auto p-6 space-y-8">
                <header className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 bg-card/50 backdrop-blur-md border border-border/50 p-6 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary/10 transition-colors duration-500" />

                    <div className="space-y-2 relative">
                        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary to-primary/40">
                            {t.directory.title}
                        </h1>
                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-primary animate-pulse" />
                            <p className="text-muted-foreground text-sm font-medium">
                                {t.directory.subtitle.replace('{count}', Object.keys(statesData).length.toString())}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative">
                        <div className="relative group/search">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within/search:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder={t.directory.searchPlaceholder}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 w-full sm:w-64 transition-all shadow-sm font-bold"
                            />
                        </div>

                        <select
                            className="bg-background border border-border rounded-xl px-3 py-2.5 text-sm font-black focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all shadow-sm cursor-pointer hover:border-primary/50 uppercase tracking-tight"
                            onChange={(e) => setSelectedRegion(e.target.value || null)}
                        >
                            <option value="">{t.directory.allRegions}</option>
                            {Object.keys(REGIONS_CONFIG).map(region => (
                                <option key={region} value={region}>{getRegionName(region as any, currentLocale)}</option>
                            ))}
                        </select>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredStates.map((state) => {
                        const FlagComponent = (Flags as any)[state.uf];
                        const flagViewBox = FLAG_VIEWBOXES[state.uf];
                        const regionColor = REGIONS_CONFIG[state.region as keyof typeof REGIONS_CONFIG]?.color || '#ccc';
                        const localizedName = getStateName(state.uf, currentLocale);

                        return (
                            <div
                                key={state.uf}
                                className="group relative bg-card border border-border rounded-[2rem] p-5 hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(var(--primary),0.08)] transition-all duration-500 flex flex-col gap-5 hover:-translate-y-2"
                            >
                                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border border-border/50 bg-background/50 group-hover:scale-[1.03] transition-transform duration-500 shadow-sm">
                                    {FlagComponent ? (
                                        <FlagComponent
                                            className="w-full h-full p-4"
                                            viewBox={flagViewBox}
                                            preserveAspectRatio="xMidYMid meet"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground font-black text-2xl">
                                            {state.uf}
                                        </div>
                                    )}
                                    <div
                                        className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-primary/30 transition-colors rounded-2xl"
                                        style={{ borderColor: `${regionColor}30` }}
                                    />
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-3xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">{state.uf}</span>
                                                <RegionBadge region={state.region} locale={currentLocale} />
                                            </div>
                                            <h2 className="text-xl font-bold text-foreground leading-tight tracking-tight group-hover:text-primary transition-colors duration-300">
                                                {localizedName}
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex flex-col gap-1 p-2.5 bg-secondary/20 rounded-2xl border border-border/50 hover:bg-secondary/40 transition-colors">
                                            <div className="flex items-center gap-1.5 text-[10px] uppercase font-black text-muted-foreground/60 tracking-wider">
                                                <MapPin className="w-3 h-3" />
                                                {t.directory.card.capital}
                                            </div>
                                            <span className="text-xs font-bold text-foreground truncate">{state.capital}</span>
                                        </div>
                                        <div className="flex flex-col gap-1 p-2.5 bg-secondary/20 rounded-2xl border border-border/50 hover:bg-secondary/40 transition-colors">
                                            <div className="flex items-center gap-1.5 text-[10px] uppercase font-black text-muted-foreground/60 tracking-wider">
                                                <Users className="w-3 h-3" />
                                                {t.directory.card.population}
                                            </div>
                                            <span className="text-xs font-bold text-foreground">{(state.population / 1000000).toFixed(1)}M</span>
                                        </div>
                                        <div className="flex flex-col gap-1 p-2.5 bg-secondary/20 rounded-2xl border border-border/50 hover:bg-secondary/40 transition-colors">
                                            <div className="flex items-center gap-1.5 text-[10px] uppercase font-black text-muted-foreground/60 tracking-wider">
                                                <Maximize2 className="w-3 h-3" />
                                                {t.directory.card.area}
                                            </div>
                                            <span className="text-[10px] font-bold text-foreground">{formatNumber(Math.round(state.area))} km²</span>
                                        </div>
                                        <div className="flex flex-col gap-1 p-2.5 bg-secondary/20 rounded-2xl border border-border/50 hover:bg-secondary/40 transition-colors">
                                            <div className="flex items-center gap-1.5 text-[10px] uppercase font-black text-muted-foreground/60 tracking-wider">
                                                <Clock className="w-3 h-3" />
                                                {t.directory.card.utc}
                                            </div>
                                            <span className="text-xs font-bold text-foreground">{state.utcOffset > 0 ? `+${state.utcOffset}` : state.utcOffset}:00</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 pt-4 border-t border-border/50 flex items-center justify-between text-[10px] font-black tracking-widest text-muted-foreground/40 uppercase">
                                        <span>ISO: {state.iso}</span>
                                        <span className="group-hover:text-primary transition-colors">{state.timezone.split('/')[1].replace('_', ' ')}</span>
                                    </div>
                                </div>

                                <Sheet>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <SheetTrigger asChild>
                                                <button className="absolute top-4 right-4 p-2.5 rounded-2xl bg-background/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-primary-foreground shadow-lg translate-y-2 group-hover:translate-y-0 cursor-pointer">
                                                    <Info className="w-4 h-4" />
                                                </button>
                                            </SheetTrigger>
                                        </TooltipTrigger>
                                        <TooltipContent side="left" className="bg-foreground text-background font-bold text-xs py-2 px-3 rounded-xl border-none shadow-xl">
                                            {t.directory.report.title}
                                        </TooltipContent>
                                    </Tooltip>
                                    <SheetContent side="right" className="w-full sm:max-w-xl border-l border-border/50 bg-background/95 backdrop-blur-xl">
                                        <SheetHeader className="mb-8">
                                            <SheetTitle className="text-sm font-black uppercase tracking-widest text-primary">{t.directory.report.title}</SheetTitle>
                                        </SheetHeader>
                                        <StateDetailReport state={state} locale={currentLocale} flagViewBox={flagViewBox} />
                                    </SheetContent>
                                </Sheet>
                            </div>
                        );
                    })}
                </div>

                {filteredStates.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-32 text-muted-foreground bg-card/30 rounded-[3rem] border border-dashed border-border border-spacing-4">
                        <div className="p-6 bg-secondary/50 rounded-full mb-6">
                            <Info className="w-12 h-12 opacity-20" />
                        </div>
                        <p className="text-xl font-black tracking-tight text-foreground/40 uppercase">{t.directory.noResults}</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedRegion(null); }}
                            className="mt-6 text-primary font-bold hover:underline cursor-pointer"
                        >
                            {t.directory.clearFilters}
                        </button>
                    </div>
                )}
            </div>
        </TooltipProvider>
    );
}
