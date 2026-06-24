"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

function CornerOrn({ flip = false }: { flip?: boolean }) {
    return (
        <svg viewBox="0 0 40 40" className="w-10 h-10 opacity-40" style={{ transform: flip ? "scaleX(-1)" : undefined }} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2 L2 18 Q2 22 6 22" stroke="#c9a86a" strokeWidth="0.9" />
            <path d="M2 2 L18 2 Q22 2 22 6" stroke="#c9a86a" strokeWidth="0.9" />
            <circle cx="2" cy="2" r="1.5" fill="#c9a86a" />
        </svg>
    );
}

function FloatingParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const count = 55;
        const particles = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: 0.8 + Math.random() * 1.4,
            speedX: (Math.random() - 0.5) * 0.25,
            speedY: -0.15 - Math.random() * 0.25,
            opacity: 0.1 + Math.random() * 0.45,
            pulse: Math.random() * Math.PI * 2,
        }));

        let frame: number;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const p of particles) {
                p.x += p.speedX;
                p.y += p.speedY;
                p.pulse += 0.018;
                if (p.y < -4) p.y = canvas.height + 4;
                if (p.x < -4) p.x = canvas.width + 4;
                if (p.x > canvas.width + 4) p.x = -4;
                const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(201, 168, 106, ${alpha})`;
                ctx.fill();
            }
            frame = requestAnimationFrame(draw);
        };
        draw();
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />;
}

export default function CoverScreen({ onOpen }: { onOpen: () => void }) {
    const { cover, couple, hero } = weddingData;

    return (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 1.2, ease: "easeInOut" }} className="absolute inset-0 z-50 flex flex-col items-center justify-center px-8 text-center bg-ink select-none">
            <FloatingParticles />

            <div className="absolute top-6 left-6" style={{ zIndex: 2 }}><CornerOrn /></div>
            <div className="absolute top-6 right-6" style={{ zIndex: 2 }}><CornerOrn flip /></div>
            <div className="absolute bottom-6 left-6" style={{ zIndex: 2, transform: "rotate(180deg) scaleX(-1)" }}><CornerOrn /></div>
            <div className="absolute bottom-6 right-6" style={{ zIndex: 2, transform: "rotate(180deg)" }}><CornerOrn /></div>

            <div className="relative flex flex-col items-center gap-0" style={{ zIndex: 3 }}>
                <motion.p className="font-display tracking-[0.45em] text-[10px] text-gold uppercase mb-6" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}>
                    {cover.eyebrow}
                </motion.p>

                <motion.h1 className="font-script text-gold-soft leading-none" style={{ fontSize: "clamp(3.2rem, 14vw, 4.5rem)" }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.6, ease: "easeOut" }}>
                    {couple.groom.nickname}
                </motion.h1>

                <motion.span className="font-script text-gold leading-none my-2" style={{ fontSize: "clamp(1.6rem, 7vw, 2.2rem)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.0, delay: 0.9, ease: "easeOut" }}>
                    &amp;
                </motion.span>

                <motion.h1 className="font-script text-gold-soft leading-none" style={{ fontSize: "clamp(3.2rem, 14vw, 4.5rem)" }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 1.1, ease: "easeOut" }}>
                    {couple.bride.nickname}
                </motion.h1>

                <motion.p className="font-display text-[11px] tracking-[0.4em] text-gold/70 mt-5 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.0, delay: 1.4, ease: "easeOut" }}>
                    {hero.date.display}
                </motion.p>

                <motion.div className="flex items-center mb-5" initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.9, delay: 1.6, ease: "easeOut" }}>
                    <img src="/ornaments/divider.png" alt="divider" className="w-28 opacity-60" />
                </motion.div>

                <motion.p className="font-display text-[11px] tracking-[0.25em] text-on-dark/60 mb-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.0, delay: 1.8, ease: "easeOut" }}>
                    {cover.invitedLabel}
                </motion.p>

                <motion.p className="font-display text-sm tracking-wide text-gold-soft mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.0, delay: 1.9, ease: "easeOut" }}>
                    Tamu Undangan
                </motion.p>

                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={onOpen} className="font-display text-[11px] tracking-[0.3em] uppercase border border-gold/70 text-gold-soft px-10 py-3.5 rounded-full hover:bg-gold/10 transition-colors" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 2.1, ease: "easeOut" }}>
                    {cover.buttonLabel}
                </motion.button>
            </div>
        </motion.div>
    );
}
