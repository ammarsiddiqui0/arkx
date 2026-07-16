import SectionHeading from "../ui/SectionHeading"
import TimelineCard from "./TimelineCard"

const timeline = [
    {
        year : "2026",
        title : "Bachelors",
        detail : "Completed Bachelors of Science in IT"
    },
    {
        year : "2026 - present",
        title : "Digital Service providing Studio",
        detail : "Founded DeftStud end currently working on it."
    },
    {
        year : "2026 • May",
        title : "SQL",
        detail : "Built a Data Warehouse project with SQL and currently learning React and modern web development." 
    },
    {
        year : "2024 - 2025",
        title : "Agency",
        detail : "Founded DeftWeb set-up everything and deciding to pause it."
    },
    {
        year : "2024 - 2026",
        title : "University",
        detail : "Started my Uni in IT and began exploring AI prompting on my own. Learned HTML, CSS and JavaScript. Built multiple websites, explored UI/UX with Figma, learned GitHub."
    },
    {
        year : "2023",
        title : "Secondary Higher Education",
        detail : "Completed Higher Education. Ironically scored well in C++, which made me realize grades and interest aren't always connected."
    },
    {
        year : "2022",
        title : "The Loss",
        detail : "Had to Accept the loss of the most important place & things from my life. 'Time Changes everything & we have no choice but to Accept that change and keep moving ahead'."
    },
    {
        year : "2021",
        title : "Start",
        detail : "College introduced C++. Poor teaching made me lose motivation."
    },
    {
        year : "2020",
        title : "Interest and learning",
        detail : "Took interest in Ricing arch linux & started learning Python but quickly lost interest." 
    }
]


function Timeline() {
    return (
        <section className="mt-40">
            <div className="flex flex-col items-center space-y-2">
                <h3 className="text-4xl font-extrabold tracking-wide">
                    Journey
                </h3>
                <div className="border-t w-8 border-zinc-800" />
                <p className="text-[8px] font-bold text-zinc-600 tracking-wider">
                    PROJECTS, LEARNING & MILESTONES
                </p>
            </div>
            <div className="mt-12 relative">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-zinc-800" />
                {timeline.map((event, index) => (
                    <TimelineCard 
                        key={event.year}
                        year={event.year}
                        detail={event.detail}
                        title={event.title}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}
export default Timeline