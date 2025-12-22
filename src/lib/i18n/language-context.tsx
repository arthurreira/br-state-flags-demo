import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Locale } from 'br-state-flags';
import { translations } from './translations';
import type { TranslationKeys } from './translations';

type LanguageContextType = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [locale, setLocale] = useState<Locale>(() => {
        const saved = localStorage.getItem('app-locale');
        return (saved as Locale) || 'en';
    });

    useEffect(() => {
        localStorage.setItem('app-locale', locale);
        document.documentElement.lang = locale;
    }, [locale]);

    const t = translations[locale];

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
