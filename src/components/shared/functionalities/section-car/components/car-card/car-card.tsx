import { CircleCheck } from '../../../../../ui/icon';
import './car-card.scss'
type CardCardAvatarProps = React.ComponentProps<'div'> & {
    src?: string,
    alt?: string
}
function CarCardAvatar({ src, alt, ...props }: CardCardAvatarProps) {
    return (
        <div className="car-card-avatar w-px-64 h-px-64 radius-8 bg-gray-2" {...props}>
            {src ? <img src={src} alt={alt} /> : null}
        </div>
    )
}

function CarCardText({ text1, text2 }: { text1?: string; text2?: string }) {
    return (
        <div className="car-card-text flex flex-direction-col flex-1">
            <div className="text1 text-black">{text1}</div>
            <div className="text2 text-black-alpha-40">{text2}</div>
        </div>
    )
}

type CarCardProps = React.ComponentProps<'div'> & {
    avatarElement?: React.ReactElement<CardCardAvatarProps>
    text1?: string
    text2?: string
}
function CarCard({ avatarElement, text1, text2, ...props }: CarCardProps) {
    return (
        <div className="car-card flex flex-direction-row flex-ver-center radius-12 bg-white card-shadow" {...props}>
            {avatarElement}
            <CarCardText text1={text1} text2={text2} />
            <CircleCheck className="car-card-icon text-primary" />
        </div>
    )
}

export default CarCard
export { CarCardAvatar }
