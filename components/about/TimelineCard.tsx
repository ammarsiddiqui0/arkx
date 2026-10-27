import type { LucideIcon } from "lucide-react";

type TimelineCardProps = {
    year: string;
    role: string;
    title: string;
    detail: string;
    icon: LucideIcon;
    color: string;
    index: number;
};

function TimelineCard({
    year,
    role,
    title,
    detail,
    icon: Icon,
    color,
    index,
}: TimelineCardProps) {
    const isLeft = index % 2 === 0;

    const content = (
        <div className="w-full min-w-0 max-w-90 rounded-3xl border border-white/10 p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/30">
            {/* Icon + Date Role / Event */}
            <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02]">
                    <Icon className={`h-4 w-4 ${color}`} />
                </div>

                <span>
                    <p className="text-xs font-mono uppercase tracking-[0.15em] text-rose-400">
                        {year}
                    </p>

                    <p className="text-xs font-mono uppercase tracking-[0.12em] text-zinc-500">
                        {role}
                    </p>
                </span>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-xl font-semibold leading-tight text-white">
                {title}
            </h3>

            {/* Description */}
            <div className="mt-4 flex gap-3 font-mono">
                <div className="w-px shrink-0 rounded-full bg-zinc-800" />

                <p className="text-sm leading-6 text-zinc-400">
                    {detail}
                </p>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile */}
            <div className="relative mb-8 pl-6 md:hidden">
                {/* Timeline marker */}
                <div className="absolute left-2 top-6 z-10 h-2 w-2 -translate-x-1/2 rounded-full bg-black ring-1 ring-rose-400" />

                {content}
            </div>

            {/* Desktop */}
            <div className="mb-10 hidden min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start md:grid">
                {/* Left */}
                <div className={isLeft ? "flex justify-end pr-16" : ""}>
                    {isLeft && content}
                </div>

                {/* Center marker */}
                <div className="flex justify-center">
                    <div className="z-10 h-1 w-4 rounded-full bg-black ring-1 ring-rose-400" />
                </div>

                {/* Right */}
                <div className={!isLeft ? "flex justify-start pl-16" : ""}>
                    {!isLeft && content}
                </div>
            </div>
        </>
    );
}

export default TimelineCard;