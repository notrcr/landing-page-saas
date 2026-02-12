
interface ButtonProps { 
    className?: string;
    children: React.ReactNode;
    OnClick?: () => void
}

export const Button = ({ className = "", children, OnClick }: ButtonProps) => {
    return (
        <button
            onClick={OnClick}
            className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border 
                        dark:bg-violet-600 dark:border-violet-600 bg-violet-600 border-transparent cursor-pointer 
                        ${className}`}
        >
            <span className="relative z-10 text-white"> {children}</span>
        </button>
    );
};
