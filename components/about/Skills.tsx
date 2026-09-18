import SectionHeading from "../ui/SectionHeading";
import Card from "@/components/ui/Card";

const skills = [
    "HTML", 
    "CSS", 
    "JavaScript", 
    "Python", 
    "SQL", 
    "React", 
    "TypeScript",
]

const tools = [
    "Figma",
    "Github",
    "LLM & SLM",
    "Docker",
    "Notion",
]


function Skills() {
    return(
        <Card className="h-full flex flex-col space-y-6 hover:border-white/10">
            <div className="text-zinc-600">
                Skills
            </div>
            <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                    <span key={skill} className="border border-white/20 rounded-full px-4 py-1 text-sm text-gray-400 bg-white/3 hover:bg-white/10 hover:border-white/40 transition duration-300">
                        {skill}
                    </span>
                ))}
            </div>

            <div className="border-t w-full border-zinc-900" />

            <div className="text-zinc-600">
                Tools
            </div>
            <div className="flex flex-wrap gap-4">
                {tools.map((tool) => (
                    <span key={tool} className="border border-white/20 rounded-full px-4 py-1 text-sm text-gray-400 bg-white/3 hover:bg-white/10 hover:border-white/40 transition duration-300">
                        {tool}
                    </span>
                ))}
            </div>
        </Card>
    )
}
export default Skills
