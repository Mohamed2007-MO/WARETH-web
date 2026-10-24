import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../context/LangContext";

const stages = [
  { to: "/", key: "experience" },
  { to: "/world", key: "world" },
  { to: "/legacy-lives", key: "legacyLives" },
  { to: "/legacy-stone", key: "legacyStone" },
  { to: "/why-warith", key: "whyWarith" },
  { to: "/thought-left-behind", key: "thoughtLeftBehind" },
];

const extras = [
  { to: "/about", key: "about" },
  { to: "/find-experience", key: "findExperience" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const { t, isRTL, toggleLang } = useLang();

  const close = () => setOpen(false);
  const offscreen = isRTL ? "100%" : "-100%";

  const linkClass = ({ isActive }) =>
    `block py-2 font-title text-lg transition-colors hover:text-gold ${
      isActive ? "text-gold" : "text-offwhite"
    }`;

  return (
    <>
      {/* الأزرار العلوية */}
     <div
  className="fixed top-3 z-50 flex items-center gap-2 sm:top-6 sm:gap-3"
  style={{ right: "0.75rem" }}
>
        <button
          onClick={toggleLang}
          aria-label={t.langSwitchLabel}
          className="rounded border border-gold/60 px-3 py-1 text-sm text-gold transition hover:bg-gold/10"
        >
          {t.langSwitch}
        </button>

        <button
          onClick={() => setOpen(true)}
          aria-label={t.menuOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
        >
          <span className="h-[2px] w-6 bg-gold" />
          <span className="h-[2px] w-6 bg-gold" />
          <span className="h-[2px] w-6 bg-gold" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* طبقة معتمة */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />

            {/* القائمة */}
            <motion.aside
              className="fixed top-0 z-50 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto border-gold/30 bg-navy-deep px-8 py-6"
              style={
                isRTL
                  ? { right: 0, borderLeftWidth: 1 }
                  : { left: 0, borderRightWidth: 1 }
              }
              initial={{ x: offscreen }}
              animate={{ x: 0 }}
              exit={{ x: offscreen }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <button
                onClick={close}
                aria-label={t.menuClose}
                className="self-end text-3xl leading-none text-gold"
              >
                ×
              </button>

              <nav className="mt-6 flex-1">
                {stages.map((s, i) => (
                  <NavLink key={s.to} to={s.to} end onClick={close} className={linkClass}>
                    <span className="me-3 text-sm text-gold/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {t.nav[s.key]}
                  </NavLink>
                ))}

                <hr className="my-6 border-gold/20" />

                {extras.map((e) => (
                  <NavLink key={e.to} to={e.to} onClick={close} className={linkClass}>
                    {t.nav[e.key]}
                  </NavLink>
                ))}

                <button
                  onClick={() => setMuted((m) => !m)}
                  className="block py-2 font-title text-lg text-offwhite transition-colors hover:text-gold"
                >
                  {t.nav.sound}: {muted ? "✕" : "♪"}
                </button>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}