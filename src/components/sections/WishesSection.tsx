"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { weddingData } from "@/data/weddingData";

const DUMMY_WISHES = [
    { name: "Ahmad Fauzi", from: "Jakarta", message: "Semoga pernikahan kalian menjadi berkah, bahagia dunia dan akhirat. Selamat menempuh hidup baru!" },
    { name: "Sari Dewi", from: "Bandung", message: "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fi khair. Semoga sakinah, mawaddah, warahmah." },
    { name: "Budi Santoso", from: "Surabaya", message: "Selamat dan bahagia! Semoga cinta kalian selalu tumbuh dan diridhai Allah SWT." },
];

const { wishesSection } = weddingData;

const ambientStars = [
    { top: "3%", left: "6%", size: 12, dur: 3.4 },
    { top: "6%", left: "87%", size: 10, dur: 3.9 },
    { top: "35%", left: "4%", size: 14, dur: 4.0 },
    { top: "38%", left: "92%", size: 10, dur: 3.5 },
    { top: "70%", left: "5%", size: 12, dur: 3.7 },
    { top: "73%", left: "90%", size: 10, dur: 3.3 },
    { top: "92%", left: "7%", size: 14, dur: 4.1 },
    { top: "94%", left: "85%", size: 12, dur: 3.6 },
];

const labelStyle: React.CSSProperties = {
    color: "rgba(240,234,216,0.45)",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: "10px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
};

const errorStyle: React.CSSProperties = {
    color: "#c94060",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    marginTop: 2,
};

const cardStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "0.5px solid rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: "18px 16px 16px",
};

function Avatar({ name }: { name: string }) {
    const parts = name.trim().split(/\s+/);
    const initials = parts.length >= 2
        ? (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase()
        : name.trim().slice(0, 2).toUpperCase();

    return (
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg, #c9a86a, #e2c97e)", border: "0.5px solid rgba(201,168,106,0.5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.35)", }} >
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px", fontWeight: 700, color: "#1b1208", lineHeight: 1, letterSpacing: "0.03em", }} >
                {initials}
            </span>
        </div>
    );
}

function WishBubble({ wish }: { wish: typeof DUMMY_WISHES[0] }) {
    return (
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <Avatar name={wish.name} />
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px", fontWeight: 500, color: "#f0ead8" }}>
                        {wish.name}
                    </span>
                    {wish.from && (
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", color: "rgba(240,234,216,0.3)", letterSpacing: "0.08em" }}>
                            · {wish.from}
                        </span>
                    )}
                </div>
                <div style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(201,168,106,0.15)", borderRadius: "0 10px 10px 10px", padding: "10px 13px", }} >
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "13px", color: "rgba(240,234,216,0.75)", lineHeight: 1.75, margin: 0, }} >
                        &ldquo;{wish.message}&rdquo;
                    </p>
                </div>
            </div>
        </div>
    );
}

const VISIBLE_COUNT = 3;

function WishesList() {
    const wishes = DUMMY_WISHES;
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative px-6">
            <div ref={scrollRef} style={{ maxHeight: 310, overflowY: "auto", display: "flex", flexDirection: "column", gap: 16, paddingRight: 4, paddingBottom: 24, scrollbarWidth: "none", }} className="[&::-webkit-scrollbar]:hidden" >
                {wishes.map((wish, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }} >
                        <WishBubble wish={wish} />
                    </motion.div>
                ))}
            </div>

            {wishes.length > VISIBLE_COUNT && (
                <div className="absolute bottom-0 left-6 right-6 pointer-events-none" style={{ height: 48, background: "linear-gradient(to bottom, transparent, rgba(14,10,4,0.85))", borderRadius: "0 0 8px 8px", }} />
            )}
        </div>
    );
}

function ThankYouCard({ onReset }: { onReset: () => void }) {
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45, ease: "easeOut" }} className="text-center" style={{ ...cardStyle, padding: "20px 16px 16px" }} >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e2c97e" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45, marginBottom: "0.5rem" }} >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 400, color: "#f0ead8", margin: "0 0 0.3rem" }}>
                {wishesSection.thankYou.title}
            </h3>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "11.5px", color: "rgba(240,234,216,0.45)", lineHeight: 1.7, margin: "0 0 0.85rem" }}>
                {wishesSection.thankYou.message}
            </p>
            <button onClick={onReset} style={{ color: "rgba(240,234,216,0.3)", fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", textDecoration: "underline", textUnderlineOffset: 3, background: "none", border: "none", cursor: "pointer", }} >
                {wishesSection.thankYou.resetLink}
            </button>
        </motion.div>
    );
}

function WishForm() {
    const [values, setValues] = useState({ name: "", from: "", message: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const set = (field: string) => (val: string) => {
        setValues((prev) => ({ ...prev, [field]: val }));
        if (errors[field]) setErrors((prev) => { const e = { ...prev }; delete e[field]; return e; });
    };

    const validate = () => {
        const e: Record<string, string> = {};
        if (!values.name.trim()) e.name = wishesSection.form.errors.name;
        if (!values.message.trim()) e.message = wishesSection.form.errors.message;
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = () => { if (validate()) setSubmitted(true); };
    const handleReset = () => { setValues({ name: "", from: "", message: "" }); setErrors({}); setSubmitted(false); };

    return (
        <AnimatePresence mode="wait">
            {submitted ? (
                <ThankYouCard key="ty" onReset={handleReset} />
            ) : (
                <motion.div key="form" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4, ease: "easeOut" }} style={cardStyle} >
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label style={labelStyle}>{wishesSection.form.nameLabel}</label>
                            <input type="text" value={values.name} onChange={(e) => set("name")(e.target.value)} placeholder={wishesSection.form.namePlaceholder} className="w-full outline-none transition-colors" style={{ background: "rgba(255,255,255,0.05)", border: `0.5px solid ${errors.name ? "#c94060" : "rgba(255,255,255,0.12)"}`, borderRadius: 6, color: "#f0ead8", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", padding: "8px 11px", }} />
                            {errors.name && <p style={errorStyle}>{errors.name}</p>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label style={labelStyle}>{wishesSection.form.fromLabel}</label>
                            <input type="text" value={values.from} onChange={(e) => set("from")(e.target.value)} placeholder={wishesSection.form.fromPlaceholder} className="w-full outline-none transition-colors" style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.12)", borderRadius: 6, color: "#f0ead8", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", padding: "8px 11px", }} />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label style={labelStyle}>{wishesSection.form.messageLabel}</label>
                            <textarea value={values.message} onChange={(e) => set("message")(e.target.value)} placeholder={wishesSection.form.messagePlaceholder} rows={3} className="w-full outline-none transition-colors resize-none" style={{ background: "rgba(255,255,255,0.05)", border: `0.5px solid ${errors.message ? "#c94060" : "rgba(255,255,255,0.12)"}`, borderRadius: 6, color: "#f0ead8", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "13px", padding: "8px 11px", lineHeight: 1.7, }} />
                            {errors.message && <p style={errorStyle}>{errors.message}</p>}
                        </div>
                    </div>

                    <motion.button whileHover={{ opacity: 0.85 }} whileTap={{ scale: 0.97 }} onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 mt-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 500, padding: "9px 0", background: "transparent", border: "0.5px solid rgba(226,201,126,0.45)", borderRadius: 6, color: "#e2c97e", cursor: "pointer", }} >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        {wishesSection.form.submitButton}
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default function WishesSection() {
    return (
        <section className="relative bg-ink py-14 overflow-hidden">

            {ambientStars.map((s, i) => (
                <motion.img key={i} src="/ornaments/star.png" alt="" className="absolute pointer-events-none select-none" style={{ top: s.top, left: s.left, width: s.size, height: s.size }} animate={{ opacity: [0.1, 0.65, 0.1] }} transition={{ duration: s.dur, delay: i * 0.28, repeat: Infinity, ease: "easeInOut" }} />
            ))}

            <ScrollReveal className="text-center px-8 mb-8">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(226,201,126,0.5)", marginBottom: "0.6rem", }} >
                    {wishesSection.eyebrow}
                </p>
                <h2 className="font-script text-gold-soft leading-tight mb-2" style={{ fontSize: "clamp(2rem, 9vw, 2.75rem)" }} >
                    {wishesSection.title}
                </h2>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "rgba(240,234,216,0.4)", fontSize: "12px", lineHeight: 1.75, }} >
                    {wishesSection.subtitle}
                </p>
                <img src="/ornaments/divider.png" alt="" className="mx-auto opacity-60" style={{ width: "120px", marginTop: "1rem" }} />
            </ScrollReveal>

            <ScrollReveal delay={0.05} className="mb-8">
                <WishesList />
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="px-6">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(201,168,106,0.5)", textAlign: "center", marginBottom: "0.75rem", }} >
                    {wishesSection.form.sectionLabel}
                </p>
                <WishForm />
            </ScrollReveal>

        </section>
    );
}
