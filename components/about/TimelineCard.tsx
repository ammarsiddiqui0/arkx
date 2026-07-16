type TimelineCardProps = {
    year: string
    title: string
    detail: string
    index: number
}


function TimelineCard({ year , title ,detail, index }: TimelineCardProps) {
    const isLeft = index % 2 == 0
    return (
            <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-30">
                <>
                    <div className={isLeft ? "flex justify-end pr-24" : ""}>
                        {isLeft && (
                            <div className="border border-white/10 rounded-3xl p-6 w-90 transition-all duration-300 hover:border-emerald-400/30 hover:-translate-y-1">
                                <div className="w-10 h-0.5 rounded-full bg-emerald-400 mb-4" />
                                <div>
                                    <p className="text-sm text-emerald-400">
                                        {year}
                                    </p>
                                    <h3 className="mt-2 text-xl font-semibold text-white leading-tight">
                                        {title}
                                    </h3>
                                </div>
                                <p>
                                    {detail}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <div className="h-1 w-4 ring-1 ring-emerald-400 ring-border rounded-full bg-black z-10" />
                    </div>

                    <div className={!isLeft ? "flex justify-start pl-24" : ""}>
                        {!isLeft && (
                            <div className="border border-white/10 rounded-3xl p-6 w-90 transition-all duration-300 hover:border-emerald-400/30 hover:-translate-y-1">
                                <div className="w-10 h-0.5 rounded-full bg-emerald-400 mb-4" />
                                <div>
                                    <p className="text-sm text-emerald-400">
                                        {year}
                                    </p>
                                    <h3 className="mt-2 text-xl font-semibold text-white leading-tight">
                                        {title}
                                    </h3>
                                </div>
                                <p>
                                    {detail}
                                </p>
                            </div>
                        )}
                    </div>
                </>
           </div>
    )
}
export default TimelineCard