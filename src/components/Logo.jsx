import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import logoAr from "../assets/logo-full.png";
import logoEn from "../assets/logo-full-en.png";

const LOGOS = { ar: logoAr, en: logoEn };

export default function Logo() {
  const { t, lang } = useLang();

  return (
    <Link
      to="/"
      aria-label={t.logoAlt}
      className="fixed left-2 top-1 z-50 h-16 sm:left-4 sm:top-2 sm:h-24"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={lang}
          src={LOGOS[lang]}
          alt={t.logoAlt}
          className="h-full w-auto object-contain drop-shadow-[0_0_10px_rgba(216,170,74,0.35)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>
    </Link>
  );
}