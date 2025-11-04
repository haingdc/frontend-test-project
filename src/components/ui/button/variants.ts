import { cva } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex flex-ver-center flex-hor-center gap-px-8 text-nowrap radius-4 font-14 font-w400 outline-none",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground",
                ghost: "",
                primaryRounded: "bg-primary text-primary-foreground radius-100",
                primaryRoundedOutline: "radius-100 border-solid border-w-1 border-primary",
                secondaryRoundedOutline: "radius-100 border-solid border-w-1 border-secondary",
            },
            size: {
                default: "pad-x-16 pad-y-8",
                rounded: "font-16 lh-24 h-px-56",
                icon: "w-px-24 h-px-24 pad-x-0 pad-y-0",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export { buttonVariants };