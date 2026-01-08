import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Package from "@/models/Package";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await connectToDatabase();
        // Await params to handle both promise (Next 15) and object (older Next)
        const { slug } = await params;

        const pkg = await Package.findOne({ slug });

        if (!pkg) {
            return NextResponse.json({ error: "Package not found" }, { status: 404 });
        }

        return NextResponse.json(pkg);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch package", details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
