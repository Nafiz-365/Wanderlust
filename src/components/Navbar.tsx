"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/bookings", label: "My Bookings" },
    { href: "/admin", label: "Admin" },
];

const rightLinks = [
    { href: "/profile", label: "Profile", icon: true },
    { href: "/login", label: "Login", icon: false },
    { href: "/signup", label: "Sign Up", icon: false },
];

const linkClass =
    "shrink-0 text-sm font-medium tracking-[0.08px] transition-colors hover:text-[#15a1bf] lg:text-base";

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex min-h-14 w-full items-center justify-between gap-3 whitespace-nowrap bg-white px-6 py-4 text-[#0c0b0b]">
            {/* Left navigation — design gap: 32px */}
            <div className="flex min-w-0 shrink items-center gap-4 overflow-x-auto lg:gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            linkClass,
                            pathname === link.href && "text-[#15a1bf]",
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Logo — centered in the space between the link groups (design x=713) */}
            <Link href="/" className="shrink-0" aria-label="Wanderlust home">
                <Image
                    src="/images/Wanderlast.png"
                    alt="Wanderlust"
                    width={162}
                    height={24}
                    className="h-5 w-auto sm:h-6"
                />
            </Link>

            {/* Right navigation — design gap: 32px, icon↔label gap: 4px */}
            <div className="flex shrink-0 items-center justify-end gap-4 lg:gap-8">
                {rightLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            linkClass,
                            "flex items-center gap-1",
                            pathname === link.href && "text-[#15a1bf]",
                        )}
                    >
                        {link.icon && <UserRound className="size-4" />}
                        <span
                            className={
                                link.icon ? "hidden sm:inline" : undefined
                            }
                        >
                            {link.label}
                        </span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
