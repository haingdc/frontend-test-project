import clsx from 'clsx'
import { CircleDot, Info, MapPin } from '../../../../../ui/icon'
import type { IconProps } from '../../../../../ui/icon/variant'
import './locate-card.scss'

function LocateTime() {
    return <div className="locate-time text-black">14 octobre à 12h30</div>
}

function LocateNotice({ children }: { children: string }) {
    return (
        <div className="locate-notice flex flex-ver-center bg-gray-2 text-gray-10">
            <Info />
            {children}
        </div>
    )
}

function Location({ title, address }: { title: string; address: string }) {
    return (
        <div className="locate-location flex flex-direction-col">
            <div className="location-title text-black-alpha-40 font-upper">{title}</div>
            <div className="location-address text-gray-10">{address}</div>
        </div>
    )
}

type LocatePointProps = React.ComponentProps<'div'> & {
    iconLabel?: React.ReactElement<IconProps>
    title: string
    address: string
    hasLine?: boolean
}

function LocatePoint({ title, address, iconLabel, hasLine }: LocatePointProps) {
    return (
        <div
            className={clsx('locate-point flex', {
                'locate-point-with-line': hasLine,
            })}
        >
            <div className="icon-label">
                {iconLabel ? (
                    <div className="icon-container flex flex-center">
                        {iconLabel}
                    </div>
                ) : null}
                <div className="root">
                    {hasLine && <div className="line"></div>}
                </div>
            </div>
            <Location title={title} address={address}></Location>
        </div>
    )
}

function LocateCard() {
    return (
        <div className="locate-card bg-white flex flex-direction-col">
            <LocateTime />
            <LocateNotice>À payer</LocateNotice>
            <div className="locate-points flex flex-direction-col">
                <LocatePoint
                    title="Prise en charge"
                    address="3 Boulevard des Capucines, 75002 Paris"
                    iconLabel={<CircleDot className="text-black" />}
                    hasLine={true}
                />
                <LocatePoint
                    title="Destination"
                    address="21 Rue de Rivoli, 75004 Paris"
                    iconLabel={<MapPin className="text-primary" />}
                />
            </div>
        </div>
    )
}

export default LocateCard
