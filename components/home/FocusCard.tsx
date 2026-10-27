import Card from "@/components/ui/Card";
import { Pickaxe } from 'lucide-react';

function FocusCard() {
    return (
        <Card className="h-full flex flex-col border-rose-400/10 hover:border-zinc-700/50">
            <div className="space-y-6">
                <h3 className="inline-flex items-baseline gap-2 text-sm font-bold font-mono text-rose-400 tracking-wide">
                    <Pickaxe className="w-3.5 h-3.5" />
                    <span>Active Pursuit</span>
                </h3>
                <p className="text-xl font-semibold">
                    Learning programming from Ground up.
                </p>
            </div>
        </Card>
    )
}
export default FocusCard;