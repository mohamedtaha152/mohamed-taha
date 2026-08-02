"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Language } from "@/lib/translations";

type Translation = (typeof translations)[Language];

type LanguageContextType = {
  lang: Language;
  dir: "ltr" | "rtl";
  t: Translation;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-lang") as Language | null;
    if (stored && (stored === "en" || stored === "ar")) {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "en" ? "ar" : "en";
      localStorage.setItem("portfolio-lang", next);
      return next;
    });
  }, []);

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        dir,
        t: translations[lang],
        setLang,
        toggleLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}