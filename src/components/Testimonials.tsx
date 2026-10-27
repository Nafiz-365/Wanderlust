"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    useCarousel,
} from "@/components/ui/carousel";

const testimonials = [
    {
        quote: '"The Bali trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable."',
        name: "— Michael Chen",
        location: "Singapore",
        photo: "/images/person2.png",
    },
    {
        quote: '"Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable. Highly recommend!"',
        name: "— Sarah Johnson",
        location: "New York, USA",
        photo: "/images/person1.png",
    },
];

/* Design nav: 60px outlined circles with ArrowLeft/ArrowRight (not chevrons),
   living in the header row — wired to the carousel via useCarousel(). */
function TestimonialNav() {
    const { scrollPrev, scrollNext } = useCarousel();
    const navButtonClass =
        "size-[60px] rounded-full border border-[#b6b6b6] text-[#b6b6b6] hover:border-[#15a1bf] hover:bg-transparent hover:text-[#15a1bf]";

    return (
        <div className="flex items-center gap-4">
            <Button
                variant="outline"
                aria-label="Previous testimonial"
                onClick={scrollPrev}
                className={navButtonClass}
            >
                <ArrowLeft className="size-6" />
            </Button>
            <Button
                variant="outline"
                aria-label="Next testimonial"
                onClick={scrollNext}
                className={navButtonClass}
            >
                <ArrowRight className="size-6" />
            </Button>
        </div>
    );
}

export function Testimonials() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-30">
            <div className="mx-auto w-full max-w-360 px-4 sm:px-8 lg:px-20">
                {/* One Carousel wraps the whole block so the header arrows can
                    drive the slides. At lg the two 628px cards fit exactly
                    (2 × calc(50% − 12px) + 24px gap); below that they stack
                    one-per-view and the arrows scroll. */}
                <Carousel opts={{ loop: true, align: "start" }}>
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-4xl leading-none font-medium tracking-[-0.03em] text-[#0c0b0b] sm:text-5xl lg:text-[60px]">
                                What Travelers Say
                            </h2>
                            <p className="text-lg tracking-[-0.03em] text-[#6c696d]">
                                Real experiences from our happy travelers
                            </p>
                        </div>
                        <TestimonialNav />
                    </div>

                    <CarouselContent className="-ml-6">
                        {testimonials.map((testimonial) => (
                            <CarouselItem
                                key={testimonial.name}
                                className="pl-6 md:basis-[calc(50%+12px)]"
                            >
                                <Card className="flex-col gap-6 rounded-none border border-[#eeeeee] px-6 py-6 ring-0 sm:flex-row sm:gap-12 [--card-spacing:--spacing(6)]">
                                    <div className="flex flex-1 flex-col justify-between gap-6">
                                        <blockquote className="text-2xl leading-none font-medium tracking-[-0.01em] text-[#0c0b0b] capitalize">
                                            {testimonial.quote}
                                        </blockquote>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xl leading-none tracking-[-0.005em] text-[#15a1bf]">
                                                {testimonial.name}
                                            </span>
                                            <span className="pl-6 text-sm leading-4 text-[#6c696d]">
                                                {testimonial.location}
                                            </span>
                                        </div>
                                    </div>
                                    <Image
                                        src={testimonial.photo}
                                        alt={testimonial.name}
                                        width={218}
                                        height={264}
                                        className="h-66 w-54 shrink-0 self-start rounded-none! object-cover"
                                    />
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
