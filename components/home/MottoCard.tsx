import Card from "@/components/ui/Card";
import Link from "next/link";

function MottoCard() {
    return (
        <Card className="h-full flex flex-col">
            <div className="space-y-6">
                <h3 className="text-sm font-semibold text-emerald-400 tracking-wide">
                    Ethos
                </h3>
                <p className="text-xl font-semibold">
                    I like my stuffs and interests niche.
                </p>
                <Link href="/about" className="text-sm text-zinc-600 inline-flex transition-transform duration-300 hover:translate-x-1 hover:text-emerald-400 leading-relaxed">
                    delve into →
                </Link>
            </div>
        </Card>
    )
}

export default MottoCard;