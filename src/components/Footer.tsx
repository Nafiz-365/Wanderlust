import Image from "next/image";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "My Bookings", href: "/bookings" },
    { label: "My Profile", href: "/profile" },
];

const supportLinks = [
    { label: "Help Center", href: "/help-center" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Privacy Policy", href: "/privacy-policy" },
];

const contactLinks = [
    { label: "786 901 1622", href: "tel:+17869011622" },
    { label: "info@wandarland.com", href: "mailto:info@wandarland.com" },
];

const socials = [
    {
        label: "X",
        href: "https://x.com",
        paths: [
            "M3 2 L8 2 L8 4 L3 4 L3 2 Z M16 22 L21 22 L21 20 L16 20 L16 22 Z",
            "M18.5 2 L22 2 L5 22 L1.5 22 L18.5 2 Z",
            "M1 2 L3.5 2 L18.5 22 L16 22 L1 2 Z M5.5 2 L8 2 L23 22 L20.5 22 L5.5 2 Z",
        ],
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        paths: [
            "M20.47 2 L3.53 2 C3.34 2 3.15 2.03 2.97 2.1 C2.8 2.17 2.63 2.28 2.5 2.41 C2.36 2.54 2.25 2.7 2.18 2.88 C2.1 3.05 2.06 3.24 2.06 3.43 L2.06 20.57 C2.06 20.76 2.1 20.95 2.18 21.12 C2.25 21.3 2.36 21.46 2.5 21.59 C2.63 21.72 2.8 21.83 2.97 21.9 C3.15 21.97 3.34 22 3.53 22 L20.47 22 C20.66 22 20.85 21.97 21.03 21.9 C21.2 21.83 21.36 21.72 21.5 21.59 C21.64 21.46 21.75 21.3 21.82 21.12 C21.9 20.95 21.94 20.76 21.94 20.57 L21.94 3.43 C21.94 3.24 21.9 3.05 21.82 2.88 C21.75 2.7 21.64 2.54 21.5 2.41 C21.36 2.28 21.2 2.17 21.03 2.1 C20.85 2.03 20.66 2 20.47 2 Z M8.09 18.74 L5.09 18.74 L5.09 9.74 L8.09 9.74 L8.09 18.74 Z M6.59 8.48 C6.17 8.48 5.78 8.32 5.49 8.02 C5.19 7.73 5.03 7.33 5.03 6.92 C5.03 6.51 5.19 6.11 5.49 5.82 C5.78 5.52 6.17 5.36 6.59 5.36 C6.81 5.34 7.03 5.36 7.24 5.42 C7.45 5.49 7.65 5.6 7.81 5.75 C7.98 5.9 8.11 6.08 8.2 6.28 C8.29 6.48 8.34 6.7 8.34 6.92 C8.34 7.14 8.29 7.36 8.2 7.56 C8.11 7.76 7.98 7.94 7.81 8.09 C7.65 8.24 7.45 8.35 7.24 8.42 C7.03 8.48 6.81 8.5 6.59 8.48 Z M18.91 18.74 L15.91 18.74 L15.91 13.91 C15.91 12.7 15.48 11.91 14.39 11.91 C14.05 11.91 13.72 12.02 13.45 12.21 C13.17 12.41 12.96 12.68 12.85 13 C12.77 13.24 12.74 13.48 12.75 13.73 L12.75 18.73 L9.75 18.73 L9.75 9.73 L12.75 9.73 L12.75 11 C13.02 10.53 13.42 10.14 13.9 9.87 C14.37 9.61 14.91 9.48 15.46 9.5 C17.46 9.5 18.91 10.79 18.91 13.56 L18.91 18.74 Z",
        ],
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com",
        paths: [
            "M7.8 2 L16.2 2 C19.4 2 22 4.6 22 7.8 L22 16.2 C22 17.74 21.39 19.21 20.3 20.3 C19.21 21.39 17.74 22 16.2 22 L7.8 22 C4.6 22 2 19.4 2 16.2 L2 7.8 C2 6.26 2.61 4.79 3.7 3.7 C4.79 2.61 6.26 2 7.8 2 Z M7.6 4 C6.65 4 5.73 4.38 5.05 5.05 C4.38 5.73 4 6.65 4 7.6 L4 16.4 C4 18.39 5.61 20 7.6 20 L16.4 20 C17.35 20 18.27 19.62 18.95 18.95 C19.62 18.27 20 17.35 20 16.4 L20 7.6 C20 5.61 18.39 4 16.4 4 L7.6 4 Z M17.25 5.5 C17.58 5.5 17.9 5.63 18.13 5.87 C18.37 6.1 18.5 6.42 18.5 6.75 C18.5 7.08 18.37 7.4 18.13 7.63 C17.9 7.87 17.58 8 17.25 8 C16.92 8 16.6 7.87 16.37 7.63 C16.13 7.4 16 7.08 16 6.75 C16 6.42 16.13 6.1 16.37 5.87 C16.6 5.63 16.92 5.5 17.25 5.5 Z M12 7 C13.33 7 14.6 7.53 15.54 8.46 C16.47 9.4 17 10.67 17 12 C17 13.33 16.47 14.6 15.54 15.54 C14.6 16.47 13.33 17 12 17 C10.67 17 9.4 16.47 8.46 15.54 C7.53 14.6 7 13.33 7 12 C7 10.67 7.53 9.4 8.46 8.46 C9.4 7.53 10.67 7 12 7 Z M12 9 C11.2 9 10.44 9.32 9.88 9.88 C9.32 10.44 9 11.2 9 12 C9 12.8 9.32 13.56 9.88 14.12 C10.44 14.68 11.2 15 12 15 C12.8 15 13.56 14.68 14.12 14.12 C14.68 13.56 15 12.8 15 12 C15 11.2 14.68 10.44 14.12 9.88 C13.56 9.32 12.8 9 12 9 Z",
        ],
    },
];

const arrowUpRightPath =
    "M19.12 6 L19.12 15.75 C19.12 16.05 19.01 16.33 18.8 16.55 C18.58 16.76 18.3 16.88 18 16.88 C17.7 16.88 17.42 16.76 17.2 16.55 C16.99 16.33 16.88 16.05 16.88 15.75 L16.88 8.72 L6.8 18.8 C6.58 19.01 6.3 19.13 6 19.13 C5.7 19.13 5.41 19.01 5.2 18.8 C4.99 18.58 4.87 18.3 4.87 18 C4.87 17.7 4.99 17.41 5.2 17.2 L15.28 7.12 L8.25 7.12 C7.95 7.12 7.67 7.01 7.45 6.8 C7.24 6.58 7.12 6.3 7.12 6 C7.12 5.7 7.24 5.42 7.45 5.2 C7.67 4.99 7.95 4.88 8.25 4.88 L18 4.88 C18.3 4.88 18.58 4.99 18.8 5.2 C19.01 5.42 19.12 5.7 19.12 6 Z";

const columnTitleClass =
    "text-xl leading-none font-normal uppercase tracking-[-0.005em] text-white";

const linkListClass = "mt-4 text-lg leading-10 text-[#b6b6b6]";
const linkClass = "transition-colors hover:text-[#15a1bf]";

export function Footer() {
    return (
        <footer className="bg-[#0c0b0b] pt-16 pb-8 sm:pt-20 lg:pt-[120px]">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-20">
                <div className="flex flex-col gap-4">
                    <Image
                        src="/images/Wanderlast-1.png"
                        alt="Wanderlust"
                        width={542}
                        height={80}
                        priority={false}
                        className="h-auto w-full max-w-[542px]"
                    />
                    <p className="text-xl leading-[1.6] text-[#b6b6b6]">
                        Your gateway to extraordinary travel
                        experiences around the world.
                    </p>
                </div>

                <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-[60px] lg:grid-cols-[400px_1fr_1fr_1fr] lg:gap-x-[60px] lg:gap-y-0">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h2 className={columnTitleClass}>Newsletter</h2>
                            <p className="text-sm leading-5 text-[#b6b6b6]">
                                Subscribe for exclusive travel deals and
                                inspiration.
                            </p>
                        </div>
                        <div className="relative w-80 max-w-full">
                            <input
                                type="email"
                                name="email"
                                aria-label="Email address"
                                placeholder="Enter email"
                                className="h-12 w-full rounded-none bg-[#373737] px-4 pr-12 text-lg text-white placeholder:text-[#b6b6b6] focus:outline-2 focus:outline-[#15a1bf]"
                                suppressHydrationWarning
                            />
                            <button
                                type="button"
                                aria-label="Subscribe"
                                className="absolute top-1/2 right-4 -translate-y-1/2 text-white transition-colors hover:text-[#15a1bf]"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="size-6"
                                >
                                    <path d={arrowUpRightPath} />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <nav aria-label="Quick links">
                        <h2 className={columnTitleClass}>Quick Links</h2>
                        <ul className={linkListClass}>
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className={linkClass}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Support">
                        <h2 className={columnTitleClass}>Support</h2>
                        <ul className={linkListClass}>
                            {supportLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className={linkClass}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h2 className={columnTitleClass}>Contact Us</h2>
                        <ul className={linkListClass}>
                            {contactLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className={linkClass}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-5 lg:mt-14">
                    <div className="flex flex-wrap items-center justify-between gap-5">
                        <p className="text-sm leading-4 text-[#b6b6b6]">
                            © 2026 Wanderlust. All rights reserved.
                        </p>
                        <div className="flex items-center gap-8">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="text-white transition-colors hover:text-[#15a1bf]"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="size-6"
                                    >
                                        {social.paths.map((d) => (
                                            <path key={d} d={d} />
                                        ))}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
