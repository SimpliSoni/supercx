import { notFound } from "next/navigation";
import Image from "next/image";
import connectToDatabase from "@/lib/mongodb";
import Package from "@/models/Package";

async function getPackage(slug: string) {
    await connectToDatabase();
    const pkg = await Package.findOne({ slug });
    return pkg;
}

export default async function PackageDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const pkg = await getPackage(slug);

    if (!pkg) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="relative h-64 sm:h-96 w-full">
                        <Image
                            src={pkg.imageUrl}
                            alt={pkg.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{pkg.title}</h1>
                                <p className="text-gray-600">{pkg.description}</p>
                            </div>
                            <div className="text-right">
                                {pkg.oldPrice && (
                                    <p className="text-sm text-gray-400 line-through mb-1">
                                        ₹{pkg.oldPrice.toLocaleString()}
                                    </p>
                                )}
                                <p className="text-2xl font-bold text-[#0F3938]">
                                    ₹{pkg.price.toLocaleString()}
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-6">
                            <h2 className="text-xl font-semibold mb-4">Package Details</h2>
                            <div className="prose max-w-none text-gray-600">
                                {/* Placeholder for detailed rich text if we had it */}
                                <p>
                                    Experience the spiritual journey of a lifetime with our comprehensive Umrah package.
                                    This package is designed to provide you with the utmost comfort and convenience,
                                    allowing you to focus entirely on your worship.
                                </p>
                                <ul className="list-disc pl-5 mt-4 space-y-2">
                                    <li>Premium hotel accommodation near Haram</li>
                                    <li>Visa processing included</li>
                                    <li>Full transport services</li>
                                    <li>Guided Ziyarat tours</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button className="px-8 py-3 bg-[#0F3938] text-white font-semibold rounded-xl hover:bg-[#0A2625] transition-colors shadow-lg shadow-[#0F3938]/20">
                                Proceed to Booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
