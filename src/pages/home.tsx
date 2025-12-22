import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Code, Globe, Zap, Check } from 'lucide-react';
import { useLanguage } from '../lib/i18n/language-context';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10" />
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 bg-background/50 backdrop-blur font-bold uppercase tracking-widest text-primary border-primary/20 p-2 px-4 rounded-xl shadow-lg">
            {t.hero.tag}
          </Badge>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground uppercase leading-[1.05]">
            {t.hero.title} <br className="hidden md:block" />
            <span className="text-primary italic opacity-80">{t.hero.titleBr}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/demo">
              <Button size="lg" className="w-full sm:w-auto gap-2 rounded-2xl h-14 px-8 font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                {t.hero.exploreBtn}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/docs">
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-2xl h-14 px-8 font-black uppercase tracking-widest text-sm border-2 hover:bg-secondary/50">
                {t.hero.docsBtn}
              </Button>
            </Link>
          </div>

          {/* Installation Snippet */}
          <div className="max-w-md mx-auto bg-card border border-border rounded-3xl p-6 shadow-2xl text-left group hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-60">{t.hero.installLabel}</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors" />
              </div>
            </div>
            <div className="flex items-center gap-4 font-mono text-base">
              <span className="text-primary font-bold animate-pulse">$</span>
              <span className="text-foreground font-black">npm install br-state-flags</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border hover:border-primary/30 transition-all rounded-[2rem] p-4 shadow-sm hover:shadow-xl group">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-3 tracking-tight">{t.features.coverage.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {t.features.coverage.desc}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary/30 transition-all rounded-[2rem] p-4 shadow-sm hover:shadow-xl group">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-3 tracking-tight">{t.features.deps.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {t.features.deps.desc}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary/30 transition-all rounded-[2rem] p-4 shadow-sm hover:shadow-xl group">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Code className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-3 tracking-tight">{t.features.types.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {t.features.types.desc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">{t.features.simple.title}</h2>
                <div className="h-2 w-24 bg-primary rounded-full shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
              </div>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                {t.features.simple.desc}
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {t.features.simple.items.map((item) => (
                  <li key={item} className="flex items-center gap-4 bg-secondary/30 p-4 rounded-2xl border border-border/50">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wide opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-full max-w-2xl">
              <div className="rounded-[2.5rem] border border-border bg-card shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-3 px-6 py-5 border-b border-border bg-muted/30">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/40" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground ml-2 opacity-50">App.tsx</span>
                </div>
                <div className="p-8 overflow-x-auto">
                  <pre className="text-sm md:text-base font-mono leading-relaxed">
                    <span className="text-primary italic">import</span>{' '}
                    <span className="text-foreground font-bold">{`{ SP, RJ, MG }`}</span>{' '}
                    <span className="text-primary italic">from</span>{' '}
                    <span className="text-green-500 font-bold">'br-state-flags'</span>;
                    {'\n\n'}
                    <span className="text-primary italic">export default</span>{' '}
                    <span className="text-blue-500 italic">function</span>{' '}
                    <span className="text-foreground font-black">App</span>() {'{'}
                    {'\n  '}
                    <span className="text-primary italic">return</span> (
                    {'\n    '}
                    <span className="text-foreground opacity-70">{'<div className="flex gap-4">'}</span>
                    {'\n      '}
                    <span className="text-foreground font-bold italic">{'<SP className="w-12 shadow-sm" />'}</span>
                    {'\n      '}
                    <span className="text-foreground font-bold italic">{'<RJ className="w-12 shadow-sm" />'}</span>
                    {'\n      '}
                    <span className="text-foreground font-bold italic">{'<MG className="w-12 shadow-sm" />'}</span>
                    {'\n    '}
                    <span className="text-foreground opacity-70">{'</div>'}</span>
                    {'\n  '}
                    );
                    {'\n}'}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
