import SectionHeading from "../ui/SectionHeading"

const skills = [
    "HTML", 
    "CSS", 
    "JavaScript", 
    "Python", 
    "SQL", 
    "React", 
    "TypeScript",
]


function Skills() {
    return(
        <section>
            <SectionHeading>
                Skills
            </SectionHeading>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span key={skill} className="border border-white/20 rounded-full px-4 py-1 text-sm text-gray-400 bg-white/5 hover:bg-white/15 hover:border-white/40 transition">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}
export default Skills
