import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router";
import { CardBody, CardContainer, CardItem } from "../UI/3d-card";


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
        id,
    } = shirt;

    const handleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log("Added to wishlist:", id);
    };

    const handleCart = (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log("Added to cart:", id);
    };

    return (
        <CardContainer
            containerClassName="w-full"
            className="group"
        >
            <CardBody
                className="
                    relative
                    overflow-hidden
                    rounded-xl
                    border-[1.5px]
                    border-base-content/10
                    bg-base-100
                    shadow-sm
                    transition-shadow
                    duration-300
                    group-hover:shadow-xl
                "
            >

                {/* Entire Card Navigation */}
                <Link
                    to={`/ProductDetails/${id}`}
                    className="block"
                >

                    {/* Product Image */}
                    <div className="relative overflow-hidden rounded-t-xl">

                        <CardItem
                            translateZ={40}
                            className="w-full"
                        >
                            <img
                                src={image}
                                alt={name}
                                className="
                                    aspect-square
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                "
                            />
                        </CardItem>

                        {/* New Badge */}
                        {isNew && (
                            <CardItem
                                translateZ={60}
                                className="
                                    absolute
                                    left-4
                                    top-4
                                    rounded-full
                                    bg-base-100
                                    px-3
                                    py-1
                                    text-xs
                                    font-semibold
                                    shadow-md
                                "
                            >
                                New
                            </CardItem>
                        )}

                        {/* Wishlist Button */}
                        <button
                            type="button"
                            onClick={handleWishlist}
                            aria-label="Add to wishlist"
                            className="
                                btn
                                btn-circle
                                btn-sm
                                absolute
                                right-4
                                top-4
                                border-0
                                bg-base-100/90
                                shadow-md
                                backdrop-blur-sm
                                transition
                                duration-300
                                hover:scale-110
                                hover:bg-base-100
                            "
                        >
                            <Heart
                                size={18}
                                strokeWidth={2}
                            />
                        </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-3">

                        {/* Category */}
                        <CardItem
                            translateZ={20}
                            as="p"
                            className="
                                mb-1
                                text-xs
                                font-medium
                                uppercase
                                tracking-wider
                                opacity-50
                            "
                        >
                            {category}
                        </CardItem>

                        {/* Product Name */}
                        <CardItem
                            translateZ={30}
                            as="h3"
                            className="
                                truncate
                                text-2xl
                                font-medium
                                text-[#DF551C]
                                transition-colors
                                duration-500
                                group-hover:text-green-900
                            "
                        >
                            {name}
                        </CardItem>

                        {/* Rating */}
                        <CardItem
                            translateZ={20}
                            className="mt-2"
                        >
                            <div className="flex items-center gap-1 text-sm">

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
                        </CardItem>

                        {/* Price + Cart */}
                        <div className="mt-2 flex items-center justify-between gap-3">

                            {/* Price */}
                            <CardItem
                                translateZ={30}
                                className="flex items-center gap-2"
                            >
                                <span className="text-xl font-bold">
                                    ৳{price}
                                </span>

                                {oldPrice && (
                                    <span className="text-sm line-through opacity-40">
                                        ৳{oldPrice}
                                    </span>
                                )}
                            </CardItem>

                            {/* Add To Cart */}
                            <button
                                type="button"
                                onClick={handleCart}
                                className="
                                    btn
                                    btn-neutral
                                    btn-sm
                                    gap-2
                                    rounded-[7px]
                                    px-4
                                    transition-all
                                    duration-300
                                    hover:bg-green-900
                                "
                            >
                                <ShoppingBag size={16} />

                                <span className="hidden sm:inline">
                                    Add to Cart
                                </span>
                            </button>

                        </div>

                    </div>

                </Link>

            </CardBody>
        </CardContainer>
    );
};

export default Shirt;