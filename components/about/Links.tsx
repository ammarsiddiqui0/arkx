import Card from "@/components/ui/Card";
import {
    Link,
    MoveUpRight,
    CodeXml,
    FileText,
    Camera,
    UserRoundCheck,
    Mail,
    AudioWaveform,
    Tv,
    Pin,
} from 'lucide-react';


const links = [
    {
        icon: CodeXml,
        name: "GitHub",
        url: "https://github.com/ammarsiddiqui0",
        color : "hover:border-zinc-200/50 hover:text-zinc-200 hover:bg-zinc-800/20",
    },
    {
        icon: UserRoundCheck,
        name: "LinkedIn",
        url: "https://in.linkedin.com/in/ammarsiddiqui0",
        color : "hover:border-blue-200/50 hover:text-blue-200 hover:bg-blue-800/20",
    },
    {
        icon: Camera,
        name: "Instagram",
        url: "https://www.instagram.com/ammarsiddiqui04",
        color : "hover:border-purple-200/50 hover:text-purple-200 hover:bg-purple-800/20",
    },
    {
        icon: FileText,
        name: "Resume",
        url: "/ammaresume.pdf",
        color : "hover:border-indigo-200/50 hover:text-indigo-200 hover:bg-indigo-800/20",
    },
    {
        icon: Mail,
        name: "Email",
        url: "mailto:ammarmaks24@gmail.com",
        color : "hover:border-amber-200/50 hover:text-amber-200 hover:bg-amber-800/20",
    },
    
]

function Links() {
    return (
        <Card className="h-full flex flex-col border-rose-400/10 hover:border-zinc-700/50">  
            <div className="inline-flex items-center gap-2 text-sm font-bold font-mono text-rose-400 tracking-wide">
                <Link className="w-3.5 h-3.5"/>
                <span>Links</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
                {links.map((link) => {
                    const Icon = link.icon;

                    return (
                        <a 
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={link.name} 
                            className={`group border border-white/10 rounded-3xl w-full py-4 text-sm font-semibold font-mono text-gray-400 bg-rose-400/2 transition-all duration-300
                            ${link.color}`}
                        >
                            <div className="flex items-center justify-between px-4">
                                <div className="flex items-center gap-4">
                                    <Icon size={20} className="transition-transform" />
                                    <span>
                                        {link.name}
                                    </span>
                                </div>
                                <MoveUpRight className="h-3 w-3 opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                            </div>
                        </a>
                    );
})}
            </div>
        </Card>
    )
}
export default Links