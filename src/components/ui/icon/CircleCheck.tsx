import { iconVariants, type IconProps } from './variant'

function CircleCheck({ className, size, ...props }: IconProps) {
    return (
        <svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconVariants({ size, className })}
            {...props}
        >
            <rect width={22} height={22} rx={11} fill="currentColor" />
            <path
                d="M14.3332 8.5L9.74984 13.0833L7.6665 11"
                stroke="white"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default CircleCheck
