import './plane-card.scss'
import { Star } from '../../../../../ui/icon'

export interface PlaneCardProps {
    title?: string
    lastingText?: string
}

function PlaneCardTitle({ children }: { children?: string }) {
    return <div className="plane-card-title text-center text-gray-10 font-w600 font-upper">{children}</div>
}

function PlaneCardLastText({ children }: { children?: string }) {
    return <div className="plane-card-last-text text-center text-gray-10 font-w600">{children}</div>
}

function PlaneCardStars() {
    return (
        <div className="plane-card-stars flex gap-px-8 text-primary">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

function PlaneCard({ title, lastingText }: PlaneCardProps) {
    return (
        <div className="plane-card flex flex-direction-col flex-ver-center radius-12 bg-white">
            <PlaneCardTitle>{title}</PlaneCardTitle>
            <PlaneCardStars />
            <PlaneCardLastText>{lastingText}</PlaneCardLastText>
        </div>
    )
}

export default PlaneCard
