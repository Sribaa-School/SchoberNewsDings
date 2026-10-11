import { create } from "zustand";
import type { Category, Language } from "../types/news";

export interface Texts {
  appTitle: string;
  navNews: string;
  navCategories: string;
  search: string;
  allSources: string;
  articleCount: string;
  category: string;
  amount: string;
  switchTo: string;
  author: string;
  loading: string;
  noResults: string;
  error: string;
  noApiKey: string;
  scrollTop: string;
  categories: Record<Category, string>;
}

export const translations: Record<Language, Texts> = {
  de: {
    appTitle: "News App",
    navNews: "News",
    navCategories: "Kategorien",
    search: "Suchen",
    allSources: "Alle",
    articleCount: "Anzahl Artikel",
    category: "Kategorie",
    amount: "Anzahl",
    switchTo: "Wechsel zu Englisch",
    author: "Quelle",
    loading: "Lade Artikel …",
    noResults: "Keine Artikel gefunden.",
    error: "Die Artikel konnten nicht geladen werden.",
    noApiKey: "Kein API Key gefunden. Lege eine .env Datei mit VITE_GNEWS_API_KEY an.",
    scrollTop: "Nach oben",
    categories: {
      general: "Allgemein",
      world: "Welt",
      nation: "Nation",
      business: "Wirtschaft",
      technology: "Technologie",
      sports: "Sport",
      science: "Wissenschaft",
      health: "Gesundheit",
      entertainment: "Unterhaltung",
    },
  },
  en: {
    appTitle: "News App",
    navNews: "News",
    navCategories: "Categories",
    search: "Search",
    allSources: "All",
    articleCount: "Article count",
    category: "Category",
    amount: "Amount",
    switchTo: "Switch to German",
    author: "Source",
    loading: "Loading articles …",
    noResults: "No articles found.",
    error: "Articles could not be loaded.",
    noApiKey: "No API key found. Create a .env file with VITE_GNEWS_API_KEY.",
    scrollTop: "Back to top",
    categories: {
      general: "General",
      world: "World",
      nation: "Nation",
      business: "Business",
      technology: "Technology",
      sports: "Sports",
      science: "Science",
      health: "Health",
      entertainment: "Entertainment",
    },
  },
};

interface LanguageState {
  language: Language;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "de",
  toggleLanguage: () =>
    set((state) => ({ language: state.language === "de" ? "en" : "de" })),
}));

export const useTexts = (): Texts => {
  const language = useLanguageStore((s) => s.language);
  return translations[language];
};
