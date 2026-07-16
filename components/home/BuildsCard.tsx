import Card from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function BuildsCard() {
    return (
        <Link href="/projects">
            <Card className="h-full flex flex-col items-center space-y-10">
                <h3 className="text-sm font-semibold text-zinc-400 tracking-wide">
                    Workbench
                </h3>

                <div className="font-semibold text-zinc-600 hover:text-emerald-400 hover:translate-x-1 transition-transform duration-300">
                    Archive →
                </div>
            </Card>
        </Link>
    )
}
export default BuildsCard;