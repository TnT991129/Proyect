import { motion, useScroll } from "framer-motion";

export default function BarraDeProgresoScroll() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        background: "linear-gradient(to right, #AE445A, #432E53)",
        transformOrigin: "0%",
        scaleX: scrollYProgress
      }}
    />
  );
}
