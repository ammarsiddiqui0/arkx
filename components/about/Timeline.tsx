import SectionHeading from "../ui/SectionHeading"
import TimelineCard from "./TimelineCard"

import {
    BriefcaseBusiness,
    GraduationCap,
    Database,
    Building2,
    Code2,
    School,
    Laptop,
} from "lucide-react";


const timeline = [
    {
        year: "2026",
        role: "UnderGraduate Degree",
        title: "BACHELORS [BSC.IT]",
        detail: "Completed Bachelors of Science in IT.",
        icon: GraduationCap,
        color: "text-emerald-400",
    },
    {
        year: "2026 - present",
        role: "Digital Service Studio",
        title: "DEFTSTUD",
        detail: "Founded DeftStud end currently working on it.",
        icon: BriefcaseBusiness,
        color: "text-blue-400",
    },
    {
        year: "2026 • May",
        role: "Database",
        title: "SQL",
        detail: "Built a Data Warehouse project with SQL and currently learning React and modern web development.",
        icon: Database,
        color: "text-cyan-400",
    },
    {
        year: "2024 - 2025",
        role: "Agency",
        title: "DEFTWEB",
        detail: "Founded DeftWeb set-up everything and deciding to pause it.",
        icon: Building2,
        color: "text-purple-400",
    },
    {
        year: "2024 — 2026",
        role: "University",
        title: "IT & DEVELOPMENT",
        detail: "Started university in IT and began exploring AI prompting, web development, UI/UX, GitHub, and Figma.",
        icon: Code2,
        color: "text-rose-400",
    },
    {
        year: "2023",
        role: "Secondary Higher Education",
        title: "HIGHER EDUCATION",
        detail: "Completed Higher Education. Ironically scored well in C++, which made me realize grades and interest aren't always connected.",
        icon: School,
        color: "text-amber-400",
    },
    {
        year: "2021",
        role: "College",
        title: "SSC & COLLEGE",
        detail: "College introduced C++. Poor teaching made me lose motivation.",
        icon: Laptop,
        color: "text-indigo-400",
    },
]


function Timeline() {
    return (
        <section className="mt-40">
            <div className="flex flex-col items-center space-y-2">
                <SectionHeading>
                    Journey
                </SectionHeading>
                <div className="border-t w-8 border-zinc-800" />
                <p className="text-[8px] font-bold font-mono text-zinc-600 tracking-wider">
                    PROJECTS, LEARNING & MILESTONES
                </p>
            </div>
            <div className="mt-20 relative">
                {/* Continuous mobile line */}
                <div className="absolute left-2 top-0 bottom-0 w-px bg-zinc-800 md:hidden" />

                {/* Continuous desktop line */}
                <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-zinc-800 md:block" />
                {timeline.map((event, index) => (
                    <TimelineCard 
                        key={event.title}
                        year={event.year}
                        role={event.role}
                        title={event.title}
                        detail={event.detail}
                        icon={event.icon}
                        color={event.color}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}
export default Timeline