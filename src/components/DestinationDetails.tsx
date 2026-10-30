"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Check,
    MapPin,
    Pencil,
    Star,
    Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type DestinationDetailsData = {
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
    highlights: string[];
    inclusions: string[];
};

/* Green check row shared by Highlights + inclusions (05_Destination Details):
   20px Check in #1e9e35, 8px gap, 16px #6c696d text at -0.03em. */
function CheckRow({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-center gap-2">
            <Check className="size-5 shrink-0 text-[#1e9e35]" />
            <span className="text-base tracking-[-0.03em] text-[#6c696d]">
                {children}
            </span>
        </li>
    );
}

export function DestinationDetails({
    destination,
}: {
    destination: DestinationDetailsData;
}) {
    const [departureDate, setDepartureDate] = React.useState(
        destination.departureDate,
    );

    return (
        <>
            {/* Back link + admin actions (design: 48px row, 16px button gap) */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                <Link
                    href="/destinations"
                    className="group inline-flex items-center gap-3 text-lg tracking-[-0.03em] text-[#6c696d] hover:text-[#15a1bf] sm:text-xl"
                >
                    <ArrowLeft className="size-5 text-[#b6b6b6] group-hover:text-[#15a1bf]" />
                    Back to Destinations
                </Link>

                <div className="flex items-center gap-4">
                    {/* TODO: point at the update-destination route once it exists */}
                    <Button
                        type="button"
                        variant="outline"
                        className="h-12 gap-2 rounded-none border-[#b6b6b6] bg-white px-5 text-base font-medium tracking-[0.08px] text-[#0c0b0b] hover:border-[#15a1bf] hover:text-[#15a1bf]"
                    >
                        <Pencil className="size-5" />
                        Edit
                    </Button>
                    {/* TODO: DELETE /destination/:id once the API supports it */}
                    <Button
                        type="button"
                        variant="outline"
                        className="h-12 gap-2 rounded-none border-[#ef4444] bg-white px-5 text-base font-medium tracking-[0.08px] text-[#ef4444] hover:bg-[#ef4444]/10 hover:text-[#ef4444]"
                    >
                        <Trash2 className="size-5" />
                        Cancel
                    </Button>
                </div>
            </div>

            {/* Hero image (design: 1280x500, square corners) */}
            <Image
                src={destination.imageUrl}
                alt={destination.name}
                width={1280}
                height={500}
                priority
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="mt-6 aspect-128/50 h-auto w-full object-cover"
            />

            {/* Divider 40px below the image, 40px above the content */}
            <div className="mt-10 border-t border-[#efefef]" />

            {/* Design columns: 840px content + 400px booking card, 40px gap */}
            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
                <div>
                    <p className="flex items-center gap-2 text-base font-medium tracking-[0.08px] text-[#6c696d]">
                        <MapPin className="size-5 shrink-0" />
                        {destination.country}
                    </p>

                    <h1 className="mt-4 text-4xl leading-none font-normal tracking-[-0.03em] text-[#0c0b0b] capitalize sm:text-5xl lg:text-[60px]">
                        {destination.name}
                    </h1>

                    <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2">
                        {typeof destination.rating === "number" && (
                            <p className="flex items-center gap-2 text-lg tracking-[-0.03em] text-[#6c696d]">
                                <Star className="size-5 shrink-0 fill-[#1e9e35] text-[#1e9e35]" />
                                <span className="font-semibold text-[#0c0b0b]">
                                    {destination.rating}
                                </span>
                                ({destination.reviews ?? 0} reviews)
                            </p>
                        )}
                        <p className="flex items-center gap-2 text-lg font-medium tracking-[-0.03em] text-[#0c0b0b]">
                            <Calendar className="size-5 shrink-0 text-[#6c696d]" />
                            {destination.duration}
                            {typeof destination.nights === "number" &&
                                ` / ${destination.nights} Nights`}
                        </p>
                    </div>

                    <section className="mt-10">
                        <h2 className="text-3xl leading-none font-medium tracking-[-0.03em] text-[#0c0b0b]">
                            Overview
                        </h2>
                        <p className="mt-5 text-lg leading-6 tracking-[0.09px] text-[#6c696d]">
                            {destination.description}
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-3xl leading-none font-medium tracking-[-0.03em] text-[#0c0b0b]">
                            Highlights
                        </h2>
                        <p className="mt-5 text-lg leading-6 tracking-[0.09px] text-[#6c696d]">
                            {destination.description}
                        </p>
                        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                            {destination.highlights.map((highlight) => (
                                <CheckRow key={highlight}>{highlight}</CheckRow>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Booking card (design: 400px, 20px padding, #eeeeee border) */}
                <Card className="h-fit rounded-none border border-[#eeeeee] p-5 ring-0 [--card-spacing:--spacing(0)] lg:sticky lg:top-24">
                    <p className="text-base tracking-[0.08px] text-[#6c696d]">
                        Starting from
                    </p>
                    <p className="mt-1 text-4xl leading-none font-normal tracking-[-0.03em] text-[#15a1bf]">
                        ${destination.price}
                    </p>
                    <p className="mt-1 text-base tracking-[0.08px] text-[#6c696d]">
                        per person
                    </p>

                    <div className="mt-5">
                        <Label htmlFor="departure-date" className="sr-only">
                            Departure date
                        </Label>
                        <Input
                            id="departure-date"
                            type="date"
                            value={departureDate}
                            onChange={(event) =>
                                setDepartureDate(event.target.value)
                            }
                            className="h-12 rounded-none border-[#eeeeee] bg-[#f8fafc] px-4 text-lg text-[#0c0b0b] hover:bg-[#f8fafc] focus-visible:border-[#15a1bf] focus-visible:ring-0"
                        />
                    </div>

                    <div className="mt-5 border-t border-[#efefef]" />

                    {/* TODO: POST /bookings with { destinationId, date } once the API exists */}
                    <Button
                        type="button"
                        className="mt-5 h-14 w-full gap-2 rounded-none bg-[#15a1bf] px-6 text-base font-medium tracking-[0.08px] text-white hover:bg-[#128da5]"
                    >
                        Book Now
                        <ArrowRight className="size-5" />
                    </Button>

                    <ul className="mt-5 flex flex-col gap-2">
                        {destination.inclusions.map((inclusion) => (
                            <CheckRow key={inclusion}>{inclusion}</CheckRow>
                        ))}
                    </ul>
                </Card>
            </div>
        </>
    );
}
