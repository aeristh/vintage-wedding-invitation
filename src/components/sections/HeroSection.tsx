"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export default function HeroSection() {
    const { hero, couple } = weddingData;

    return (
        <section className="relative h-dvh w-full overflow-hidden bg-ink">

            <motion.img src={hero.photo} alt={`${couple.groom.nickname} & ${couple.bride.nickname}`} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.2, delay: 1.0, ease: "easeOut" }} />

            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)" }} />

            <div className="absolute top-10 left-1/2 -translate-x-1/2">
                <motion.p className="font-display text-[10px] tracking-[0.5em] uppercase text-gold/80 whitespace-nowrap" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1.6, ease: "easeOut" }}>
                    {hero.eyebrow}
                </motion.p>
            </div>

            <div className="absolute inset-0 pointer-events-none select-none">
                <motion.span className="font-script text-gold-soft/25 leading-none absolute" style={{ fontSize: "clamp(7rem, 32vw, 11rem)", top: "28%", left: "50%", transform: "translateX(-80%) rotate(-8deg)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.0, delay: 2.0, ease: "easeOut" }}>
                    {couple.groom.nickname.charAt(0)}
                </motion.span>

                <motion.span className="font-script text-gold-soft/25 leading-none absolute" style={{ fontSize: "clamp(7rem, 32vw, 11rem)", bottom: "10%", left: "50%", transform: "translateX(-20%) rotate(-8deg)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.0, delay: 2.3, ease: "easeOut" }}>
                    {couple.bride.nickname.charAt(0)}
                </motion.span>
            </div>

            <div className="relative h-full w-full flex flex-col items-center justify-center px-6 text-center pt-24">
                <motion.h1 className="font-script text-gold-soft leading-tight" style={{ fontSize: "clamp(2.8rem, 12vw, 4rem)" }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}>
                    {couple.groom.nickname}
                    <span className="font-script text-gold mx-3" style={{ fontSize: "clamp(1.4rem, 6vw, 2rem)" }}>&amp;</span>
                    {couple.bride.nickname}
                </motion.h1>

                <motion.div className="flex items-center my-5" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 2.0, ease: "easeOut" }}>
                    <img src="/ornaments/divider.png" alt="divider" className="w-28 opacity-60" />
                </motion.div>

                <motion.p className="font-display text-[11px] tracking-[0.45em] text-on-dark/70" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 2.2, ease: "easeOut" }}>
                    {hero.date.display}
                </motion.p>
            </div>

            <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 2.6, ease: "easeOut" }}>
                <div className="relative w-6 h-9 rounded-full border border-white/50 flex justify-center pt-1.5">
                    <span className="w-0.5 h-1.5 rounded-full bg-white/70" style={{ animation: "scrollDot 1.6s ease-in-out infinite" }} />
                </div>
                <span className="font-display text-[9px] tracking-[0.35em] uppercase text-white/50">
                    {hero.scrollLabel}
                </span>
            </motion.div>

            <style>{`
                @keyframes scrollDot {
                    0%   { opacity: 1;   transform: translateY(0); }
                    60%  { opacity: 0.2; transform: translateY(7px); }
                    100% { opacity: 0;   transform: translateY(10px); }
                }
            `}</style>
        </section>
    );
}
