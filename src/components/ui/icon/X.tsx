import { iconVariants, type IconProps } from "./variant";

function X({ className, size, ...props }: IconProps) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="x-icon"
            className={iconVariants({ size, className })}
            {...props}
        >
            <path
                d="M7 17L16.8995 7.10051"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7 7L16.8995 16.8995"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default X;
