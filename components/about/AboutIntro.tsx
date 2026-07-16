import Card from "@/components/ui/Card";


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
]

function AboutIntro() {
    return (
        <Card className="h-full flex flex-col space-y-10">
            <div>
                <h1 className="text-5xl font-bold">
                    Ark
                </h1>

                <p className="text-zinc-400">
                    Aspiring Developer
                </p>
            </div>

            <div className="border-t w-full border-zinc-900" />

            <div className="text-zinc-600">
                About
            </div>

            <div className="flex flex-wrap gap-4">
                {about.map((about) => (
                    <span key={about} className="border border-white/6 rounded-2xl px-4 py-4 font-semibold text-gray-400 hover:border-white/10 transition">
                        {about}
                    </span>
                ))}
            </div>

            <div className="border-t w-full border-zinc-900" />
            
            <div className="text-zinc-600">
                Interest
            </div>

            <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                    <span 
                        key={interest.name} 
                        className={`border border-white/6 rounded-full px-8 py-2 font-semibold text-gray-400 transition-all duration-300
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
