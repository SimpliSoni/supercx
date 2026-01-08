import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Package from "@/models/Package";
import slugify from "slugify";

const packages = [
    {
        title: "15 Days Umrah Package",
        description: "Premium hotel near Masjid al-Haram with best rates. Includes flights and visa.",
        price: 85000,
        oldPrice: 105000,
        imageUrl: "/packages/luxury.jpg",
    },
    {
        title: "Economy 20 Days Umrah",
        description: "Affordable package with shifting hotel. Best for budget travelers.",
        price: 65000,
        oldPrice: 80000,
        imageUrl: "/packages/economy.jpg",
    },
    {
        title: "Ramadan Special Package",
        description: "Full month of Ramadan in Makkah and Madinah. Experience the spirituality.",
        price: 150000,
        oldPrice: 180000,
        imageUrl: "/packages/ramadan.jpg",
    },
];

export async function GET() {
    try {
        await connectToDatabase();
        await Package.deleteMany({}); // Clear existing data

        const packagesWithSlugs = packages.map((pkg) => ({
            ...pkg,
            slug: slugify(pkg.title, { lower: true, strict: true }),
        }));

        await Package.insertMany(packagesWithSlugs);

        return NextResponse.json({ message: "Database seeded successfully" });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to seed database", details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
