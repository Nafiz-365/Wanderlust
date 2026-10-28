import type { Metadata } from "next";
import { AddDestinationForm } from "@/components/AddDestinationForm";

export const metadata: Metadata = {
    title: "Add New Travel Package",
};

export default function AddDestinationPage() {
    return (
        <main className="bg-white py-16 sm:py-20">
            <div className="mx-auto w-full max-w-360 px-4 sm:px-8 lg:px-20">
                <h1 className="text-4xl leading-none font-normal tracking-[-0.03em] text-[#0c0b0b] capitalize sm:text-5xl lg:text-[60px]">
                    Add New Travel Package
                </h1>

                {/* Design heading→card gap: 88px (includes the blank
                    subtitle slot); 40px on small screens */}
                <div className="mt-10 lg:mt-22">
                    <AddDestinationForm />
                </div>
            </div>
        </main>
    );
}
