import { iconVariants, type IconProps } from './variant'

function Info({ className, size, ...props }: IconProps) {
    return (
        <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="info-icon"
            className={iconVariants({ size, className })}
            {...props}
        >
            <g clipPath="url(#clip0_1_580)">
                <path
                    d="M6.99984 12.8332C10.2215 12.8332 12.8332 10.2215 12.8332 6.99984C12.8332 3.77818 10.2215 1.1665 6.99984 1.1665C3.77818 1.1665 1.1665 3.77818 1.1665 6.99984C1.1665 10.2215 3.77818 12.8332 6.99984 12.8332Z"
                    stroke="currentColor"
                    strokeWidth={1.16667}
                />
                <path
                    d="M7 4.08301V7.58301M7 9.62467V9.91634"
                    stroke="currentColor"
                    strokeWidth={1.16667}
                    strokeLinecap="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_580">
                    <rect width={14} height={14} fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Info
