import { cva } from "class-variance-authority";

const headingVariants = cva(
    "font-gilroy bg-heading text-center",
    {
        variants: {
            variant: {
                h1: "heading",
                h2: "heading-2",
            },
        },
        defaultVariants: {
            variant: "h1",
        },
    },
);

export { headingVariants };