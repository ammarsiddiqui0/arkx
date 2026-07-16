type PillProps = {
    children: React.ReactNode
    className?: string
}

function Pill({ children, className }: PillProps) {
    return (
        <div className={`border border-white/20 rounded-full px-4 py-1 text-sm text-gray-400 bg-white/5 hover:bg-white/15 hover:border-white/40 transition ${className}`}
        >
            {children}
        </div>
    )
}
export default Pill;