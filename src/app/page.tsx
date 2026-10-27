import { Banner } from "@/components/Banner";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CtaSection } from "@/components/CtaSection";

export default function Home() {
    return (
        <main>
            <Banner />
            <WhyChooseUs />
            <Testimonials />
            <CtaSection />
            {/* Other homepage sections */}
        </main>
    );
}
