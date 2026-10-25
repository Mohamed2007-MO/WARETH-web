import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import TimeGate, { GATE_DURATION } from "./TimeGate";

export default function PageTransition() {
  const location = useLocation();
  const [gate, setGate] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setGate(true);
  }, [location.pathname]);

  const delay = gate ? GATE_DURATION * 0.72 : 0;

  return (
    <>
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>

      <AnimatePresence>
        {gate && <TimeGate key={location.key} onDone={() => setGate(false)} />}
      </AnimatePresence>
    </>
  );
}