import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import {
    DestinationDetails,
    type DestinationDetailsData,
} from "@/components/DestinationDetails";

// The API is a live local server — render at request time so builds never
// bake in stale data (and never fail when the API is down).
export const dynamic = "force-dynamic";

type Props = {
    params: Promise<{ id: string }>;
};

// React `cache` dedupes the fetch between generateMetadata and the page.
const getDestination = cache(
    async (id: string): Promise<DestinationDetailsData | null> => {
        try {
            const res = await fetch(`http://localhost:8000/destination/${id}`, {
                cache: "no-store",
            });
            if (!res.ok) return null;
            return res.json();
        } catch {
            return null;
        }
    },
);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const destination = await getDestination(id);

    return {
        title: destination ? destination.name : "Destination Details",
    };
}

export default async function DestinationDetailsPage({ params }: Props) {
    const { id } = await params;
    const destination = await getDestination(id);

    if (!destination) notFound();

    return (
        <main className="bg-white py-16 sm:py-20">
            <div className="mx-auto w-full max-w-360 px-4 sm:px-8 lg:px-20">
                <DestinationDetails destination={destination} />
            </div>
        </main>
    );
}
