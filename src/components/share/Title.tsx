interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

export const Title = ({ children, className }: TitleProps) => {
    return (
        <h2 className={`text-heading-1 font-semibold text-3xl sm:text-4xl lg:text-6xl ${className}`}>
            {children}
        </h2>
    )
}