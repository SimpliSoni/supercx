import Link from "next/link";
import Image from "next/image";

interface PackageCardProps {
    title: string;
    description: string;
    price: number;
    oldPrice?: number;
    imageUrl: string;
    slug: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
    title,
    description,
    price,
    oldPrice,
    imageUrl,
    slug,
}) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative h-48 w-full">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        {oldPrice && (
                            <span className="text-xs text-gray-400 line-through">
                                ₹{oldPrice.toLocaleString()}
                            </span>
                        )}
                        <span className="text-lg font-bold text-gray-900">
                            ₹{price.toLocaleString()}
                        </span>
                    </div>
                    <Link
                        href={`/package/${slug}`}
                        className="px-4 py-2 bg-[#0F3938] text-white text-sm font-medium rounded-lg hover:bg-[#0A2625] transition-colors"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
