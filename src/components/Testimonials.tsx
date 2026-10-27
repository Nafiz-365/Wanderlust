import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

export function Testimonials() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-20">
                <div className="flex flex-wrap items-center justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-4xl leading-none font-medium tracking-[-0.03em] text-[#0c0b0b] sm:text-5xl lg:text-[60px]">
                            What Travelers Say
                        </h2>
                        <p className="text-lg tracking-[-0.03em] text-[#6c696d]">
                            Real experiences from our happy travelers
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            aria-label="Previous testimonial"
                            className="flex size-[60px] items-center justify-center rounded-full border border-[#b6b6b6] text-[#b6b6b6] transition-colors hover:border-[#15a1bf] hover:text-[#15a1bf]"
                        >
                            <ArrowLeft className="size-6" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next testimonial"
                            className="flex size-[60px] items-center justify-center rounded-full border border-[#b6b6b6] text-[#b6b6b6] transition-colors hover:border-[#15a1bf] hover:text-[#15a1bf]"
                        >
                            <ArrowRight className="size-6" />
                        </button>
                    </div>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {testimonials.map((testimonial) => (
                        <figure
                            key={testimonial.name}
                            className="flex flex-col gap-6 border border-[#eeeeee] bg-white p-6 sm:flex-row sm:gap-12"
                        >
                            <div className="flex flex-1 flex-col justify-between gap-6">
                                <blockquote className="text-2xl leading-none font-medium tracking-[-0.01em] text-[#0c0b0b] capitalize">
                                    {testimonial.quote}
                                </blockquote>
                                <figcaption className="flex flex-col gap-1">
                                    <span className="text-xl leading-none tracking-[-0.005em] text-[#15a1bf]">
                                        {testimonial.name}
                                    </span>
                                    <span className="pl-[26px] text-sm leading-4 text-[#6c696d]">
                                        {testimonial.location}
                                    </span>
                                </figcaption>
                            </div>
                            <Image
                                src={testimonial.photo}
                                alt={testimonial.name}
                                width={218}
                                height={264}
                                className="h-[264px] w-[218px] shrink-0 self-start object-cover"
                            />
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
