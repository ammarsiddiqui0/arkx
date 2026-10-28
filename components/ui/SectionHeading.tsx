type SectionHeadingProps = {
    children: React.ReactNode
}

function SectionHeading({ children }: SectionHeadingProps){
    return(
        <h2 className="text-4xl font-bold font-mono tracking-wide">
            {children}
        </h2>
    )
}
export default SectionHeading;