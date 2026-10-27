import Card from "@/components/ui/Card";
import Link from "next/link";
import { DraftingCompass } from 'lucide-react';

function BuildsCard() {
    return (
        <Link href="/projects">
            <Card className="h-full flex flex-col items-center space-y-10 hover:border-rose-400/10">
                <h3 className="inline-flex items-baseline gap-2 text-sm font-bold font-mono text-zinc-400 tracking-wide">
                    <DraftingCompass className="w-3.5 h-3.5"/>
                    <span>Workbench</span>
                </h3>

                <div className="font-bold font-mono text-zinc-600 hover:text-rose-400 hover:translate-x-1 transition-transform duration-300">
                    Archive →
                </div>
            </Card>
        </Link>
    )
}
export default BuildsCard;