import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Package from "@/models/Package";

export async function GET() {
    try {
        await connectToDatabase();
        const packages = await Package.find({}).sort({ createdAt: -1 });
        return NextResponse.json(packages);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch packages", details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
