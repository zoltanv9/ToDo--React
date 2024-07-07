export default function Button({children, className, ...props}) {
    return (
        <button
            className={` text-stone-300 hover:text-stone-100 text-xl rounded-xl ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    )
}