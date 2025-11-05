import './text.scss'
import { type VariantProps } from 'class-variance-authority'
import { textVariants } from './variants'

type TextElement = 'span' | 'p' | 'div'

interface BaseTextProps extends VariantProps<typeof textVariants> {
    children: React.ReactNode
    as?: TextElement
    className?: string
}

type TextProps = BaseTextProps &
    Omit<React.HTMLAttributes<HTMLElement>, keyof BaseTextProps>

function Text({
    children,
    variant,
    size,
    className,
    as = 'span',
    ...props
}: TextProps) {
    const Component = as
    return (
        <Component
            className={textVariants({ variant, size, className })}
            {...props}
        >
            {children}
        </Component>
    )
}

export default Text
