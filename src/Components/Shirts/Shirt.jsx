import { Heart, ShoppingBag, Star } from "lucide-react";

const Shirt = ({ shirt }) => {
    const {
        image,
        name,
        category,
        price,
        oldPrice,
        rating,
        reviews,
        isNew,
    } = shirt;

    return (
        <div className="group border relative overflow-hidden rounded-2xl bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Product Image */}
            <div className="relative overflow-hidden">

                <img
                    className="aspect-4/4 w-full object-cover transition duration-500 group-hover:scale-105"
                    src={image}
                    alt={name}
                />

                {/* New Badge */}
                {isNew && (
                    <span className="absolute left-4 top-4 rounded-full bg-base-100 px-3 py-1 text-xs font-semibold shadow-sm">
                        New
                    </span>
                )}

                {/* Wishlist Button */}
                <button
                    className="btn btn-circle btn-sm absolute right-4 top-4 bg-base-100/90 shadow-md backdrop-blur-sm transition hover:scale-110 hover:bg-base-100"
                    aria-label="Add to wishlist"
                >
                    <Heart size={18} strokeWidth={2} />
                </button>
            </div>

            {/* Product Info */}
            <div className="p-4">

                {/* Category */}
                <p className="mb-1 text-xs font-medium uppercase tracking-wider opacity-50">
                    {category}
                </p>

                {/* Name */}
                <h3 className="truncate text-lg font-semibold">
                    {name}
                </h3>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1 text-sm">
                    <Star
                        size={15}
                        fill="currentColor"
                        className="text-warning"
                    />

                    <span className="font-medium">
                        {rating}
                    </span>

                    <span className="opacity-50">
                        ({reviews})
                    </span>
                </div>

                {/* Price + Cart */}
                <div className="mt-4 flex items-center justify-between gap-3">

                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold">
                            ৳{price}
                        </span>

                        {oldPrice && (
                            <span className="text-sm line-through opacity-40">
                                ৳{oldPrice}
                            </span>
                        )}
                    </div>

                    <button className="btn btn-neutral btn-sm gap-2 rounded-xl px-4">
                        <ShoppingBag size={16} />
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Shirt;