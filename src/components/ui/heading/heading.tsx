import './heading.scss'
import { headingVariants } from './variants'
import type { VariantProps } from 'class-variance-authority'

type HeadingProps = React.ComponentProps<'h1'> &
    VariantProps<typeof headingVariants>

function Heading({ variant, children, className, ...props }: HeadingProps) {
    // TODO: we should support other heading levels than fixed h1
    return (
        <h1
            className={headingVariants({ variant, className })}
            {...props}
        >
            {children}
        </h1>
    )
}

export default Heading
