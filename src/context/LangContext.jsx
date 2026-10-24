import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../i18n/translations";

const LangContext = createContext(null);
const STORAGE_KEY = "wareeth-lang";

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") return saved;
  } catch {
    /* تجاهل */
  }
  return "ar";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* تجاهل */
    }
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "ar" ? "en" : "ar"));

  const value = {
    lang,
    setLang,
    toggleLang,
    isRTL: lang === "ar",
    t: translations[lang],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}