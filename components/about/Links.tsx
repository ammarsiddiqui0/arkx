import Card from "@/components/ui/Card";
import { 
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
        name: "Github",
        url: "https://github.com/",
        color : "hover:border-zinc-200/50 hover:text-zinc-200 hover:bg-zinc-800/20",
    },
    {
        icon: UserRoundCheck,
        name: "LinkedIn",
        url: "https://linkedin.com/",
        color : "hover:border-blue-200/50 hover:text-blue-200 hover:bg-blue-800/20",
    },
    {
        icon: Camera,
        name: "Instagram",
        url: "https://instagram.com/",
        color : "hover:border-purple-200/50 hover:text-purple-200 hover:bg-purple-800/20",
    },
    {
        icon: FileText,
        name: "Resume",
        url: "/resume.pdf",
        color : "hover:border-indigo-200/50 hover:text-indigo-200 hover:bg-indigo-800/20",
    },
    {
        icon: Mail,
        name: "Email",
        url: "mailto:your@email.com",
        color : "hover:border-amber-200/50 hover:text-amber-200 hover:bg-amber-800/20",
    },
    {
        icon: AudioWaveform,
        name: "Spotify",
        url: "https://spotify.com/",
        color : "hover:border-green-200/50 hover:text-green-200 hover:bg-green-800/20",
    },
    {
        icon: Pin,
        name: "Pinterest",
        url: "https://pinterest.com",
        color : "hover:border-red-200/50 hover:text-red-200 hover:bg-red-800/20"
    },
    {
        icon: Tv,
        name: "Anilist",
        url: "https://anilist.to",
        color : "hover:border-sky-200/50 hover:text-sky-200 hover:bg-sky-800/20"
    },
]

function Links() {
    return (
        <Card className="h-full flex flex-col hover:border-white/10">        
            <div className="text-zinc-600">
                Links
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
                            className={`group border border-white/20 rounded-3xl w-full py-4 text-sm text-gray-400 bg-white/1 transition-all duration-300
                            ${link.color}`}
                        >
                            <div className="flex items-center justify-between px-4">
                                <div className="flex items-center gap-4">
                                    <Icon size={20} className="transition-transform" />
                                    <span>
                                        {link.name}
                                    </span>
                                </div>
                                <MoveUpRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                    );
})}
            </div>
        </Card>
    )
}
export default Links