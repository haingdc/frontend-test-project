import { iconVariants, type IconProps } from "./variant";

function ChevronDown({ className, size, ...props }: IconProps) {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconVariants({ size, className })}
            {...props}
        >
            <path
                d="M11.3332 6.66667L7.99984 10L4.6665 6.66667"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default ChevronDown;
