import { cva } from "class-variance-authority";

const textVariant = cva(
    "font-gilroy",
    {
        variants: {
            variant: {
                default: "text-white",
                bold: "text-gray-5"
            },
            size: {
                default: "font-16 lh-24 font-w400",
                 // As in Figma, It's 500 but we don'thave full version of Gilroy font, so using 700
                lg: "font-32 lh-40 font-w700",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export { textVariant as textVariants };