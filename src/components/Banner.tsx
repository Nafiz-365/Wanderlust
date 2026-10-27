import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navbar } from "./Navbar";

export function Banner() {
    return (
        <section className="relative isolate min-h-180 h-screen w-full overflow-hidden text-white">
            {/* Background image */}
            <Image
                src="/images/Banner.png"
                alt="Beautiful coastal destination with turquoise water"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 z-0 bg-black/45" />

            {/* Navbar */}
            <div className="absolute inset-x-0 top-0 z-30 px-4 pt-4">
                <Navbar />
            </div>

            {/* Hero content */}
            <div className="absolute inset-x-0 top-[48%] z-10 -translate-y-1/2 px-5 text-center">
                <h1 className="mx-auto mb-5 max-w-4xl text-5xl font-normal leading-[1.05] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[92px]">
                    Discover Your
                    <br />
                    Next Adventure
                </h1>

                <p className="mx-auto mb-10 max-w-2xl text-base leading-7 text-white/95 sm:text-lg">
                    Explore breathtaking destinations and create unforgettable
                    memories with our curated travel experiences.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="/destinations"
                        className="flex min-h-14 w-full max-w-51.75 items-center justify-center gap-6 bg-[#16a3bd] px-6 text-sm font-medium uppercase transition-colors hover:bg-[#128da5]"
                    >
                        Explore Now
                        <ArrowRight className="size-5" />
                    </a>

                    <a
                        href="/destinations"
                        className="flex min-h-14 w-full max-w-49 items-center justify-center border border-white/70 bg-white/10 px-6 text-sm font-medium uppercase transition-colors hover:bg-white/20"
                    >
                        View Destination
                    </a>
                </div>
            </div>

            {/* Bottom search bar */}
            <form
                action="/destinations"
                method="GET"
                className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-2 border border-white/30 bg-white/10 backdrop-blur-md md:grid-cols-[1.1fr_1.1fr_1.1fr_1.1fr_200px]"
            >
                <div className="flex min-h-18 flex-col justify-center border-b border-r border-white/30 px-4 py-3 md:border-b-0 md:px-6">
                    <label
                        htmlFor="location"
                        className="mb-1 text-lg font-medium"
                    >
                        Location
                    </label>
                    <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Address, City Or Zip"
                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/90"
                    />
                </div>

                <div className="flex min-h-18 flex-col justify-center border-b border-white/30 px-4 py-3 md:border-b-0 md:border-r md:px-6">
                    <label
                        htmlFor="duration"
                        className="mb-1 text-lg font-medium"
                    >
                        Date/Duration
                    </label>
                    <input
                        id="duration"
                        name="duration"
                        type="text"
                        placeholder="Anytime/3 Days"
                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/90"
                    />
                </div>

                <div className="flex min-h-18 flex-col justify-center border-r border-white/30 px-4 py-3 md:px-6">
                    <label
                        htmlFor="budget"
                        className="mb-1 text-lg font-medium"
                    >
                        Budget
                    </label>
                    <input
                        id="budget"
                        name="budget"
                        type="text"
                        placeholder="$0-$3000"
                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/90"
                    />
                </div>

                <div className="flex min-h-18 flex-col justify-center px-4 py-3 md:border-r md:border-white/30 md:px-6">
                    <label
                        htmlFor="people"
                        className="mb-1 text-lg font-medium"
                    >
                        People
                    </label>
                    <input
                        id="people"
                        name="people"
                        type="text"
                        placeholder="5-10"
                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/90"
                    />
                </div>

                <button
                    type="submit"
                    className="col-span-2 min-h-18 bg-[#16a3bd] text-lg font-semibold transition-colors hover:bg-[#128da5] md:col-span-1"
                >
                    Search
                </button>
            </form>
        </section>
    );
}
