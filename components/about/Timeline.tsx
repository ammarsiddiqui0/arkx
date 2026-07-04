import SectionHeading from "../ui/SectionHeading"
import TimelineCard from "./TimelineCard"

const timeline = [
    {
        year : "2020",
        title : "Started learning Python but quickly lost interest." 
    },
    {
        year : "2021",
        title : "College introduced C++. Poor teaching made me lose motivation."
    },
    {
        year : "2023",
        title : "Ironically scored well in C++, which made me realize grades and interest aren't always connected."
    },
    {
        year : "2024",
        title : "Started university in IT and began exploring AI prompting on my own."
    },
    {
        year : "2025",
        title : "Learned HTML, CSS and JavaScript. Built multiple websites, explored UI/UX with Figma, learned GitHub, and founded DeftWeb before deciding to pause it."
    },
    {
        year : "2026 - Present",
        title : "Built a Data Warehouse project with SQL and currently learning React and modern web development."
    }
]


function Timeline() {
    return (
        <section className="mt-16">
            <SectionHeading>
                Journey
            </SectionHeading>
            <div className="mt-6">
                {timeline.map((event) => (
                    <TimelineCard 
                        key={event.year}
                        year={event.year}
                        title={event.title}
                    />
                ))}
            </div>
        </section>
    )
}
export default Timeline