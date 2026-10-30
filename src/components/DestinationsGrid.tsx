"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin, RotateCcw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export type Destination = {
    _id: string;
    name: string;
    country: string;
    category: string;
    price: number;
    duration: string;
    nights?: number;
    departureDate: string;
    imageUrl: string;
    description: string;
    rating?: number;
    reviews?: number;
};

type PriceRange = "all" | "under-1000" | "1000-2000" | "over-2000";
type SortBy = "newest" | "price-asc" | "price-desc" | "name-asc";

/* Design tokens for the filter bar (02_Destinations frame):
   56px tall, 1px #b6b6b6 border, square corners, 24px side padding,
   20px uppercase text, #6c696d placeholder, 20px caret. */
const filterTriggerClass =
    "h-14 w-full justify-between rounded-none border-[#b6b6b6] bg-white px-6 text-xl leading-none font-normal tracking-[0.1px] uppercase text-[#0c0b0b] shadow-none hover:border-[#15a1bf] focus-visible:border-[#15a1bf] focus-visible:ring-0 data-placeholder:text-[#6c696d] [&_svg]:size-5 [&_svg]:text-[#0c0b0b]";

const priceRanges: Array<{ label: string; value: PriceRange }> = [
    { label: "All Prices", value: "all" },
    { label: "Under $1000", value: "under-1000" },
    { label: "$1000 - $2000", value: "1000-2000" },
    { label: "Over $2000", value: "over-2000" },
];

const sortOptions: Array<{ label: string; value: SortBy }> = [
    { label: "Newest First", value: "newest" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Name: A - Z", value: "name-asc" },
];

function matchesPriceRange(price: number, range: PriceRange) {
    switch (range) {
        case "under-1000":
            return price < 1000;
        case "1000-2000":
            return price >= 1000 && price <= 2000;
        case "over-2000":
            return price > 2000;
        default:
            return true;
    }
}

export function DestinationsGrid({
    destinations,
}: {
    destinations: Destination[];
}) {
    const [category, setCategory] = React.useState<string | null>(null);
    const [priceRange, setPriceRange] = React.useState<PriceRange | null>(null);
    const [sortBy, setSortBy] = React.useState<SortBy | null>(null);

    const categories = [...new Set(destinations.map((d) => d.category))].sort();

    const hasActiveFilters =
        category !== null || priceRange !== null || sortBy !== null;

    function clearFilters() {
        setCategory(null);
        setPriceRange(null);
        setSortBy(null);
    }

    const filtered = destinations
        .filter((d) => !category || d.category === category)
        .filter((d) => matchesPriceRange(d.price, priceRange ?? "all"))
        .sort((a, b) => {
            switch (sortBy) {
                case "price-asc":
                    return a.price - b.price;
                case "price-desc":
                    return b.price - a.price;
                case "name-asc":
                    return a.name.localeCompare(b.name);
                default:
                    // Newest First (default): soonest departure date.
                    return b.departureDate.localeCompare(a.departureDate);
            }
        });

    return (
        <>
            {/* Filter bar — three equal columns aligned with the card grid */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                <Select
                    value={category}
                    onValueChange={(value) =>
                        // "All Categories" clears the filter rather than
                        // matching a literal category named "all".
                        setCategory(value === "all" ? null : value)
                    }
                >
                    <SelectTrigger className={filterTriggerClass}>
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((option) => (
                            <SelectItem key={option} value={option}>
                                {option}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    value={priceRange}
                    onValueChange={(value) =>
                        setPriceRange(value as PriceRange | null)
                    }
                >
                    <SelectTrigger className={filterTriggerClass}>
                        <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent>
                        {priceRanges.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    value={sortBy}
                    onValueChange={(value) => setSortBy(value as SortBy | null)}
                >
                    <SelectTrigger className={filterTriggerClass}>
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        {sortOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <p className="mt-4 text-xl tracking-[-0.03em] text-[#6c696d]">
                Showing {filtered.length} destinations
            </p>

            {/* auto-rows-fr: every row equal height → identical card sizes */}
            <div className="mt-10 grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((destination) => (
                    <Card
                        key={destination._id}
                        className="h-full gap-4 rounded-none bg-transparent p-0 ring-0 [--card-spacing:--spacing(4)]"
                    >
                        <div className="relative">
                            <Image
                                src={destination.imageUrl}
                                alt={destination.name}
                                width={411}
                                height={231}
                                sizes="(min-width: 1024px) 411px, (min-width: 640px) 50vw, 100vw"
                                className="aspect-411/231 h-auto w-full rounded-none! object-cover"
                            />
                            {/* Design rating badge: white 82x40, inset 20px.
                                Shows the API rating; "New" until reviews exist. */}
                            <span className="absolute top-5 right-5 flex h-10 w-20 items-center justify-center gap-1.5 bg-white text-base font-medium text-[#121212]">
                                {destination.rating ?? "New"}
                                <Star className="size-5 fill-[#121212] text-[#121212]" />
                            </span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="flex items-center gap-2 text-base font-medium tracking-[0.08px] text-[#6c696d]">
                                <MapPin className="size-5 shrink-0" />
                                {destination.country}
                            </p>

                            <div className="flex items-baseline justify-between gap-3">
                                <h2 className="min-w-0 truncate text-2xl font-medium tracking-[-0.015em] text-[#0c0b0b] capitalize">
                                    {destination.name}
                                </h2>
                                <p className="shrink-0 text-2xl font-medium tracking-[-0.01em] text-[#0c0b0b] capitalize">
                                    ${destination.price}
                                    <span className="text-sm text-[#6c696d]">
                                        /Person
                                    </span>
                                </p>
                            </div>

                            <p className="flex items-center gap-2 text-base font-medium tracking-[0.08px] text-[#6c696d]">
                                <Calendar className="size-5 shrink-0" />
                                {destination.duration}
                            </p>

                            {/* Extra 8px above BOOK NOW (design: 16px row gap) */}
                            <Link
                                href={`/destinations/${destination._id}`}
                                className="group mt-2 inline-flex w-fit items-center gap-3 text-base font-medium tracking-[0.08px] text-[#15a1bf] hover:text-[#128da5]"
                            >
                                BOOK NOW
                                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </Card>
                ))}

                {filtered.length === 0 && (
                    <div className="col-span-full flex flex-col items-center gap-3 py-16 text-center">
                        <MapPin className="size-10 text-[#b6b6b6]" />
                        <p className="text-2xl font-medium tracking-[-0.015em] text-[#0c0b0b]">
                            No destinations found
                        </p>
                        <p className="text-base text-[#6c696d]">
                            {destinations.length === 0
                                ? "Check back soon — new trips are added all the time."
                                : "Try adjusting your filters to see more results."}
                        </p>
                        {hasActiveFilters && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={clearFilters}
                                className="mt-2 h-12 gap-2 rounded-none border-[#b6b6b6] px-6 text-base font-medium tracking-[0.08px] text-[#0c0b0b] hover:border-[#15a1bf] hover:text-[#15a1bf]"
                            >
                                <RotateCcw className="size-5" />
                                Clear filters
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
