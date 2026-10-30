import { Skeleton } from "@/components/ui/skeleton";

/* Mirrors the 02_Destinations geometry: heading block, 56px filter bar,
   result count, then the 3-column card grid (411x231 images). */
export default function DestinationsLoading() {
    return (
        <main className="bg-white py-16 sm:py-20">
            <div className="mx-auto w-full max-w-360 px-4 sm:px-8 lg:px-20">
                <Skeleton className="h-14 w-2/3 max-w-150 rounded-none sm:h-16" />
                <Skeleton className="mt-4 h-6 w-96 max-w-full rounded-none sm:h-7" />

                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Skeleton key={index} className="h-14 rounded-none" />
                    ))}
                </div>

                <Skeleton className="mt-4 h-6 w-56 rounded-none" />

                <div className="mt-10 grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <Skeleton className="aspect-411/231 w-full rounded-none" />
                            <Skeleton className="h-5 w-28 rounded-none" />
                            <Skeleton className="h-7 w-3/4 rounded-none" />
                            <Skeleton className="h-5 w-36 rounded-none" />
                            <Skeleton className="mt-2 h-5 w-32 rounded-none" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
