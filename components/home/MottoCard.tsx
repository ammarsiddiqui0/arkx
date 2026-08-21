import Card from "@/components/ui/Card";
import Link from "next/link";
import { Scale } from 'lucide-react';

function MottoCard() {
    return (
        <Card className="h-full flex flex-col hover:border-emerald-900/60">
            <div className="space-y-6">
                <h3 className="inline-flex items-baseline gap-2 text-sm font-semibold text-emerald-400 tracking-wide">
                    <Scale className="w-3.5 h-3.5 translate-y-0.5"/>
                    <span>Ethos</span>
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