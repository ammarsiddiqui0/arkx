import Card from "@/components/ui/Card";
import Image from "next/image";
import {
    User,
    Origami,
} from 'lucide-react';


const about = [
    "Recently graduated Science (IT) Bachelor who enjoys software, understanding Technology, and with niche Interests.",
    "Things started with old Laptop & Arch Linux, I started to take interest in 'Rice' (niche stuff iyk), Joined its community & loved UI part.",
    "For a long time I relied heavily on AI tools to help me write codes, but eventually I realized I wanted to understand the code myself.", 
    "Now I'm focused on learning programming from the ground up while continuing to develop my existing projects.",
    "Currently I'm exploring Android, automation, self-hosting, open-source software, and tools that solve problems I personally run into.", 
    "I believe this world is just a fraction of Afterlife so learning how it works it pretty fun.",
]

const interests = [
    { 
        name : "Minecraft",
        hover : "hover:border-green-200/50 hover:text-green-200 hover:bg-green-800/20",
    },
    {
        name : "Urbex",
        hover : "hover:border-gray-200/50 hover:text-gray-200 hover:bg-gray-800/20",
    },
    {
        name : "Manga/Manhwa",
        hover : "hover:border-lime-200/50 hover:text-lime-200 hover:bg-lime-800/20",
    },
    {
        name : "Anime",
        hover : "hover:border-purple-200/50 hover:text-purple-200 hover:bg-purple-800/20",
    },
    {
        name : "Photography",
        hover : "hover:border-orange-200/50 hover:text-orange-200 hover:bg-orange-800/20",
    },
    {
        name : "Calisthenics",
        hover : "hover:border-rose-300/50 hover:text-rose-300 hover:bg-rose-800/20",
    },
]

function AboutIntro() {
    return (
        <Card className="h-full flex flex-col space-y-8 border-rose-400/10 hover:border-white/10">
            <div className="flex items-center gap-8">
                <Image
                    src="/logo.png"
                    alt="ARKX logo"
                    width={250}
                    height={250}
                    className="h-18 w-18 object-contain"
                />
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold font-mono tracking-wider text-white">
                        Ammar Siddiqui
                    </h1>

                    <p className="text-sm font-medium font-mono tracking-wide text-zinc-400">
                        Aspiring Developer
                    </p>
                </div>
            </div>

            <div className="border-t w-full border-zinc-900" />

            <div className="text-xs font-semibold font-mono gap-2 uppercase inline-flex items-center tracking-[0.12em] text-zinc-500">
                <User className="w-4 h-4"/>
                <span>About Me</span>
            </div>

            <div className="flex flex-wrap space-y-4">
                {about.map((paragraph) => (
                    <span key={paragraph} className="border border-white/6 rounded-2xl px-4 py-4 text-sm font-semibold font-mono leading-7 text-zinc-400 bg-rose-400/2 hover:bg-rose-950/5 hover:border-white/10 transition">
                        {paragraph}
                    </span>
                ))}
            </div>

            <div className="border-t w-full border-zinc-900" />
            
            <div className="text-xs font-semibold font-mono gap-2 uppercase inline-flex items-center tracking-[0.12em] text-zinc-500">
                <Origami className="w-4 h-4"/>
                <span>Interests & Hobbies</span>
            </div>

            <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                    <span 
                        key={interest.name} 
                        className={`rounded-full border border-white/6 px-4 py-2 text-sm font-semibold font-mono text-zinc-400 transition-all duration-300
                        ${interest.hover}`}
                    >
                        {interest.name}
                    </span>
                ))}
            </div>
        </Card>
    )
}

export default AboutIntro;
