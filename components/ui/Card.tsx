type CardProps = {
    children: React.ReactNode
    className?: string
}

function Card({ children, className }: CardProps) {
    return (
        <div className={`rounded-4xl border border-zinc-900 bg-white/0 p-8 transition-all duration-300 ${className}`}
        >
            {children}
        </div>
    )
}
export default Card;