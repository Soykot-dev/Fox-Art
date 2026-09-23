import { Link, useLoaderData } from "react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";

const Cart = () => {
    const products = useLoaderData();

    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem("cart");

        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Cart from ID 
    const cartProducts = products.filter((product) =>
        cartItems.includes(product.id)
    );

    // Remove product
    const handleRemove = (id) => {
        const updatedCart = cartItems.filter(
            (cartId) => cartId !== id
        );

        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Total price
    const subtotal = cartProducts.reduce(
        (total, product) => total + Number(product.price),
        0
    );

    const shipping = cartProducts.length > 0 ? 80 : 0;

    const total = subtotal + shipping;

    return (
        <div className="min-h-screen py-10">

            {/* Header */}
            <div className="mb-10 text-center">

                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] opacity-50">
                    Your Shopping Bag
                </p>

                <h1 className="text-4xl font-bold tracking-tight">
                    Shopping Cart
                </h1>

                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-base-content" />

                <p className="mx-auto mt-4 max-w-lg text-sm opacity-60">
                    Review your selected items and complete your order.
                </p>

            </div>

            {/* Empty Cart */}
            {cartProducts.length === 0 ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-base-content/10 bg-base-200/30 px-5 text-center">

                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-base-200">
                        <ShoppingBag
                            size={38}
                            strokeWidth={1.5}
                            className="opacity-50"
                        />
                    </div>

                    <h2 className="text-2xl font-bold">
                        Your cart is empty
                    </h2>

                    <p className="mt-2 max-w-md text-sm opacity-50">
                        Looks like you haven't added anything to your cart yet.
                        Explore our collection and find something you love.
                    </p>

                    <Link
                        to="/"
                        className="btn btn-neutral mt-6 rounded-lg px-6"
                    >
                        Continue Shopping
                    </Link>

                </div>
            ) : (

                /* Cart Content */
                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

                    {/* Products */}
                    <div className="space-y-4">

                        {cartProducts.map((product) => (

                            <div
                                key={product.id}
                                className="
                                    group
                                    flex
                                    gap-4
                                    rounded-2xl
                                    border
                                    border-base-content/10
                                    bg-base-100
                                    p-4
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:shadow-lg
                                "
                            >

                                {/* Image */}
                                <Link
                                    to={`/ProductDetails/${product.id}`}
                                    className="shrink-0"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="
                                            h-28
                                            w-28
                                            rounded-xl
                                            object-cover
                                            transition
                                            duration-300
                                            group-hover:scale-[1.02]
                                        "
                                    />
                                </Link>

                                {/* Product Info */}
                                <div className="flex min-w-0 flex-1 flex-col justify-between">

                                    <div>

                                        <p className="text-xs font-medium uppercase tracking-wider opacity-40">
                                            {product.category}
                                        </p>

                                        <Link
                                            to={`/ProductDetails/${product.id}`}
                                        >
                                            <h3 className="mt-1 truncate text-lg font-semibold transition-colors hover:text-[#DF551C]">
                                                {product.name}
                                            </h3>
                                        </Link>

                                        <div className="mt-1 flex items-center gap-1 text-sm">
                                            <span className="text-warning">
                                                ★
                                            </span>

                                            <span>
                                                {product.rating}
                                            </span>

                                            <span className="opacity-40">
                                                ({product.reviews})
                                            </span>
                                        </div>

                                    </div>

                                    <div className="mt-3 flex items-center justify-between">

                                        {/* Price */}
                                        <div className="flex items-center gap-2">

                                            <span className="text-lg font-bold">
                                                ৳{product.price}
                                            </span>

                                            {product.oldPrice && (
                                                <span className="text-xs line-through opacity-40">
                                                    ৳{product.oldPrice}
                                                </span>
                                            )}

                                        </div>

                                        {/* Remove */}
                                        <button
                                            onClick={() =>
                                                handleRemove(product.id)
                                            }
                                            className="
                                                btn
                                                btn-ghost
                                                btn-sm
                                                gap-1
                                                rounded-lg
                                                text-error
                                                hover:bg-error/10
                                            "
                                        >
                                            <Trash2 size={16} />
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                        {/* Continue Shopping */}
                        <Link
                            to="/"
                            className="btn btn-ghost mt-2 rounded-lg"
                        >
                            ← Continue Shopping
                        </Link>

                    </div>

                    {/* Order Summary */}
                    <div className="lg:sticky lg:top-24 lg:self-start">

                        <div className="rounded-2xl border border-base-content/10 bg-base-200/40 p-6">

                            <h2 className="text-xl font-bold">
                                Order Summary
                            </h2>

                            <div className="my-5 h-px bg-base-content/10" />

                            {/* Subtotal */}
                            <div className="flex justify-between text-sm">
                                <span className="opacity-60">
                                    Subtotal
                                </span>

                                <span className="font-medium">
                                    ৳{subtotal}
                                </span>
                            </div>

                            {/* Shipping */}
                            <div className="mt-3 flex justify-between text-sm">
                                <span className="opacity-60">
                                    Shipping
                                </span>

                                <span className="font-medium">
                                    ৳{shipping}
                                </span>
                            </div>

                            <div className="my-5 h-px bg-base-content/10" />

                            {/* Total */}
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold">
                                    Total
                                </span>

                                <span className="text-2xl font-bold text-[#DF551C]">
                                    ৳{total}
                                </span>
                            </div>

                            {/* Checkout */}
                            <button
                                className="
                                    btn
                                    btn-neutral
                                    mt-6
                                    w-full
                                    rounded-xl
                                    text-base
                                "
                            >
                                Proceed to Checkout
                            </button>

                            <p className="mt-4 text-center text-xs opacity-40">
                                Secure checkout • Easy returns
                            </p>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
};

export default Cart;