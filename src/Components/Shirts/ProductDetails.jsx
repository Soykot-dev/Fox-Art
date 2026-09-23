import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import {
    ArrowLeft,
    Heart,
    Minus,
    Plus,
    ShoppingBag,
    Star,
} from "lucide-react";
import { handleAddToCart, handleAddToWhiteList } from "../../Utility/handleLocalStorage";

const ProductDetails = () => {
    const { id } = useParams();
    const products = useLoaderData();
    const product = products.find((item) => item.id === Number(id));

    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]);
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="mx-auto flex min-h-[60vh] max-w-[1440px] items-center justify-center px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Product Not Found</h2>

                    <p className="mt-2 opacity-60">
                        Sorry, this product doesn't exist.
                    </p>

                    <Link
                        to="/shop"
                        className="btn btn-neutral mt-6 rounded-full px-6"
                    >
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    const increaseQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <main className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">

            {/* Back */}
            <Link
                to="/shop"
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium opacity-60 transition hover:opacity-100"
            >
                <ArrowLeft size={17} />
                Back to Shop
            </Link>

            {/* Product */}
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

                {/* Product Image */}
                <div className="overflow-hidden rounded-3xl bg-base-200">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="aspect-square w-full object-cover"
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-center">

                    {/* Category */}
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] opacity-50">
                        {product.category}
                    </p>

                    {/* Name */}
                    <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        {product.name}
                    </h1>

                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <Star
                                size={17}
                                fill="currentColor"
                                className="text-warning"
                            />
                            <span className="font-medium">
                                {product.rating}
                            </span>
                        </div>

                        <span className="opacity-40">•</span>

                        <span className="text-sm opacity-60">
                            {product.reviews} Reviews
                        </span>
                    </div>

                    {/* Price */}
                    <div className="mt-6 flex items-center gap-3">
                        <span className="text-3xl font-bold">
                            ৳{product.price}
                        </span>

                        {product.oldPrice && (
                            <span className="text-lg line-through opacity-40">
                                ৳{product.oldPrice}
                            </span>
                        )}

                        {product.discount && (
                            <span className="rounded-full bg-base-200 px-3 py-1 text-xs font-semibold">
                                {product.discount}% OFF
                            </span>
                        )}
                    </div>

                    <div className="my-7 h-px bg-base-300" />

                    {/* Color */}
                    <div>
                        <div className="mb-3 flex items-center justify-between">
                            <span className="font-semibold">Color</span>

                            <span className="text-sm opacity-60">
                                {selectedColor}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`rounded-full border px-4 py-2 text-sm transition ${selectedColor === color
                                        ? "border-base-content bg-base-content text-base-100"
                                        : "border-base-300 hover:border-base-content"
                                        }`}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Size */}
                    <div className="mt-6">
                        <div className="mb-3 flex items-center justify-between">
                            <span className="font-semibold">Size</span>

                            <button className="text-sm underline opacity-60 hover:opacity-100">
                                Size Guide
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`min-w-12 rounded-lg border px-4 py-2 text-sm font-medium transition ${selectedSize === size
                                        ? "border-base-content bg-base-content text-base-100"
                                        : "border-base-300 hover:border-base-content"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity + Cart */}
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                        {/* Quantity */}
                        <div className="flex h-12 items-center justify-between rounded-xl border border-base-300 px-3 sm:w-36">
                            <button
                                onClick={decreaseQuantity}
                                disabled={quantity === 1}
                                className="btn btn-ghost btn-sm btn-circle"
                            >
                                <Minus size={16} />
                            </button>

                            <span className="font-semibold">
                                {quantity}
                            </span>

                            <button
                                onClick={increaseQuantity}
                                disabled={quantity === product.stock}
                                className="btn btn-ghost btn-sm btn-circle"
                            >
                                <Plus size={16} />
                            </button>
                        </div>

                        {/* Add Cart */}
                        <button onClick={() => handleAddToCart(id)} className="btn btn-neutral h-12 flex-1 rounded-xl">
                            <ShoppingBag size={18} />
                            Add to Cart
                        </button>

                        {/* Wishlist */}
                        <button
                            onClick={() => handleAddToWhiteList(id)}
                            className="btn btn-outline btn-square h-12 w-12 rounded-xl"
                            aria-label="Add to wishlist"
                        >
                            <Heart size={19} />
                        </button>
                    </div>

                    {/* Stock */}
                    <p className="mt-4 text-sm">
                        {product.stock > 0 ? (
                            <span className="text-success">
                                ● In stock — {product.stock} available
                            </span>
                        ) : (
                            <span className="text-error">
                                ● Out of stock
                            </span>
                        )}
                    </p>

                    {/* Extra Info */}
                    <div className="mt-8 grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-base-200 p-4">
                            <p className="text-sm font-semibold">
                                Premium Quality
                            </p>
                            <p className="mt-1 text-xs opacity-60">
                                Made for everyday comfort
                            </p>
                        </div>

                        <div className="rounded-xl bg-base-200 p-4">
                            <p className="text-sm font-semibold">
                                Easy Returns
                            </p>
                            <p className="mt-1 text-xs opacity-60">
                                Hassle-free return policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Description */}
            <section className="mt-16 border-t border-base-300 pt-12">
                <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] opacity-50">
                        Product Details
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                        Built for your everyday style.
                    </h2>

                    <p className="mt-4 leading-7 opacity-60">
                        The {product.name} is designed with a clean,
                        contemporary look that fits effortlessly into your
                        everyday wardrobe. Pair it with jeans, cargos, or
                        shorts for a relaxed streetwear look.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default ProductDetails;
