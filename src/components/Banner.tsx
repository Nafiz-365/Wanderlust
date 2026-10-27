import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const searchFields = [
    {
        id: "location",
        label: "Location",
        placeholder: "Address, City Or Zip",
    },
    {
        id: "duration",
        label: "Date/Duration",
        placeholder: "Anytime/3 Days",
    },
    {
        id: "budget",
        label: "Budget",
        placeholder: "$0-$3000",
    },
    {
        id: "people",
        label: "People",
        placeholder: "5-10",
    },
];

export function Banner() {
    return (
        <section className="relative isolate -mt-22 flex min-h-186 w-full flex-col overflow-hidden text-white">
            {/* Background image — the exported PNG already includes the design's
                dark overlay (black 50% + bottom gradient), so no extra layer. */}
            <Image
                src="/images/Banner.png"
                alt="Beautiful coastal destination with turquoise water"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />

            {/* 88px band reserved for the floating navbar (design: y0–88) */}
            <div className="relative z-10 h-22 shrink-0" aria-hidden="true" />

            {/* Hero content — design: y190–570, centered between navbar and search bar */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 text-center">
                <div className="flex max-w-165 flex-col items-center gap-3">
                    <h1 className="text-5xl leading-none font-normal tracking-[-0.03em] capitalize sm:text-6xl md:text-7xl lg:text-[104px]">
                        Discover Your
                        <br />
                        Next Adventure
                    </h1>

                    <p className="text-xl leading-[1.6] tracking-[-0.03em] text-[#edfcff]">
                        Explore breathtaking destinations and create
                        unforgettable memories with our curated travel
                        experiences.
                    </p>
                </div>

                {/* Design CTAs: 56px tall, square corners, 24px icon gap,
                    16px uppercase label — overrides of the shadcn Button. */}
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                    <Button
                        render={<a href="/destinations" />}
                        nativeButton={false}
                        className="h-14 w-full gap-6 rounded-none bg-[#15a1bf] px-6 text-base tracking-[0.08px] uppercase text-white hover:bg-[#128da5] sm:w-auto"
                    >
                        Explore Now
                        <ArrowRight className="size-5" />
                    </Button>

                    <Button
                        render={<a href="/destinations" />}
                        nativeButton={false}
                        className="h-14 w-full rounded-none bg-white/40 px-6 text-base tracking-[0.08px] uppercase text-white hover:bg-white/55 sm:w-auto"
                    >
                        View Destination
                    </Button>
                </div>
            </div>

            {/* Search bar — design: full-bleed y672–746, cells are one seamless
                white/40 band (no borders or blur in the design) */}
            <form
                action="/destinations"
                method="GET"
                className="relative z-20 grid grid-cols-2 bg-white/40 md:grid-cols-[repeat(4,1fr)_200px]"
            >
                {searchFields.map((field) => (
                    <div
                        key={field.id}
                        className="flex min-h-18 flex-col justify-center gap-2 px-4 py-4 md:px-6"
                    >
                        <label
                            htmlFor={field.id}
                            className="text-xl leading-none font-medium tracking-[-0.2px] text-white"
                        >
                            {field.label}
                        </label>
                        <input
                            id={field.id}
                            name={field.id}
                            type="text"
                            placeholder={field.placeholder}
                            className="w-full bg-transparent text-sm leading-none text-white outline-none placeholder:text-white focus:outline-2 focus:outline-[#15a1bf]"
                        />
                    </div>
                ))}

                <Button
                    type="submit"
                    className="col-span-2 min-h-18 w-full rounded-none bg-[#15a1bf] text-xl font-semibold text-white hover:bg-[#128da5] md:col-span-1"
                >
                    Search
                </Button>
            </form>
        </section>
    );
}
