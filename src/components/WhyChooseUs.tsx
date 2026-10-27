import Image from "next/image";
import { Card } from "@/components/ui/card";

const features = [
    {
        icon: "/images/ShieldCheck.png",
        title: "Safe & Secure",
        description:
            "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    },
    {
        icon: "/images/MapTrifold.png",
        title: "Expert Guides",
        description:
            "Local experts who bring destinations to life with authentic cultural insights.",
    },
    {
        icon: "/images/Headset.png",
        title: "24/7 Support",
        description:
            "Round-the-clock customer service to assist you wherever your journey takes you.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="bg-[#edfcff] py-16 sm:py-20 lg:py-30">
            <div className="mx-auto w-full max-w-360 px-4 sm:px-8 lg:px-20">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h2 className="text-4xl leading-none font-medium tracking-[-0.03em] text-[#0c0b0b] sm:text-5xl lg:text-[60px]">
                        Why Choose Wanderlust
                    </h2>
                    <p className="text-lg text-[#6c696d]">
                        Your trusted partner for exceptional travel experiences
                    </p>
                </div>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <Card
                            key={feature.title}
                            className="rounded-none bg-white px-6 py-6 shadow-[0_1px_1px_0_rgba(0,0,0,0.1)] ring-0 sm:px-8 sm:py-8 lg:px-10 lg:py-10 [--card-spacing:--spacing(6)]"
                        >
                            {/* Wrapper keeps the icon from matching Card's
                                `has-[>img:first-child]` padding rule */}
                            <div>
                                <Image
                                    src={feature.icon}
                                    alt=""
                                    width={48}
                                    height={48}
                                    className="size-12 rounded-none!"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl leading-none font-normal tracking-[-0.015em] text-[#0c0b0b] xl:text-[32px]">
                                    {feature.title}
                                </h3>
                                <p className="text-base leading-6 text-[#6c696d]">
                                    {feature.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
