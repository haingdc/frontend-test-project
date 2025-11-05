import clsx from 'clsx'
import './functionality-frame.scss'

type FunctionalityCardContainerProps = React.ComponentProps<'div'>

function FunctionalityCardContainer(props: FunctionalityCardContainerProps) {
    return <div className="functionality-card-container p-absolut" {...props} />
}

type FunctionalityFrameProps = React.ComponentProps<'div'> & {
    src?: React.ComponentProps<'img'>['src']
    alt?: React.ComponentProps<'img'>['alt']
    card?: React.ReactNode
}
function FunctionalityFrame({
    src,
    alt,
    card,
    className,
    ...props
}: FunctionalityFrameProps) {
    return (
        <div className={clsx("functionality-frame flex", className)} {...props}>
            <div className="image-container bg-gray-2">
                <img src={src} alt={alt} />
            </div>
            {card ? (
                <FunctionalityCardContainer>{card}</FunctionalityCardContainer>
            ) : null}
        </div>
    )
}

export default FunctionalityFrame
