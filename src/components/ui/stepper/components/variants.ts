import { cva } from "class-variance-authority";

const stepItemVariants = cva("flex items-center", {
  variants: {
    active: {
      true: "font-bold",
      false: "text-muted",
    },
  },
});

const dotVariants = cva("radius-circle flex flex-center border-w-1 border-solid border-white w-px-24 h-px-24", {
  variants: {
    active: {
      true: "bg-primary",
      false: "bg-black-12",
    },
  },
});

export { stepItemVariants, dotVariants };
