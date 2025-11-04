import clsx from 'clsx'
import './heading.scss'
export type HeadingProps = {
    children?: React.ReactNode
} & React.ComponentProps<"h1">

function Heading({ children, className, ...props }: HeadingProps) {
    return (
        <h1 className={clsx("heading font-gilroy bg-heading text-center", className)} {...props}>
            {children}
        </h1>
    )
}

export default Heading
