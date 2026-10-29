import type { Metadata } from "next";
import {
    DestinationsGrid,
    type Destination,
} from "@/components/DestinationsGrid";

export const metadata: Metadata = {
    title: "Explore All Destinations",
};

// The API is a live local server — render at request time so builds never
// bake in stale data (and never fail when the API is down).
export const dynamic = "force-dynamic";

async function getDestinations(): Promise<Destination[]> {
    try {
        const res = await fetch("http://localhost:8000/destinations", {
            cache: "no-store",
        });
        if (!res.ok) return [];
        return res.json();
    } catch {
        return [];
    }
}

export default async function DestinationsPage() {
    const destinations = await getDestinations();

    return (
        <main className="bg-white py-16 sm:py-20">
            <div className="mx-auto w-full max-w-360 px-4 sm:px-8 lg:px-20">
                <h1 className="text-4xl leading-none font-normal tracking-[-0.03em] text-[#0c0b0b] sm:text-5xl lg:text-[60px]">
                    Explore All Destinations
                </h1>
                <p className="mt-4 text-base tracking-[-0.03em] text-[#6c696d] sm:text-xl">
                    Find your perfect travel experience from our curated
                    collection
                </p>

                <DestinationsGrid destinations={destinations} />
            </div>
        </main>
    );
}
