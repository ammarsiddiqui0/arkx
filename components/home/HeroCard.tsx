import Card from "@/components/ui/Card";
import Image from "next/image";

function HeroCard() {
    return (
        <Card className="h-full flex flex-col justify-between border-rose-400/10 hover:border-zinc-700/50 max-sm:justify-start sm:max-lg:justify-start">
            <div className="space-y-6">
                <div className="flex items-center gap-4 lg:gap-8 mb-4 lg:mb-0">
                    {/* Logo will go here */}
                    <div className="h-20 w-20 shrink-0">
                        {/* Your logo */}
                        <Image
                            src="/logo.png"
                            alt=""
                            width={500}
                            height={500}
                            priority
                            className=""
                        />
                    </div>

                    <div>
                        <h3 className="text-5xl font-mono text-rose-400 font-bold">
                            AMMAR.
                        </h3>
                        <p className="text-sm text-zinc-400 font-semibold font-mono">
                            Aspiring fullstack developer
                        </p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <p className="max-w-xl text-base leading-7 font-mono text-zinc-400 mb-6">
                Hey, I'm Ammar Siddiqui. I'm a student developer learning to build
                software from the ground up, Trying to depend less on AI with each code and to
                master the fundamentals.
            </p>

            <div className="space-y-6 mt-6">
                <div className="border-t w-full border-zinc-900" />
                <div className="inline-flex items-center gap-6">
                    <div className="h-1 w-1 ring-1 rounded-full ring-rose-300 bg-rose-400"/>
                    <p className="text-xs font-semibold font-mono text-zinc-600 leading-relaxed">
                        WITH HARDSHIP COMES EASE.
                    </p>
                </div>
            </div>
        </Card>
    )
}
export default HeroCard;