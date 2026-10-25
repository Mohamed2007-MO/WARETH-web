import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export const GATE_DURATION = 2.6;

const ticks = Array.from({ length: 48 }, (_, i) => i);

export default function TimeGate({ onDone }) {
  useEffect(() => {
    document.documentElement.classList.add("gate-active");
    return () => document.documentElement.classList.remove("gate-active");
  }, []);

  const dust = useMemo(
    () =>
      Array.from({ length: 24 }, () => ({
        left: Math.random() * 100,
        top: 40 + Math.random() * 60,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 0.9,
        rise: 80 + Math.random() * 220,
      })),
    []
  );

  const T = { duration: GATE_DURATION, ease: "easeInOut" };

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ ...T, times: [0, 0.12, 0.84, 1] }}
      onAnimationComplete={onDone}
    >
      <div className="absolute inset-0 bg-navy-night" />

      <motion.div
        className="absolute h-[150vmax] w-[150vmax] will-change-transform"
        style={{
          background:
            "repeating-conic-gradient(from 0deg, rgba(244,210,123,0.22) 0deg 4deg, transparent 4deg 14deg)",
          WebkitMaskImage:
            "radial-gradient(circle, #000 0%, rgba(0,0,0,0.6) 8%, transparent 22%)",
          maskImage:
            "radial-gradient(circle, #000 0%, rgba(0,0,0,0.6) 8%, transparent 22%)",
        }}
        initial={{ rotate: 0, scale: 0.4, opacity: 0 }}
        animate={{ rotate: 90, scale: [0.4, 1, 1.6], opacity: [0, 0.9, 0] }}
        transition={{ ...T, times: [0, 0.5, 1] }}
      />

      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: "70vmin",
          height: "70vmin",
          background:
            "radial-gradient(circle, rgba(244,210,123,0.5) 0%, rgba(216,170,74,0.15) 40%, transparent 70%)",
        }}
        animate={{ scale: [0.3, 1, 1.2, 9], opacity: [0, 1, 1, 0] }}
        transition={{ ...T, times: [0, 0.35, 0.7, 1] }}
      />

      <motion.svg
        viewBox="0 0 400 400"
        className="absolute h-[88vmin] w-[88vmin] will-change-transform"
        animate={{ scale: [0.5, 1, 1.05, 3], opacity: [0, 1, 1, 0] }}
        transition={{ ...T, times: [0, 0.3, 0.7, 1] }}
      >
        <defs>
          <linearGradient id="ringGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F4D27B" />
            <stop offset="100%" stopColor="#B8902B" />
          </linearGradient>
        </defs>

        <motion.g
          style={{ originX: "200px", originY: "200px" }}
          animate={{ rotate: 120 }}
          transition={{ duration: GATE_DURATION, ease: "linear" }}
        >
          <circle cx="200" cy="200" r="190" fill="none" stroke="url(#ringGold)" strokeWidth="2" />
          <circle cx="200" cy="200" r="178" fill="none" stroke="url(#ringGold)" strokeWidth="0.8" strokeDasharray="2 6" />
          {ticks.map((i) => (
            <g key={i} transform={`rotate(${(i * 360) / ticks.length} 200 200)`}>
              {i % 4 === 0 ? (
                <path d="M200 6 L206 16 L200 26 L194 16 Z" fill="url(#ringGold)" />
              ) : (
                <rect x="199" y="8" width="2" height="9" fill="url(#ringGold)" opacity="0.7" />
              )}
            </g>
          ))}
        </motion.g>

        <motion.g
          style={{ originX: "200px", originY: "200px" }}
          animate={{ rotate: -160 }}
          transition={{ duration: GATE_DURATION, ease: "linear" }}
        >
          <circle cx="200" cy="200" r="150" fill="none" stroke="url(#ringGold)" strokeWidth="3" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="url(#ringGold)" strokeWidth="1" strokeDasharray="14 8" />
          {Array.from({ length: 12 }, (_, i) => (
            <g key={i} transform={`rotate(${i * 30} 200 200)`}>
              <path d="M200 44 L210 58 L200 72 L190 58 Z" fill="none" stroke="url(#ringGold)" strokeWidth="1.5" />
            </g>
          ))}
        </motion.g>
      </motion.svg>

      <motion.div
        className="relative h-[52vmin] w-[34vmin] overflow-hidden"
        style={{
          borderRadius: "17vmin 17vmin 0 0",
          border: "3px solid #D8AA4A",
          boxShadow: "0 0 40px rgba(216,170,74,0.55), inset 0 0 30px rgba(0,0,0,0.8)",
          willChange: "transform, opacity",
        }}
        animate={{ scale: [0.7, 1, 1.05, 1.4, 10], opacity: [0, 1, 1, 1, 0] }}
        transition={{ ...T, times: [0, 0.2, 0.5, 0.72, 1] }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 70%, #FFF6D0 0%, #F4D27B 35%, #D8AA4A 65%, #7a5a14 100%)",
          }}
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ ...T, times: [0, 0.3, 0.5, 1] }}
        />

        <motion.div
          className="absolute bottom-0 left-1/2 h-[26%] w-[7%] -translate-x-1/2 rounded-t-full bg-navy-night"
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ ...T, times: [0, 0.45, 0.6, 1] }}
        />

        <motion.div
          className="absolute inset-y-0 left-0 w-1/2"
          style={{
            background: "linear-gradient(90deg,#0a1226,#1c2a52)",
            borderRight: "2px solid #D8AA4A",
          }}
          animate={{ x: ["0%", "0%", "-102%", "-102%"] }}
          transition={{ ...T, times: [0, 0.3, 0.52, 1] }}
        >
          <div className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 rotate-45 border border-gold" />
        </motion.div>

        <motion.div
          className="absolute inset-y-0 right-0 w-1/2"
          style={{
            background: "linear-gradient(270deg,#0a1226,#1c2a52)",
            borderLeft: "2px solid #D8AA4A",
          }}
          animate={{ x: ["0%", "0%", "102%", "102%"] }}
          transition={{ ...T, times: [0, 0.3, 0.52, 1] }}
        >
          <div className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 rotate-45 border border-gold" />
        </motion.div>
      </motion.div>

      {dust.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold-soft"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            boxShadow: "0 0 8px rgba(244,210,123,0.9)",
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: -d.rise }}
          transition={{ duration: 1.6, delay: d.delay, ease: "easeOut" }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, #FFFBEA 0%, #F4D27B 40%, rgba(216,170,74,0.6) 100%)",
        }}
        animate={{ opacity: [0, 0, 0.95, 0] }}
        transition={{ ...T, times: [0, 0.6, 0.78, 1] }}
      />
    </motion.div>
  );
}