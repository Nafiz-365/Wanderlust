import { Skeleton } from "@/components/ui/skeleton";

/* Mirrors the 05_Destination Details geometry: 48px top row, 1280x500
   hero, then the 840px content column + 400px booking card. */
export default function DestinationDetailsLoading() {
    return (
        <main className="bg-white py-16 sm:py-20">
            <div className="mx-auto w-full max-w-360 px-4 sm:px-8 lg:px-20">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <Skeleton className="h-8 w-48 rounded-none" />
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-12 w-28 rounded-none" />
                        <Skeleton className="h-12 w-32 rounded-none" />
                    </div>
                </div>

                <Skeleton className="mt-6 aspect-128/50 w-full rounded-none" />

                <div className="mt-10 border-t border-[#efefef]" />

                <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
                    <div>
                        <Skeleton className="h-6 w-28 rounded-none" />
                        <Skeleton className="mt-4 h-14 w-2/3 rounded-none sm:h-16" />
                        <div className="mt-4 flex items-center gap-8">
                            <Skeleton className="h-6 w-44 rounded-none" />
                            <Skeleton className="h-6 w-40 rounded-none" />
                        </div>

                        <Skeleton className="mt-10 h-8 w-40 rounded-none" />
                        <Skeleton className="mt-5 h-6 w-full rounded-none" />
                        <Skeleton className="mt-2 h-6 w-5/6 rounded-none" />

                        <Skeleton className="mt-10 h-8 w-44 rounded-none" />
                        <Skeleton className="mt-5 h-6 w-full rounded-none" />
                        <Skeleton className="mt-2 h-6 w-5/6 rounded-none" />
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Skeleton
                                    key={index}
                                    className="h-5 w-3/4 rounded-none"
                                />
                            ))}
                        </div>
                    </div>

                    <Skeleton className="h-106 w-full rounded-none" />
                </div>
            </div>
        </main>
    );
}
