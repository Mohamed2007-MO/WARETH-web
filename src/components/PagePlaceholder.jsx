import { useLang } from "../context/LangContext";

export default function PagePlaceholder({ titleKey }) {
  const { t } = useLang();
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="font-title text-3xl text-gold">{t.nav[titleKey]}</h1>
      <p className="text-sm text-offwhite/60">{t.placeholder}</p>
    </section>
  );
}