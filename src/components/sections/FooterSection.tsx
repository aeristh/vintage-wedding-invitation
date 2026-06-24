"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

const { footer } = weddingData;

export default function FooterSection() {
    return (
        <footer className="relative bg-ink" style={{ paddingBottom: 28 }}>

            <div style={{ position: "relative", height: 48, overflow: "hidden", marginBottom: 8, }} >
                <svg viewBox="0 0 400 48" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg" >
                    <path d="M-10,44 Q200,2 410,44" fill="none" stroke="rgba(201,168,106,0.28)" strokeWidth="0.8" />
                    <path d="M-10,47 Q200,6 410,47" fill="none" stroke="rgba(201,168,106,0.10)" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="flex flex-col items-center gap-1.5 text-center px-8">
                <motion.p className="font-script text-gold-soft leading-none" style={{ fontSize: "clamp(1.4rem, 6vw, 1.9rem)" }} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: "easeOut" }} >
                    {footer.thankYou}
                </motion.p>

                <motion.p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(240,234,216,0.2)", }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.25, ease: "easeOut" }} >
                    {footer.copyright}
                </motion.p>
            </div>
        </footer>
    );
}
