import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { useLanguage } from '../lib/i18n/language-context';

export default function DocsPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
                {/* Header */}
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold">{t.docs.title}</h1>
                    <p className="text-xl text-muted-foreground">
                        {t.docs.subtitle}
                    </p>
                </div>

                {/* Installation */}
                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle>{t.docs.install.title}</CardTitle>
                        <CardDescription>{t.docs.install.sub}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-muted rounded-lg p-4 border border-border">
                            <code className="text-primary font-bold text-sm">npm install br-state-flags</code>
                        </div>
                        <p className="text-foreground">
                            {t.docs.install.desc}
                        </p>
                    </CardContent>
                </Card>

                {/* Usage */}
                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle>{t.docs.usage.title}</CardTitle>
                        <CardDescription>{t.docs.usage.sub}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <h4 className="font-semibold text-foreground">{t.docs.usage.importLabel}</h4>
                            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
                                <pre className="text-foreground text-sm font-mono">
                                    {`import * as Flags from 'br-state-flags';

// Usage
<Flags.SP /> // São Paulo flag`}
                                </pre>
                            </div>
                        </div>

                        <Separator className="bg-border" />

                        <div className="space-y-2">
                            <h4 className="font-semibold text-foreground">{t.docs.usage.codesLabel}</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'].map(code => (
                                    <Badge key={code} variant="outline" className="bg-secondary/20 text-secondary-foreground border-secondary/50 hover:bg-secondary/30 transition-colors justify-center">
                                        {code}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Features */}
                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle>{t.docs.featuresList.title}</CardTitle>
                        <CardDescription>{t.docs.featuresList.sub}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {t.docs.featuresList.items.map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="text-primary font-bold">✓</span>
                                    <div>
                                        <h4 className="font-semibold">{item.t}</h4>
                                        <p className="text-sm text-muted-foreground">{item.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* New Features: i18n & Data */}
                <Card className="bg-card border-border border-primary/20 shadow-lg shadow-primary/5">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Badge variant="default" className="bg-primary hover:bg-primary">{t.docs.v2.badge}</Badge>
                            {t.docs.v2.title}
                        </CardTitle>
                        <CardDescription>{t.docs.v2.sub}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">{t.docs.v2.l10n}</h4>
                            <p className="text-sm text-muted-foreground">{t.docs.v2.locales}</p>
                            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
                                <pre className="text-foreground text-sm font-mono">
                                    {`import { getStateName, getRegionName } from 'br-state-flags';

const name = getStateName('SP', 'fi'); // "São Paulo"
const region = getRegionName('North', 'pt-BR'); // "Norte"`}
                                </pre>
                            </div>
                        </div>

                        <Separator className="bg-border" />

                        <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">{t.docs.v2.geo}</h4>
                            <p className="text-sm text-muted-foreground">{t.docs.v2.geoDesc}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {[
                                    { k: 'population', d: t.docs.v2.keys.population },
                                    { k: 'area', d: t.docs.v2.keys.area },
                                    { k: 'timezone', d: t.docs.v2.keys.timezone },
                                    { k: 'utcOffset', d: t.docs.v2.keys.utcOffset },
                                    { k: 'iso', d: t.docs.v2.keys.iso }
                                ].map(item => (
                                    <div key={item.k} className="p-3 bg-secondary/20 rounded-xl border border-border/50">
                                        <code className="text-xs font-black text-primary uppercase">{item.k}</code>
                                        <p className="text-[11px] text-muted-foreground mt-0.5">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* API Reference */}
                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle>{t.docs.api.title}</CardTitle>
                        <CardDescription>{t.docs.api.sub}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">{t.docs.api.utils}</h4>
                            <div className="space-y-2">
                                <div className="bg-muted rounded-lg p-3 border border-border">
                                    <p className="text-foreground text-sm">
                                        <span className="text-primary font-bold">getStateData(uf: BRStateUF, locale?: Locale)</span>
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">{t.docs.api.getDesc}</p>
                                </div>
                                <div className="bg-muted rounded-lg p-3 border border-border">
                                    <p className="text-foreground text-sm">
                                        <span className="text-primary font-bold">getAllStateUFs()</span>
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">{t.docs.api.allDesc}</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Examples */}
                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle>{t.docs.examples.title}</CardTitle>
                        <CardDescription>{t.docs.examples.sub}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <h4 className="font-semibold text-foreground">{t.docs.examples.size}</h4>
                            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
                                <pre className="text-foreground text-sm font-mono">
                                    {`<Flags.SP 
  style={{ 
    width: '100px', 
    height: '60px' 
  }} 
/>`}
                                </pre>
                            </div>
                        </div>

                        <Separator className="bg-border" />

                        <div className="space-y-2">
                            <h4 className="font-semibold text-foreground">{t.docs.examples.dynamic}</h4>
                            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
                                <pre className="text-foreground text-sm font-mono">
                                    {`const stateCode = 'SP';
const FlagComponent = Flags[stateCode];

return <FlagComponent style={{ width: '50px' }} />`}
                                </pre>
                            </div>
                        </div>

                        <Separator className="bg-border" />

                        <div className="space-y-2">
                            <h4 className="font-semibold text-foreground">{t.docs.examples.list}</h4>
                            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
                                <pre className="text-foreground text-sm font-mono">
                                    {`const states = ['SP', 'RJ', 'MG'];

return (
  <div className="flex gap-2">
    {states.map(code => {
      const Flag = Flags[code];
      return <Flag key={code} style={{ width: '40px' }} />;
    })}
  </div>
)`}
                                </pre>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Support */}
                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle>{t.docs.support.title}</CardTitle>
                        <CardDescription>{t.docs.support.sub}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p className="text-foreground">
                            {t.docs.support.text.split('GitHub repository')[0]}
                            <a href="https://github.com" className="text-primary hover:text-primary/80">
                                GitHub repository
                            </a>
                            {t.docs.support.text.split('GitHub repository')[1]}
                        </p>
                        <p className="text-muted-foreground text-sm">
                            {t.docs.support.oss}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
