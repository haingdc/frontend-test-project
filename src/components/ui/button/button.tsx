import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./variants";



function Button({
    className,
    variant,
    size,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    return (
        <button
            data-slot="button"
            className={buttonVariants({ variant, size, className })}
            {...props}
        />
    );
}

export { Button };
