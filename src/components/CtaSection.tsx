import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaSection() {
    return (
        <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-30">
            <Image
                src="/images/CTA.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(295deg,#1a1a1a_0%,rgba(26,26,26,0.4)_33%,rgba(26,26,26,0.4)_46%,#1a1a1a_100%)]" />
            <div className="relative mx-auto flex w-full max-w-360 flex-col items-center px-4 text-center sm:px-8 lg:px-20">
                <h2 className="text-4xl leading-none font-normal tracking-[-0.03em] text-white capitalize sm:text-5xl lg:text-[60px]">
                    Ready to Start Your Journey?
                </h2>
                <p className="mt-3 text-xl leading-[1.6] tracking-[-0.03em] text-[#edfcff]">
                    Join thousands of travelers who have discovered the world
                    with us
                </p>
                <Button
                    render={<Link href="/destinations" />}
                    nativeButton={false}
                    className="mt-10 h-14 gap-6 rounded-none bg-white px-6 text-base tracking-[0.08px] font-medium text-[#0c0b0b] hover:bg-[#edfcff]"
                >
                    BOOK YOUR TRIP TODAY
                    <ArrowRight className="size-5" />
                </Button>
            </div>
        </section>
    );
}
