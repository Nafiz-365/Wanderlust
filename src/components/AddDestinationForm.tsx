"use client";

import * as React from "react";
import { Save, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const categories = ["Beach", "Mountain", "City", "Adventure", "Cultural"];

/* Design tokens for every form control (04_Admin frame):
   48px tall, bg #f8fafc, 1px #eeeeee border, square corners,
   16px side padding, 18px text, #6c696d placeholder. */
const fieldClass =
    "h-14 w-full rounded-none border-[#eeeeee] bg-[#f8fafc] px-4 text-base text-[#0c0b0b] md:text-lg placeholder:text-[#6c696d]";

const fieldLabelClass =
    "text-lg leading-6 font-medium tracking-[-0.03em] text-[#0c0b0b]";

function Field({
    id,
    label,
    children,
}: {
    id: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={id} className={fieldLabelClass}>
                {label}
            </Label>
            {children}
        </div>
    );
}

export function AddDestinationForm() {
    const [category, setCategory] = React.useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name"),
            country: formData.get("country"),
            category: category,
            price: Number(formData.get("price")),
            duration: formData.get("duration"),
            departureDate: formData.get("departureDate"),
            imageUrl: formData.get("imageUrl"),
            description: formData.get("description"),
        };

        try {
            const res = await fetch("http://localhost:8000/add-destination", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error(`Failed to add travel package: ${res.status}`);
            }

            const data = await res.json();
            console.log("Destination added successfully:", data);
        } catch (error) {
            console.error("Error adding destination:", error);
        }
    }

    return (
        <Card className="mx-auto w-full max-w-200 gap-10 rounded-none border border-[#eeeeee] px-4 py-10 shadow-[0_4px_6px_0_rgba(0,0,0,0.12)] ring-0 sm:px-10 [--card-spacing:--spacing(10)]">
            <form
                onSubmit={handleSubmit}
                onReset={() => setCategory(null)}
                className="flex flex-col gap-10"
            >
                <div className="flex flex-col gap-5">
                    <Field id="name" label="Destination Name">
                        <Input
                            id="name"
                            name="name"
                            required
                            placeholder="Bali Paradise"
                            className={fieldClass}
                        />
                    </Field>

                    {/* Two-column rows on sm+ (design: 350 + 20 gap + 350) */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Field id="country" label="Country">
                            <Input
                                id="country"
                                name="country"
                                required
                                placeholder="Indonesia"
                                className={fieldClass}
                            />
                        </Field>
                        <Field id="category" label="Category">
                            <Select
                                name="category"
                                required
                                value={category}
                                onValueChange={setCategory}
                            >
                                <SelectTrigger
                                    id="category"
                                    className="h-14 w-full rounded-none border-[#eeeeee] bg-[#f8fafc] px-4 text-base text-[#0c0b0b] hover:bg-[#f8fafc] md:text-lg data-placeholder:text-[#6c696d] [&_svg]:size-5"
                                >
                                    <SelectValue placeholder="Beach" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((option) => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Field id="price" label="Price (USD)">
                            <Input
                                id="price"
                                name="price"
                                type="number"
                                min="0"
                                required
                                placeholder="e.g., 1299"
                                className={fieldClass}
                            />
                        </Field>
                        <Field id="duration" label="Duration">
                            <Input
                                id="duration"
                                name="duration"
                                required
                                placeholder="e.g., 7 Days/6 Nights"
                                className={fieldClass}
                            />
                        </Field>
                    </div>

                    <Field id="departureDate" label="Departure Date">
                        <Input
                            id="departureDate"
                            name="departureDate"
                            type="date"
                            required
                            className={fieldClass}
                        />
                    </Field>

                    <Field id="imageUrl" label="Image URL">
                        <Input
                            id="imageUrl"
                            name="imageUrl"
                            type="url"
                            placeholder="https://example.com/image.jpg"
                            className={fieldClass}
                        />
                    </Field>

                    <Field id="description" label="Description">
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Describe the travel experience..."
                            className="h-37 field-sizing-fixed resize-none rounded-none border-[#eeeeee] bg-[#f8fafc] px-4 py-4 text-base text-[#0c0b0b] md:text-lg placeholder:text-[#6c696d]"
                        />
                    </Field>
                </div>

                {/* Buttons right-aligned, 56px tall, 16px gap (design) */}
                <div className="flex flex-wrap justify-end gap-4">
                    <Button
                        type="reset"
                        variant="outline"
                        className="h-14 gap-2 rounded-none border-[#ef4444] bg-white px-6 text-base tracking-[0.08px] text-[#ef4444] hover:bg-[#ef4444]/10 hover:text-[#ef4444]"
                    >
                        <Trash className="size-5" />
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        className="h-14 gap-2 rounded-none bg-[#15a1bf] px-6 text-base tracking-[0.08px] text-white hover:bg-[#128da5]"
                    >
                        <Save className="size-5" />
                        Add Travel Package
                    </Button>
                </div>
            </form>
        </Card>
    );
}
