import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/home';
import DemoPage from './pages/demo';
import DocsPage from './pages/docs';
import BusinessExamples from './pages/business-examples.tsx';
import { ThemeProvider } from './lib/theme-provider';
import { LanguageProvider } from './lib/i18n/language-context';
import { injectSchema } from './lib/seo';

export default function App() {
  useEffect(() => {
    // Inject JSON-LD schema for SEO
    injectSchema();
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/business-examples" element={<BusinessExamples />} />
              </Routes>
            </div>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
