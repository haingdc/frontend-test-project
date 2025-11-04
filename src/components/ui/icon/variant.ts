import { cva, type VariantProps } from "class-variance-authority"

const iconVariants = cva("icon", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "w-px-24 h-px-24",
      sm: "w-px-16 h-px-16",
      lg: "w-px-32 h-px-32",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

type IconProps = React.ComponentProps<"svg"> &
  VariantProps<typeof iconVariants> & {
    asChild?: boolean
  }

export { iconVariants }
export type { IconProps }

