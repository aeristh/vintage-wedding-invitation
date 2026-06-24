export interface StoryItem {
    number: string;
    title: string;
    photo: string;
    text: string;
    rotate: string;
    photoSide: "left" | "right";
}

export interface GalleryPhoto {
    src: string;
    washi: "gold" | "rose" | "sage" | "blue";
}

export interface StickyNote {
    text: string;
    sig: string;
    bg: string;
    sigColor: string;
    rotate: string;
}

export interface LocationEvent {
    eyebrow: string;
    name: string;
    day: string;
    date: string;
    time: string;
    venue: string;
    address: string;
    mapQuery: string;
}

export interface WishItem {
    name: string;
    from: string;
    message: string;
}

export interface WeddingData {
    meta: {
        siteTitle: string;
    };
    couple: {
        groom: {
            nickname: string;
            fullName: string;
            order: string;
            father: string;
            mother: string;
            instagram: string;
            photo: string;
        };
        bride: {
            nickname: string;
            fullName: string;
            order: string;
            father: string;
            mother: string;
            instagram: string;
            photo: string;
        };
    };
    cover: {
        eyebrow: string;
        invitedLabel: string;
        buttonLabel: string;
    };
    hero: {
        photo: string;
        eyebrow: string;
        scrollLabel: string;
        date: {
            display: string;
            day: string;
            dateNumber: string;
            month: string;
            year: string;
            iso: string;
        };
    };
    coupleSection: {
        title: string;
        subtitle: string;
        groomLabel: string;
        brideLabel: string;
    };
    quoteSection: {
        arabic: string;
        translation: string;
        source: string;
    };
    storySection: {
        eyebrow: string;
        title: string;
        subtitle: string;
        items: StoryItem[];
    };
    gallerySection: {
        eyebrow: string;
        title: string;
        subtitle: string;
        photos: GalleryPhoto[];
        video: {
            label: string;
            src: string;
        };
        stickyNotes: StickyNote[];
    };
    dateSection: {
        eyebrow: string;
        title: string;
        countdownLabel: string;
        countdown: {
            days: string;
            hours: string;
            minutes: string;
            seconds: string;
        };
        saveButton: string;
        reminderButton: string;
        calendarDescription: string;
        calendarLocation: string;
    };
    locationSection: {
        eyebrow: string;
        title: string;
        subtitle: string;
        mapLabel: string;
        eventsLabel: string;
        viewMapButton: string;
        events: {
            akad: LocationEvent;
            resepsi: LocationEvent;
        };
    };
    giftSection: {
        eyebrow: string;
        title: string;
        subtitle: string;
        buttonLabel: string;
        copyLabel: string;
        copiedLabel: string;
        backLabel: string;
        accounts: {
            bank: string;
            owner: string;
            number: string;
        }[];
    };
    rsvpSection: {
        eyebrow: string;
        title: string;
        subtitle: string;
        form: {
            nameLabel: string;
            namePlaceholder: string;
            phoneLabel: string;
            phonePlaceholder: string;
            guestCountLabel: string;
            guestCountSuffix: string;
            attendanceLabel: string;
            attendanceOptions: {
                yes: string;
                no: string;
            };
            submitButton: string;
            errors: {
                name: string;
                phone: string;
                guestCount: string;
                attendance: string;
            };
        };
        thankYou: {
            title: string;
            message: string;
            resetLink: string;
        };
    };
    wishesSection: {
        eyebrow: string;
        title: string;
        subtitle: string;
        form: {
            sectionLabel: string;
            nameLabel: string;
            namePlaceholder: string;
            fromLabel: string;
            fromPlaceholder: string;
            messageLabel: string;
            messagePlaceholder: string;
            submitButton: string;
            errors: {
                name: string;
                message: string;
            };
        };
        thankYou: {
            title: string;
            message: string;
            resetLink: string;
        };
    };
    footer: {
        thankYou: string;
        copyright: string;
    };
}

export const weddingData: WeddingData = {
    meta: {
        siteTitle: "Undangan Pernikahan",
    },
    couple: {
        groom: {
            nickname: "Rheo",
            fullName: "Rheo Elvano",
            order: "Putra Pertama",
            father: "Bapak John Doe",
            mother: "Ibu Jane Doe",
            instagram: "@rheo",
            photo: "/images/groom.jpg",
        },
        bride: {
            nickname: "Lyra",
            fullName: "Lyra Agatha",
            order: "Putri Pertama",
            father: "Bapak Robert Smith",
            mother: "Ibu Maria Smith",
            instagram: "@lyra",
            photo: "/images/bride.jpg",
        },
    },
    cover: {
        eyebrow: "The Wedding Of",
        invitedLabel: "Kepada Yth.",
        buttonLabel: "Buka Undangan",
    },
    hero: {
        photo: "/images/hero-couple.jpg",
        eyebrow: "The Wedding Of",
        scrollLabel: "Scroll ke Bawah",
        date: {
            display: "08 . 08 . 2028",
            day: "Sabtu",
            dateNumber: "08",
            month: "Agustus",
            year: "2028",
            iso: "2028-08-08T19:00:00",
        },
    },
    coupleSection: {
        title: "The Happy Couple",
        subtitle: "Tuhan telah menentukan, dengan-Nya kami dipersatukan",
        groomLabel: "The Groom",
        brideLabel: "The Bride",
    },
    quoteSection: {
        arabic: "وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ",
        translation: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
        source: "QS. Ar-Rum : 21",
    },
    storySection: {
        eyebrow: "Our Journey",
        title: "Love Story",
        subtitle: "Setiap pertemuan adalah awal dari sebuah cerita",
        items: [
            {
                number: "01",
                title: "The Beginning",
                photo: "/images/story-1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                rotate: "-2deg",
                photoSide: "left",
            },
            {
                number: "02",
                title: "First Date",
                photo: "/images/story-2.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                rotate: "1.5deg",
                photoSide: "right",
            },
            {
                number: "03",
                title: "The Proposal",
                photo: "/images/story-3.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                rotate: "-1deg",
                photoSide: "left",
            },
            {
                number: "04",
                title: "Our Wedding",
                photo: "/images/story-4.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                rotate: "2deg",
                photoSide: "right",
            },
        ],
    },
    gallerySection: {
        eyebrow: "Our Memories",
        title: "Gallery",
        subtitle: "Setiap momen adalah kenangan yang berharga",
        photos: [
            { src: "/images/gallery-1.jpg", washi: "gold" },
            { src: "/images/gallery-2.jpg", washi: "sage" },
            { src: "/images/gallery-3.jpg", washi: "rose" },
            { src: "/images/gallery-4.jpg", washi: "blue" },
            { src: "/images/gallery-5.jpg", washi: "gold" },
            { src: "/images/gallery-6.jpg", washi: "rose" },
        ],
        video: {
            label: "Our Moments",
            src: "https://www.youtube.com/embed/jX4jySkP6FQ?autoplay=1&mute=1&loop=1&playlist=jX4jySkP6FQ",
        },
        stickyNotes: [
            {
                text: '"Kamu adalah jawaban dari setiap doa yang pernah aku panjatkan."',
                sig: "— Rheo",
                bg: "#f5e6a3",
                sigColor: "#8a6020",
                rotate: "-1.5deg",
            },
            {
                text: '"Bersamamu, setiap hari terasa seperti petualangan baru."',
                sig: "— Lyra",
                bg: "#daeaf5",
                sigColor: "#3a6080",
                rotate: "1deg",
            },
        ],
    },
    dateSection: {
        eyebrow: "Mark Your Calendar",
        title: "Save the Date",
        countdownLabel: "Menghitung hingga kami resmi bersatu",
        countdown: {
            days: "Hari",
            hours: "Jam",
            minutes: "Menit",
            seconds: "Detik",
        },
        saveButton: "Simpan ke Kalender",
        reminderButton: "Aktifkan Pengingat",
        calendarDescription: "Kami mengundang Anda untuk hadir dan menjadi bagian dari momen bahagia kami.",
        calendarLocation: "Indonesia",
    },
    locationSection: {
        eyebrow: "Tandai di Petamu",
        title: "Location",
        subtitle: "Kami menantikan kehadiran Anda di momen istimewa ini",
        mapLabel: "Berikut lokasi rangkaian acara pernikahan kami",
        eventsLabel: "Rangkaian Acara",
        viewMapButton: "Lihat Lokasi",
        events: {
            akad: {
                eyebrow: "Akad Nikah",
                name: "Canterbury Mosque",
                day: "Sabtu",
                date: "08 Agustus 2028",
                time: "08.00 – 10.00 WIB",
                venue: "Canterbury Mosque",
                address: "Nunnery Fields, Canterbury CT1 3JN, UK",
                mapQuery: "Canterbury Mosque, Nunnery Fields, Canterbury",
            },
            resepsi: {
                eyebrow: "Resepsi",
                name: "Eastwell Manor",
                day: "Sabtu",
                date: "08 Agustus 2028",
                time: "19.00 – 22.00 WIB",
                venue: "Eastwell Manor",
                address: "Eastwell Park, Boughton Lees, Ashford TN25 4HR, UK",
                mapQuery: "Eastwell Manor, Ashford, Kent",
            },
        },
    },
    giftSection: {
        eyebrow: "Wedding Gift",
        title: "Send Your Gift",
        subtitle: "Doa dan kehadiran Anda adalah hadiah terbaik bagi kami",
        buttonLabel: "Make a Gift",
        copyLabel: "Salin",
        copiedLabel: "Tersalin",
        backLabel: "Kembali",
        accounts: [
            {
                bank: "BCA",
                owner: "Lyra Agatha",
                number: "1234567890",
            },
            {
                bank: "BCA",
                owner: "Rheo Elvano",
                number: "0987654321",
            },
        ],
    },
    rsvpSection: {
        eyebrow: "Konfirmasi Kehadiran",
        title: "RSVP",
        subtitle: "Mohon konfirmasi kehadiran Anda paling lambat 7 hari sebelum acara, agar kami dapat mempersiapkan segalanya dengan baik.",
        form: {
            nameLabel: "Nama Lengkap",
            namePlaceholder: "Tulis nama lengkap Anda",
            phoneLabel: "Nomor Telepon",
            phonePlaceholder: "Contoh: 08123456789",
            guestCountLabel: "Jumlah Tamu",
            guestCountSuffix: "orang",
            attendanceLabel: "Konfirmasi Kehadiran",
            attendanceOptions: {
                yes: "Hadir",
                no: "Berhalangan",
            },
            submitButton: "Konfirmasi Sekarang",
            errors: {
                name: "Nama lengkap wajib diisi",
                phone: "Nomor telepon wajib diisi",
                guestCount: "Jumlah tamu minimal 1 orang",
                attendance: "Pilih konfirmasi kehadiran",
            },
        },
        thankYou: {
            title: "Terima Kasih!",
            message: "Konfirmasi kehadiran Anda sudah kami terima. Kami sangat bahagia dan tidak sabar untuk merayakan momen indah ini bersama Anda.",
            resetLink: "Isi ulang konfirmasi",
        },
    },

    wishesSection: {
        eyebrow: "Doa & Ucapan",
        title: "Wishes & Prayers",
        subtitle: "Setiap doa dan ucapan dari kalian adalah kebahagiaan tersendiri bagi kami",
        form: {
            sectionLabel: "Kirim Ucapan",
            nameLabel: "Nama",
            namePlaceholder: "Tulis nama Anda",
            fromLabel: "Asal Kota (opsional)",
            fromPlaceholder: "Contoh: Jakarta",
            messageLabel: "Ucapan & Doa",
            messagePlaceholder: "Tulis doa dan ucapan tulus Anda...",
            submitButton: "Kirim Ucapan",
            errors: {
                name: "Nama wajib diisi",
                message: "Ucapan wajib diisi",
            },
        },
        thankYou: {
            title: "Terima Kasih!",
            message: "Ucapan dan doa Anda telah kami terima. Sungguh berarti bagi kami.",
            resetLink: "Kirim ucapan lain",
        },
    },

    footer: {
        thankYou: "Thank You",
        copyright: "© 2026 · Rheo & Lyra",
    },
};
