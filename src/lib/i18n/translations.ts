export const translations = {
    en: {
        nav: {
            home: "Home",
            demo: "Demo",
            docs: "Docs",
            business: "Enterprise",
        },
        hero: {
            tag: "v1.0.0 Release",
            title: "Brazilian State Flags Library",
            titleBr: "Optimized for React",
            subtitle:
                "A production‑ready, fully typed collection of high‑fidelity SVG flags for all 27 Brazilian states. Lightweight, dependency‑free, and engineered for modern React workflows.",
            exploreBtn: "Open Interactive Demo",
            docsBtn: "Browse Documentation",
            installLabel: "Install Package",
        },
        features: {
            coverage: {
                title: "Full State Coverage",
                desc: "Includes official flags for all 26 states plus the Federal District, with accurate colors and aspect ratios.",
            },
            deps: {
                title: "Dependency‑Free Architecture",
                desc: "Extremely lightweight with no external dependencies. Optimized SVGs ensure minimal bundle impact.",
            },
            types: {
                title: "First‑Class TypeScript Support",
                desc: "Built with TypeScript for an exceptional developer experience. Full type definitions included.",
            },
            simple: {
                title: "Effortless Integration",
                desc: "Import the flags you need and use them as standard React components. Fully compatible with all SVG props and styling systems.",
                items: [
                    "Tree‑shakeable exports",
                    "Scalable vector graphics",
                    "Customizable via props",
                    "Accessible by default",
                ],
            },
        },
        directory: {
            title: "FLAG EXPLORER",
            subtitle:
                "Browse {count} Brazilian state flags with multilingual support and enriched metadata",
            searchPlaceholder: "Search states...",
            allRegions: "All Regions",
            noResults: "No matching states found",
            clearFilters: "Reset Filters",
            card: {
                capital: "Capital",
                population: "Population",
                area: "Area",
                utc: "UTC",
            },
            report: {
                title: "State Data Overview",
                identity: "Administrative Identity",
                city: "Capital City",
                iso: "ISO Code",
                demographics: "Population & Territory",
                resident: "Resident Population",
                territorial: "Territorial Area",
                global: "Global Context",
                time: "Time Zone Information",
                coordinates: "Coordinates",
                explore: "Open Regional Dataset",
            },
        },
        docs: {
            title: "Documentation",
            subtitle: "Learn how to use the BR States Flags package",
            install: {
                title: "Installation",
                sub: "Get started with the package",
                desc: "The package is available via npm. Install it in your React project to get access to all 27 Brazilian state flags.",
            },
            usage: {
                title: "Basic Usage",
                sub: "How to use flags in your components",
                importLabel: "Import a state flag:",
                codesLabel: "Available state codes:",
            },
            featuresList: {
                title: "Features",
                sub: "What makes this package great",
                items: [
                    { t: "27 Brazilian States", d: "Complete coverage of all Brazilian states with official flags" },
                    { t: "SVG Format", d: "Scalable vector graphics that look great at any size" },
                    { t: "Easy to Use", d: "Simple imports, no configuration needed" },
                    { t: "TypeScript Support", d: "Full type definitions for better developer experience" },
                    { t: "Lightweight", d: "Minimal bundle size impact on your project" }
                ]
            },
            v2: {
                badge: "v2.0 New",
                title: "International & Extended Data",
                sub: "Support for multilang and geographical metadata",
                l10n: "1. Localization Utilities:",
                locales: "Available locales: en, pt-BR, fi (Finnish).",
                geo: "2. Extended Geographical Data:",
                geoDesc: "Access rich metadata via statesData:",
                keys: {
                    population: "State population (2022 census)",
                    area: "Total area in km²",
                    timezone: "IANA timezone name",
                    utcOffset: "UTC offset in hours",
                    iso: "ISO 3166-2 code (e.g. BR-SP)"
                }
            },
            api: {
                title: "API Reference",
                sub: "Component props and utility functions",
                utils: "Utility Functions:",
                getDesc: "Returns all metadata for a state, with localized names.",
                allDesc: "Returns an array of all 27 state codes."
            },
            examples: {
                title: "Examples",
                sub: "Common use cases and patterns",
                size: "Display with custom size:",
                dynamic: "Dynamic flag selection:",
                list: "In a list:"
            },
            support: {
                title: "Support",
                sub: "Need help?",
                text: "Found a bug or have a feature request? Check out the GitHub repository to contribute or open an issue.",
                oss: "This package is open source and free to use in any project."
            }
        },
        enterprise: {
            badge: "Business & International",
            title: "Enterprise Solutions",
            subtitle: "Showcasing how br-state-flags powers international dashboards, logistics, and e-commerce integrations with native support for English, Portuguese, and Finnish.",
            dashboard: {
                title: "Logistics Overview",
                sub: "Multi-national operational monitoring",
                company: "Entity Name",
                hubs: "Active Operational Hubs",
                market: "Market Reach",
                marketDesc: "Full coverage across all 27 federal units with localized synchronization.",
                precision: "Data Architecture",
                accuracy: "Coordinate Accuracy",
                svg: "SVG Optimization",
                lang: "Native Locales"
            },
            timezone: {
                title: "Global Timezone Sync",
                footer: "Package provides native utcOffset and timezone strings for automated synchronization."
            },
            analytics: {
                title: "Regional Growth",
                hubs: "Shipments / Hub",
                regions: {
                    north: "North",
                    northeast: "Northeast",
                    center: "Center-West",
                    southeast: "Southeast",
                    south: "South"
                }
            },
            useCases: {
                title: "Industrial Applications",
                sub: "Reliable data for complex business requirements.",
                items: [
                    { t: "E-commerce", d: "Calculate shipping rates based on state area and distance from HQ. Automatically localize checkout forms." },
                    { t: "Government", d: "Official ISO codes (BR-XX) for fiscal reporting and compliance in all 27 federal units." },
                    { t: "Global Travel", d: "Help international travelers navigate timezones and state boundaries with precise geographical data." }
                ]
            }
        }
    },

    "pt-BR": {
        nav: {
            home: "Home",
            demo: "Interativa",
            docs: "Documentação",
            business: "Enterprise",
        },
        hero: {
            tag: "v1.0.0 Lançada",
            title: "Biblioteca de Bandeiras Estaduais",
            titleBr: "Otimizada para React",
            subtitle:
                "Coleção tipada, leve e sem dependências de bandeiras SVG de alta fidelidade para os 27 estados brasileiros. Ideal para aplicações modernas e pronta para produção.",
            exploreBtn: "Abrir Demo Interativa",
            docsBtn: "Acessar Documentação",
            installLabel: "Instalação do Pacote",
        },
        features: {
            coverage: {
                title: "Cobertura Total dos Estados",
                desc: "Inclui bandeiras oficiais dos 26 estados e do Distrito Federal, com cores e proporções precisas.",
            },
            deps: {
                title: "Arquitetura Sem Dependências",
                desc: "Extremamente leve e otimizada, sem dependências externas. SVGs refinados para máximo desempenho.",
            },
            types: {
                title: "Suporte Avançado a TypeScript",
                desc: "Construído com TypeScript para uma experiência de desenvolvimento superior. Tipos completos incluídos.",
            },
            simple: {
                title: "Integração Simplificada",
                desc: "Importe as bandeiras necessárias e utilize-as como componentes React padrão. Compatível com todas as propriedades SVG.",
                items: [
                    "Exportações tree‑shakeable",
                    "Gráficos vetoriais escaláveis",
                    "Customizável via props",
                    "Acessível por padrão",
                ],
            },
        },
        directory: {
            title: "EXPLORADOR DE BANDEIRAS",
            subtitle:
                "Navegue por {count} bandeiras estaduais com suporte multilíngue e dados enriquecidos",
            searchPlaceholder: "Pesquisar estados...",
            allRegions: "Todas as Regiões",
            noResults: "Nenhum estado encontrado",
            clearFilters: "Redefinir Filtros",
            card: {
                capital: "Capital",
                population: "População",
                area: "Área",
                utc: "UTC",
            },
            report: {
                title: "Visão Geral do Estado",
                identity: "Identidade Administrativa",
                city: "Capital",
                iso: "Código ISO",
                demographics: "População e Território",
                resident: "População Residente",
                territorial: "Área Territorial",
                global: "Contexto Global",
                time: "Informações de Fuso Horário",
                coordinates: "Coordenadas",
                explore: "Abrir Dados Regionais",
            },
        },
        docs: {
            title: "Documentação",
            subtitle: "Aprenda como usar o pacote BR States Flags",
            install: {
                title: "Instalação",
                sub: "Comece com o pacote",
                desc: "O pacote está disponível via npm. Instale-o em seu projeto React para ter acesso a todas as 27 bandeiras estaduais brasileiras.",
            },
            usage: {
                title: "Uso Básico",
                sub: "Como usar bandeiras em seus componentes",
                importLabel: "Importar uma bandeira estadual:",
                codesLabel: "Códigos de estado disponíveis:",
            },
            featuresList: {
                title: "Funcionalidades",
                sub: "O que torna este pacote excelente",
                items: [
                    { t: "27 Estados Brasileiros", d: "Cobertura completa de todos os estados brasileiros com bandeiras oficiais" },
                    { t: "Formato SVG", d: "Gráficos vetoriais escaláveis que ficam ótimos em qualquer tamanho" },
                    { t: "Fácil de Usar", d: "Importações simples, sem necessidade de configuração" },
                    { t: "Suporte a TypeScript", d: "Definições de tipo completas para melhor experiência do desenvolvedor" },
                    { t: "Leve", d: "Mínimo impacto no tamanho do bundle do seu projeto" }
                ]
            },
            v2: {
                badge: "Novo v2.0",
                title: "Dados Internacionais e Estendidos",
                sub: "Suporte para multilinguagem e metadados geográficos",
                l10n: "1. Utilitários de Localização:",
                locales: "Locais disponíveis: en, pt-BR, fi (Finlandês).",
                geo: "2. Dados Geográficos Estendidos:",
                geoDesc: "Acesse metadados ricos via statesData:",
                keys: {
                    population: "População estadual (censo 2022)",
                    area: "Área total em km²",
                    timezone: "Nome do fuso horário IANA",
                    utcOffset: "Deslocamento UTC em horas",
                    iso: "Código ISO 3166-2 (ex: BR-SP)"
                }
            },
            api: {
                title: "Referência da API",
                sub: "Propriedades do componente e funções utilitárias",
                utils: "Funções Utilitárias:",
                getDesc: "Retorna todos os metadados de um estado, com nomes localizados.",
                allDesc: "Retorna um array com todos os 27 códigos de estado."
            },
            examples: {
                title: "Exemplos",
                sub: "Casos de uso comuns e padrões",
                size: "Exibir com tamanho personalizado:",
                dynamic: "Seleção dinâmica de bandeira:",
                list: "Em uma lista:"
            },
            support: {
                title: "Suporte",
                sub: "Precisa de ajuda?",
                text: "Encontrou um erro ou tem uma sugestão? Confira o repositório no GitHub para contribuir ou abrir um chamado.",
                oss: "Este pacote é de código aberto e gratuito para uso em qualquer projeto."
            }
        },
        enterprise: {
            badge: "Negócios e Internacional",
            title: "Soluções Corporativas",
            subtitle: "Demonstrando como o br-state-flags potencializa dashboards internacionais, logística e integrações de e-commerce com suporte nativo para Inglês, Português e Finlandês.",
            dashboard: {
                title: "Visão Geral Logística",
                sub: "Monitoramento operacional multinacional",
                company: "Nome da Entidade",
                hubs: "Hubs Operacionais Ativos",
                market: "Alcance de Mercado",
                marketDesc: "Cobertura total em todas as 27 unidades federativas com sincronização localizada.",
                precision: "Arquitetura de Dados",
                accuracy: "Precisão de Coordenadas",
                svg: "Otimização SVG",
                lang: "Locais Nativos"
            },
            timezone: {
                title: "Sincronização de Fuso Horário Global",
                footer: "O pacote fornece strings nativas de utcOffset e fuso horário para sincronização automatizada."
            },
            analytics: {
                title: "Crescimento Regional",
                hubs: "Remessas / Hub",
                regions: {
                    north: "Norte",
                    northeast: "Nordeste",
                    center: "Centro-Oeste",
                    southeast: "Sudeste",
                    south: "Sul"
                }
            },
            useCases: {
                title: "Aplicações Industriais",
                sub: "Dados confiáveis para requisitos de negócios complexos.",
                items: [
                    { t: "E-commerce", d: "Calcule taxas de envio com base na área do estado e distância da sede. Localize formulários de checkout automaticamente." },
                    { t: "Governo", d: "Códigos ISO oficiais (BR-XX) para relatórios fiscais e conformidade em todas as 27 unidades federais." },
                    { t: "Viagens Globais", d: "Ajude viajantes internacionais a navegar em fuso horários e fronteiras estaduais com dados geográficos precisos." }
                ]
            }
        }
    },

    fi: {
        nav: {
            home: "Etusivu",
            demo: "Demo",
            docs: "Dokumentaatio",
            business: "Enterprise",
        },
        hero: {
            tag: "v1.0.0 Julkaistu",
            title: "Brasilian Osavaltiolippujen Kirjasto",
            titleBr: "Optimoitu React‑sovelluksiin",
            subtitle:
                "Kevyt, riippuvuudeton ja täysin tyypitetty SVG‑lippukokoelma kaikille 27 Brasilian osavaltiolle. Suunniteltu tuotantokäyttöön ja moderneihin React‑projekteihin.",
            exploreBtn: "Avaa Interaktiivinen Demo",
            docsBtn: "Siirry Dokumentaatioon",
            installLabel: "Asenna Paketti",
        },
        features: {
            coverage: {
                title: "Kattava Osavaltiotuki",
                desc: "Sisältää viralliset liput kaikille 26 osavaltiolle sekä liittovaltion piirille, tarkoin värein ja mittasuhtein.",
            },
            deps: {
                title: "Riippuvuudeton Rakenne",
                desc: "Erittäin kevyt toteutus ilman ulkoisia riippuvuuksia. Optimoidut SVG‑tiedostot minimoivat paketin koon.",
            },
            types: {
                title: "Ensiluokkainen TypeScript‑tuki",
                desc: "Rakennettu TypeScriptillä sujuvaa kehittäjäkokemusta varten. Täydet tyyppimääritykset sisältyvät.",
            },
            simple: {
                title: "Helppo Integrointi",
                desc: "Tuo tarvitsemasi liput ja käytä niitä tavallisina React‑komponentteina. Täysi tuki kaikille SVG‑ominaisuuksille.",
                items: [
                    "Tree‑shakeable‑viennit",
                    "Skaalautuva vektorigrafiikka",
                    "Muokattavissa propseilla",
                    "Saavutettava oletuksena",
                ],
            },
        },
        directory: {
            title: "LIPPUSELAIN",
            subtitle:
                "Selaa {count} Brasilian osavaltiolippua monikielisellä tuella ja rikastetuilla metatiedoilla",
            searchPlaceholder: "Hae osavaltioita...",
            allRegions: "Kaikki alueet",
            noResults: "Ei hakutuloksia",
            clearFilters: "Nollaa Suodattimet",
            card: {
                capital: "Pääkaupunki",
                population: "Väkiluku",
                area: "Pinta‑ala",
                utc: "UTC",
            },
            report: {
                title: "Osavaltion Tietokooste",
                identity: "Hallinnollinen Identiteetti",
                city: "Pääkaupunki",
                iso: "ISO‑koodi",
                demographics: "Väestö ja Alue",
                resident: "Väkiluku",
                territorial: "Maantieteellinen Alue",
                global: "Globaali Konteksti",
                time: "Aikavyöhyketiedot",
                coordinates: "Koordinaatit",
                explore: "Avaa Aluetiedot",
            },
        },
        docs: {
            title: "Dokumentaatio",
            subtitle: "Opi käyttämään BR States Flags -pakettia",
            install: {
                title: "Asennus",
                sub: "Aloita paketin käyttö",
                desc: "Paketti on saatavilla npm-palvelun kautta. Asenna se React-projektiisi saadaksesi pääsyn kaikkiin 27 Brasilian osavaltiolippuun.",
            },
            usage: {
                title: "Peruskäyttö",
                sub: "Miten käytät lippuja komponenteissasi",
                importLabel: "Tuo osavaltion lippu:",
                codesLabel: "Saatavilla olevat osavaltiokoodit:",
            },
            featuresList: {
                title: "Ominaisuudet",
                sub: "Mikä tekee tästä paketista loistavan",
                items: [
                    { t: "27 Brasilian osavaltiota", d: "Kaikkien 26 osavaltion ja liittovaltion piirin viralliset liput" },
                    { t: "SVG-muoto", d: "Skaalautuva vektorigrafiikka, joka näyttää hyvältä missä koossa tahansa" },
                    { t: "Helppokäyttöinen", d: "Yksinkertaiset tuonnit, ei vaadi konfigurointia" },
                    { t: "TypeScript-tuki", d: "Täydet tyyppimääritykset parempaa kehittäjäkokemusta varten" },
                    { t: "Kevyt", d: "Minimaalinen vaikutus projektisi pakettikokoon" }
                ]
            },
            v2: {
                badge: "v2.0 Uutta",
                title: "Kansainvälinen ja laajennettu data",
                sub: "Tuki monikielisyydelle ja maantieteellisille metatiedoille",
                l10n: "1. Lokalisointityökalut:",
                locales: "Saatavilla olevat aluekoodit: en, pt-BR, fi (Suomi).",
                geo: "2. Laajennettu maantieteellinen data:",
                geoDesc: "Pääsy rikkaisiin metatietoihin statesData:n kautta:",
                keys: {
                    population: "Osavaltion väkiluku (vuoden 2022 väestönlaskenta)",
                    area: "Kokonaispinta-ala km²",
                    timezone: "IANA-aikavyöhykkeen nimi",
                    utcOffset: "UTC-erotus tunteina",
                    iso: "ISO 3166-2 -koodi (esim. BR-SP)"
                }
            },
            api: {
                title: "API-viite",
                sub: "Komponentin propsit ja työkalufunktiot",
                utils: "Työkalufunktiot:",
                getDesc: "Palauttaa osavaltion kaikki metatiedot lokalisoiduilla nimillä.",
                allDesc: "Palauttaa taulukon kaikista 27 osavaltiokoodista."
            },
            examples: {
                title: "Esimerkit",
                sub: "Yleiset käyttötapaukset ja mallit",
                size: "Näytä mukautetulla koolla:",
                dynamic: "Dynaaminen lipun valinta:",
                list: "Listassa:"
            },
            support: {
                title: "Tuki",
                sub: "Tarvitsetko apua?",
                text: "Löysitkö virheen tai onko sinulla ominaisuuspyyntö? Käy GitHub-arkistossa osallistuaksesi tai avataksesi vikailmoituksen.",
                oss: "Tämä paketti on avointa lähdekoodia ja vapaasti käytettävissä missä tahansa projektissa."
            }
        },
        enterprise: {
            badge: "Liiketoiminta ja kansainvälisyys",
            title: "Yritysratkaisut",
            subtitle: "Näyttää, kuinka br-state-flags tukee kansainvälisiä hallintapaneeleja, logistiikkaa ja verkkokauppaintegraatioita natiivilla tuella englannille, portugalille ja suomelle.",
            dashboard: {
                title: "Logistiikan yleisnäkymä",
                sub: "Kansainvälinen toiminnan seuranta",
                company: "Yksikön nimi",
                hubs: "Aktiiviset toimintakeskukset",
                market: "Markkinoiden kattavuus",
                marketDesc: "Täysi kattavuus kaikissa 27 liittovaltion yksikössä lokalisoidulla synkronoinnilla.",
                precision: "Data-arkkitehtuuri",
                accuracy: "Koordinaattien tarkkuus",
                svg: "SVG-optimointi",
                lang: "Natiivit alueet"
            },
            timezone: {
                title: "Globaali aikavyöhykkeen synkronointi",
                footer: "Paketti tarjoaa natiivit utcOffset- ja aikavyöhykemerkkijonot automaattista synkronointia varten."
            },
            analytics: {
                title: "Alueellinen kasvu",
                hubs: "Lähetykset / Keskus",
                regions: {
                    north: "Pohjoinen",
                    northeast: "Koillinen",
                    center: "Keski-Länsi",
                    southeast: "Kaakko",
                    south: "Etelä"
                }
            },
            useCases: {
                title: "Teolliset sovellukset",
                sub: "Luotettavaa dataa monimutkaisiin liiketoimintavaatimuksiin.",
                items: [
                    { t: "Verkkokauppa", d: "Laske toimituskulut osavaltion pinta-alan ja pääkonttorin etäisyyden perusteella. Lokalisoi kassan lomakkeet automaattisesti." },
                    { t: "Hallinto", d: "Viralliset ISO-koodit (BR-XX) veroraportointiin ja vaatimustenmukaisuuteen kaikissa 27 liittovaltion yksikössä." },
                    { t: "Kansainvälinen matkailu", d: "Auta kansainvälisiä matkailijoita navigoimaan aikavyöhykkeiden ja osavaltioiden rajojen välillä tarkalla maantieteellisellä datalla." }
                ]
            }
        }
    }
};

export type TranslationKeys = typeof translations.en;
