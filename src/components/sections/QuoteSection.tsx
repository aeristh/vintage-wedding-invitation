"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { weddingData } from "@/data/weddingData";

const { quoteSection } = weddingData;

const stars = [
    { top: "8%", left: "5%", size: 22, rotate: 15, dur: 3.2 },
    { top: "13%", left: "87%", size: 16, rotate: -20, dur: 3.8 },
    { top: "50%", left: "3%", size: 14, rotate: 30, dur: 4.0 },
    { top: "50%", left: "91%", size: 20, rotate: -10, dur: 3.5 },
    { top: "85%", left: "8%", size: 18, rotate: 20, dur: 3.1 },
    { top: "82%", left: "88%", size: 22, rotate: -15, dur: 3.7 },
];

export default function QuoteSection() {
    return (
        <section className="relative bg-ink h-dvh flex items-center justify-center overflow-hidden px-6">

            {stars.map((s, i) => (
                <motion.img key={i} src="/ornaments/star.png" alt="" className="absolute pointer-events-none select-none" style={{ top: s.top, left: s.left, width: s.size, height: s.size, rotate: `${s.rotate}deg` }} animate={{ opacity: [0.15, 0.8, 0.15] }} transition={{ duration: s.dur, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }} />
            ))}

            <div className="absolute left-2 w-14 h-20 bg-paper-dark rounded-sm opacity-20 pointer-events-none" style={{ transform: "rotate(-14deg)", boxShadow: "0 8px 20px rgba(0,0,0,0.5)" }} />
            <div className="absolute right-2 w-12 h-16 bg-paper-dark rounded-sm opacity-15 pointer-events-none" style={{ transform: "rotate(11deg)", boxShadow: "0 8px 20px rgba(0,0,0,0.5)" }} />

            <ScrollReveal delay={0.15} className="w-full max-w-[320px]">
                <div className="relative bg-paper rounded-sm px-6 pt-10 pb-7 text-center" style={{ transform: "rotate(-1.5deg)", boxShadow: "0 20px 56px -12px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.3)" }}>

                    <img src="/ornaments/necklace.png" alt="" className="absolute pointer-events-none select-none" style={{ width: "250px", bottom: "-100px", right: "-160px", zIndex: 10, transform: "scaleX(-1) rotate(-35deg)" }} />

                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex gap-6">
                        <div className="w-1.5 h-7 bg-gold rounded-full shadow" style={{ transform: "rotate(-4deg)" }} />
                        <div className="w-1.5 h-7 bg-gold rounded-full shadow" style={{ transform: "rotate(4deg)" }} />
                    </div>

                    <p className="text-center mb-1" style={{ fontFamily: "serif", fontSize: "clamp(0.88rem, 3.8vw, 1rem)", direction: "rtl", lineHeight: 2.1, color: "#1a1007", fontWeight: 600 }}>
                        {quoteSection.arabic}
                    </p>

                    <div className="flex items-center justify-center mb-2">
                        <img src="/ornaments/divider.png" alt="divider" className="opacity-60" style={{ width: "80%", maxWidth: "260px" }} />
                    </div>

                    <p className="text-center mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(0.8rem, 3.4vw, 0.88rem)", color: "#2b2118", lineHeight: 1.9 }}>
                        {quoteSection.translation}
                    </p>

                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600, fontSize: "clamp(0.82rem, 3.5vw, 0.92rem)", letterSpacing: "0.08em", color: "#a07840" }}>
                        {quoteSection.source}
                    </p>
                </div>
            </ScrollReveal>
        </section>
    );
}