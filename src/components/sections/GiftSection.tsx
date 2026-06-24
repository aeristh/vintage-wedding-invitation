"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { weddingData } from "@/data/weddingData";

const { giftSection } = weddingData;

const ambientStars = [
    { top: "4%", left: "7%", size: 12, dur: 3.4 },
    { top: "7%", left: "86%", size: 10, dur: 3.9 },
    { top: "50%", left: "3%", size: 14, dur: 4.1 },
    { top: "52%", left: "91%", size: 10, dur: 3.5 },
    { top: "88%", left: "6%", size: 12, dur: 3.7 },
    { top: "90%", left: "88%", size: 14, dur: 3.2 },
];

function IconGift() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
    );
}

function IconChevronUp() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
        </svg>
    );
}

function IconCopy() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
    );
}

function IconCheck() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

function AccountCard({ account }: { account: typeof giftSection.accounts[0] }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(account.number).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.09)", borderRadius: 10, padding: "14px 16px", }}>
            <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(201,168,106,0.6)", marginBottom: 3, }} >
                        {account.bank}
                    </p>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 400, color: "#f0ead8", margin: 0, }} >
                        {account.owner}
                    </p>
                </div>
                <div style={{ background: "rgba(201,168,106,0.1)", border: "0.5px solid rgba(201,168,106,0.2)", borderRadius: 6, padding: "4px 10px", fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", color: "#c9a86a", flexShrink: 0, }} >
                    {account.bank}
                </div>
            </div>
            <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)", margin: "0 0 12px" }} />
            <div className="flex items-center justify-between gap-3">
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", fontWeight: 500, color: "#f0ead8", letterSpacing: "0.08em", }} >
                    {account.number}
                </span>
                <motion.button whileTap={{ scale: 0.93 }} onClick={handleCopy} className="flex items-center gap-1.5 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "6px 10px", border: `0.5px solid ${copied ? "rgba(100,200,130,0.4)" : "rgba(201,168,106,0.3)"}`, borderRadius: 6, background: copied ? "rgba(100,200,130,0.08)" : "transparent", color: copied ? "#7ecfa0" : "#c9a86a", cursor: "pointer", flexShrink: 0, }} >
                    {copied ? <IconCheck /> : <IconCopy />}
                    {copied ? giftSection.copiedLabel : giftSection.copyLabel}
                </motion.button>
            </div>
        </div>
    );
}

export default function GiftSection() {
    const [revealed, setRevealed] = useState(false);

    return (
        <section className="relative bg-ink py-14 overflow-hidden">
            {ambientStars.map((s, i) => (
                <motion.img key={i} src="/ornaments/star.png" alt="" className="absolute pointer-events-none select-none" style={{ top: s.top, left: s.left, width: s.size, height: s.size }} animate={{ opacity: [0.1, 0.65, 0.1] }} transition={{ duration: s.dur, delay: i * 0.28, repeat: Infinity, ease: "easeInOut" }} />
            ))}

            <ScrollReveal className="text-center px-8 mb-8">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(226,201,126,0.5)", marginBottom: "0.6rem", }} >
                    {giftSection.eyebrow}
                </p>
                <h2 className="font-script text-gold-soft leading-tight mb-2" style={{ fontSize: "clamp(2rem, 9vw, 2.75rem)" }} >
                    {giftSection.title}
                </h2>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "rgba(240,234,216,0.4)", fontSize: "12px", lineHeight: 1.75, maxWidth: 260, margin: "0 auto", }} >
                    {giftSection.subtitle}
                </p>
                <img src="/ornaments/divider.png" alt="" className="mx-auto opacity-60" style={{ width: "120px", marginTop: "1rem" }} />
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="px-6">
                <AnimatePresence mode="wait">
                    {!revealed ? (
                        <motion.div key="button" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }} className="flex justify-center" >
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }} onClick={() => setRevealed(true)} className="flex flex-col items-center gap-3 w-full" style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(201,168,106,0.3)", borderRadius: 14, padding: "28px 48px", cursor: "pointer", maxWidth: 280, margin: "0 auto", }} >
                                <div style={{ width: 52, height: 52, borderRadius: 12, background: "rgba(201,168,106,0.1)", border: "0.5px solid rgba(201,168,106,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a86a", }} >
                                    <IconGift />
                                </div>
                                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 400, color: "#f0ead8", margin: 0, }} >
                                    {giftSection.buttonLabel}
                                </p>
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div key="accounts" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="flex flex-col gap-3" >
                            {giftSection.accounts.map((acc, i) => (
                                <motion.div key={acc.number} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.35 }} >
                                    <AccountCard account={acc} />
                                </motion.div>
                            ))}

                            <motion.button whileTap={{ scale: 0.96 }} onClick={() => setRevealed(false)} className="flex items-center justify-center gap-2 mt-1 mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,234,216,0.3)", background: "none", border: "none", cursor: "pointer", padding: "8px 0", }} >
                                <IconChevronUp />
                                {giftSection.backLabel}
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </ScrollReveal>

        </section>
    );
}
