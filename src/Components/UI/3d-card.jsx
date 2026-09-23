import { useRef, useState } from "react";


export const CardContainer = ({
    children,
    className = "",
    containerClassName = "",
}) => {
    const containerRef = useRef(null);

    const [transform, setTransform] = useState(
        "rotateX(0deg) rotateY(0deg) scale(1)"
    );

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        setTransform(
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
        );
    };

    const handleMouseLeave = () => {
        setTransform("rotateX(0deg) rotateY(0deg) scale(1)");
    };

    return (
        <div
            ref={containerRef}
            className={`flex items-center justify-center ${containerClassName}`}
            style={{
                perspective: "1000px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`w-full transition-transform duration-200 ease-out ${className}`}
                style={{
                    transform,
                    transformStyle: "preserve-3d",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export const CardBody = ({
    children,
    className = "",
}) => {
    return (
        <div
            className={`relative w-full rounded-xl ${className}`}
            style={{
                transformStyle: "preserve-3d",
            }}
        >
            {children}
        </div>
    );
};

export const CardItem = ({
    children,
    as: Tag = "div",
    translateZ = 0,
    className = "",
    ...props
}) => {
    return (
        <Tag
            className={className}
            {...props}
            style={{
                transform: `translateZ(${translateZ}px)`,
                transformStyle: "preserve-3d",
            }}
        >
            {children}
        </Tag>
    );
};