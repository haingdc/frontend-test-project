import { type VariantProps } from 'class-variance-authority'
import { textVariants } from './variants'

interface TextProps extends React.ComponentProps<'span'>, VariantProps<typeof textVariants> {
    children: React.ReactNode
}

function Text({
    children,
    variant,
    size,
    className,
    ...props
}: TextProps) {
    return (
        <span 
            className={textVariants({ variant, size, className })} 
            {...props}
        >
            {children}
        </span>
    )
}

export default Text
