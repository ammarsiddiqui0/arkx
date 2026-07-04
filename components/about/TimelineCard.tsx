type TimelineCardProps = {
    year: string
    title: string
}

function TimelineCard({ year , title }: TimelineCardProps) {
    return (
            <div className="border rounded-2xl p-4 mb-4">
                <h3 className="text-xl font-bold">
                    {year}
                </h3>
                <p className="text-gray-300">
                    {title}
                </p>
           </div>
    )
}
export default TimelineCard