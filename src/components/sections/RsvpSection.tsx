"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { weddingData } from "@/data/weddingData";

const { rsvpSection } = weddingData;

const ambientStars = [
    { top: "4%", left: "7%", size: 12, dur: 3.4 },
    { top: "7%", left: "86%", size: 10, dur: 3.9 },
    { top: "40%", left: "3%", size: 14, dur: 4.1 },
    { top: "42%", left: "91%", size: 10, dur: 3.5 },
    { top: "80%", left: "6%", size: 12, dur: 3.7 },
    { top: "83%", left: "88%", size: 14, dur: 3.2 },
];

interface FormValues {
    name: string;
    phone: string;
    guestCount: string;
    attendance: "hadir" | "tidak_hadir" | "";
}

interface FormErrors {
    name?: string;
    phone?: string;
    guestCount?: string;
    attendance?: string;
}

function NoteInput({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    error,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder: string;
    type?: string;
    error?: string;
}) {
    return (
        <div className="flex flex-col gap-1">
            <label style={labelStyle}>{label}</label>
            <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full outline-none transition-colors" style={{ background: "rgba(255,255,255,0.05)", border: `0.5px solid ${error ? "#c94060" : "rgba(255,255,255,0.12)"}`, borderRadius: 6, color: "#f0ead8", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", padding: "6px 11px", }} />
            {error && <p style={errorStyle}>{error}</p>}
        </div>
    );
}

function AttendanceToggle({
    value,
    onChange,
    error,
}: {
    value: string;
    onChange: (v: "hadir" | "tidak_hadir") => void;
    error?: string;
}) {
    const options = [
        { val: "hadir", label: rsvpSection.form.attendanceOptions.yes },
        { val: "tidak_hadir", label: rsvpSection.form.attendanceOptions.no },
    ] as const;

    return (
        <div className="flex flex-col gap-1.5">
            <label style={labelStyle}>{rsvpSection.form.attendanceLabel}</label>
            <div className="flex gap-2">
                {options.map((opt) => {
                    const active = value === opt.val;
                    return (
                        <button key={opt.val} type="button" onClick={() => onChange(opt.val)} className="flex-1 transition-all" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: active ? 500 : 400, padding: "6px 0", border: `0.5px solid ${active ? "rgba(220,190,120,0.7)" : "rgba(255,255,255,0.12)"}`, background: active ? "rgba(220,190,120,0.12)" : "rgba(255,255,255,0.04)", color: active ? "#e2c97e" : "rgba(240,234,216,0.5)", borderRadius: 6, }}>
                            {opt.label}
                        </button>
                    );
                })}
            </div>
            {error && <p style={errorStyle}>{error}</p>}
        </div>
    );
}

function GuestStepper({
    value,
    onChange,
    error,
}: {
    value: string;
    onChange: (v: string) => void;
    error?: string;
}) {
    const num = parseInt(value) || 0;
    const dec = () => { if (num > 1) onChange(String(num - 1)); };
    const inc = () => { if (num < 10) onChange(String(num + 1)); };

    return (
        <div className="flex flex-col gap-1">
            <label style={labelStyle}>{rsvpSection.form.guestCountLabel}</label>
            <div className="flex items-center gap-3" style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.05)", border: `0.5px solid ${error ? "#c94060" : "rgba(255,255,255,0.12)"}`, borderRadius: 6, padding: "4px 11px", width: "fit-content", }}>
                <button type="button" onClick={dec} style={stepBtnStyle} aria-label="Kurangi tamu">
                    <svg width="10" height="2" viewBox="0 0 12 2" fill="none">
                        <path d="M1 1h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
                <span style={{ color: "#f0ead8", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 500, minWidth: 18, textAlign: "center" }}>
                    {value || "0"}
                </span>
                <button type="button" onClick={inc} style={stepBtnStyle} aria-label="Tambah tamu">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
                <span style={{ color: "rgba(240,234,216,0.4)", fontFamily: "'DM Sans', sans-serif", fontSize: "12px" }}>
                    {rsvpSection.form.guestCountSuffix}
                </span>
            </div>
            {error && <p style={errorStyle}>{error}</p>}
        </div>
    );
}

function ThankYouCard({ onReset }: { onReset: () => void }) {
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45, ease: "easeOut" }} className="text-center" style={{ ...cardStyle, padding: "16px 14px 13px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e2c97e" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45, marginBottom: "0.5rem" }}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 400, color: "#f0ead8", margin: "0 0 0.3rem" }}>
                {rsvpSection.thankYou.title}
            </h3>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "11.5px", color: "rgba(240,234,216,0.45)", lineHeight: 1.7, margin: "0 0 0.85rem" }}>
                {rsvpSection.thankYou.message}
            </p>
            <button onClick={onReset} style={{ color: "rgba(240,234,216,0.3)", fontFamily: "'DM Sans', sans-serif", fontSize: "7px", letterSpacing: "0.25em", textTransform: "uppercase", textDecoration: "underline", textUnderlineOffset: 3, background: "none", border: "none", cursor: "pointer" }}>
                {rsvpSection.thankYou.resetLink}
            </button>
        </motion.div>
    );
}

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

const stepBtnStyle: React.CSSProperties = {
    width: 24,
    height: 24,
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "rgba(240,234,216,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
};

const cardStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "0.5px solid rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: "18px 16px 16px",
};

const separatorStyle: React.CSSProperties = {
    border: "none",
    borderTop: "0.5px solid rgba(255,255,255,0.08)",
    margin: "2px 0",
};

export default function RsvpSection() {
    const [values, setValues] = useState<FormValues>({
        name: "",
        phone: "",
        guestCount: "1",
        attendance: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const set = (field: keyof FormValues) => (val: string) => {
        setValues((prev) => ({ ...prev, [field]: val }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!values.name.trim()) newErrors.name = rsvpSection.form.errors.name;
        if (!values.phone.trim()) newErrors.phone = rsvpSection.form.errors.phone;
        if (!values.guestCount || parseInt(values.guestCount) < 1)
            newErrors.guestCount = rsvpSection.form.errors.guestCount;
        if (!values.attendance) newErrors.attendance = rsvpSection.form.errors.attendance;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => { if (validate()) setSubmitted(true); };

    const handleReset = () => {
        setValues({ name: "", phone: "", guestCount: "1", attendance: "" });
        setErrors({});
        setSubmitted(false);
    };

    return (
        <section className="relative bg-ink py-14 overflow-hidden">

            {ambientStars.map((s, i) => (
                <motion.img key={i} src="/ornaments/star.png" alt="" className="absolute pointer-events-none select-none" style={{ top: s.top, left: s.left, width: s.size, height: s.size }} animate={{ opacity: [0.1, 0.6, 0.1] }} transition={{ duration: s.dur, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }} />
            ))}

            <ScrollReveal className="text-center px-8 mb-8">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(226,201,126,0.5)", marginBottom: "0.6rem" }}>
                    {rsvpSection.eyebrow}
                </p>
                <h2 className="font-script text-gold-soft leading-tight mb-2" style={{ fontSize: "clamp(2rem, 9vw, 2.75rem)" }}>
                    {rsvpSection.title}
                </h2>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "rgba(240,234,216,0.4)", fontSize: "12px", lineHeight: 1.75 }}>
                    {rsvpSection.subtitle}
                </p>
                <img src="/ornaments/divider.png" alt="" className="mx-auto opacity-60" style={{ width: "120px", marginTop: "1rem" }} />
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="px-8">
                <AnimatePresence mode="wait">
                    {submitted ? (
                        <ThankYouCard key="thankyou" onReset={handleReset} />
                    ) : (
                        <motion.div key="form" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45, ease: "easeOut" }} >

                            <div className="flex flex-col gap-2">
                                <NoteInput label={rsvpSection.form.nameLabel} value={values.name} onChange={set("name")} placeholder={rsvpSection.form.namePlaceholder} error={errors.name} />
                                <NoteInput label={rsvpSection.form.phoneLabel} value={values.phone} onChange={set("phone")} placeholder={rsvpSection.form.phonePlaceholder} type="tel" error={errors.phone} />
                                <hr style={separatorStyle} />
                                <GuestStepper value={values.guestCount} onChange={set("guestCount")} error={errors.guestCount} />
                                <hr style={separatorStyle} />
                                <AttendanceToggle value={values.attendance} onChange={set("attendance")} error={errors.attendance} />
                            </div>

                            <motion.button whileHover={{ opacity: 0.85 }} whileTap={{ scale: 0.97 }} onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 mt-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 500, padding: "9px 0", background: "transparent", border: "0.5px solid rgba(226,201,126,0.45)", borderRadius: 6, color: "#e2c97e", cursor: "pointer", }} >
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                                {rsvpSection.form.submitButton}
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </ScrollReveal>

        </section>
    );
}
