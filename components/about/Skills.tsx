import SectionHeading from "../ui/SectionHeading";
import Card from "@/components/ui/Card";
import {
    Ribbon,
    PocketKnife
} from 'lucide-react';

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
        <Card className="h-full flex flex-col gap-6 hover:border-rose-400/10">
            <div className="inline-flex items-center gap-2 text-sm font-bold font-mono text-rose-400 tracking-wide">
                <Ribbon className="w-3.5 h-3.5"/>
                <span>Skills</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
                {skills.map((skill) => (
                    <span key={skill} className="border border-white/10 rounded-full px-4 py-1 text-xs font-semibold font-mono text-gray-400 bg-rose-400/2 hover:text-rose-400 hover:bg-rose-400/20 hover:border-rose-400/80 transition duration-300">
                        {skill}
                    </span>
                ))}
            </div>

            <div className="border-t w-full border-zinc-900" />

            <div className="inline-flex items-center gap-2 text-sm font-bold font-mono text-rose-400 tracking-wide">
                <PocketKnife className="w-3.5 h-3.5"/>
                <span>Tools</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
                {tools.map((tool) => (
                    <span key={tool} className="border border-white/10 rounded-full px-4 py-1 text-xs font-semibold font-mono text-gray-400 bg-rose-400/2 hover:text-rose-400 hover:bg-rose-400/20 hover:border-rose-400/80 transition duration-300">
                        {tool}
                    </span>
                ))}
            </div>
        </Card>
    )
}
export default Skills
