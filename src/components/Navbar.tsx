import Link from "next/link";
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

export function Navbar({ active = "/" }: { active?: string } = {}) {
    return (
        <nav className="grid min-h-14 w-full grid-cols-[1fr_auto_1fr] items-center gap-3 bg-white px-4 py-3 text-black sm:px-6">
            {/* Left navigation */}
            <div className="flex min-w-0 items-center gap-3 overflow-x-auto whitespace-nowrap text-xs font-medium sm:gap-6 sm:text-sm">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "shrink-0 transition-colors hover:text-[#16a3bd]",
                            active === link.href
                                ? "text-[#16a3bd] underline underline-offset-4"
                                : "text-black",
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Centered logo */}
            <Link
                href="/"
                className="whitespace-nowrap text-lg font-bold tracking-tight text-[#16a3bd] sm:text-2xl md:text-[30px]"
            >
                Wanderlast
            </Link>

            {/* Right navigation */}
            <div className="flex min-w-0 items-center justify-end gap-3 whitespace-nowrap text-xs font-medium sm:gap-6 sm:text-sm">
                {rightLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="flex shrink-0 items-center gap-1.5 transition-colors hover:text-[#16a3bd]"
                    >
                        {link.icon && <UserRound className="size-4" />}
                        <span className={cn(link.icon && "hidden sm:inline")}>
                            {link.label}
                        </span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
