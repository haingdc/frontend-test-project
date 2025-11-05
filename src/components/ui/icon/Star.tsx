import { iconVariants, type IconProps } from './variant'

function Star({ className, size, ...props }: IconProps) {
    return (
        <svg
            width={20}
            height={19}
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="star-icon"
            className={iconVariants({ size, className })}
            {...props}
        >
            <path
                d="M9.76363 14.8523L4.20105 17.7568L5.26363 11.605L0.757324 7.24875L6.97603 6.35369L9.75732 0.756836L12.5386 6.35369L18.7573 7.24875L14.251 11.605L15.3136 17.7568L9.76363 14.8523Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={1.51424}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Star
