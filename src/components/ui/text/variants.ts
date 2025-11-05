import { cva } from "class-variance-authority";

const textVariants = cva(
    "font-gilroy text-element",
    {
        variants: {
            variant: {
                default: "text-gray-5",
                bold: "text-white",
            },
            size: {
                default: "text-default",
                medium: "text-medium",
                lg: "text-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export { textVariants };
