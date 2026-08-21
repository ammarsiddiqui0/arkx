import Card from "@/components/ui/Card";
import { Layers } from 'lucide-react';

function StackCard() {
    return (
        <Card className="h-full flex flex-col justify-between hover:border-zinc-700">
            <h3 className="inline-flex items-baseline gap-2 text-sm font-semibold text-zinc-400 tracking-wide">
                <Layers className="w-3.5 h-3.5"/>
                <span>Stack</span>
            </h3>
            <ul className="space-y-2">
                <li>React</li>
                <li>Typescript</li>
                <li>SQL</li>
            </ul>
        </Card>
    )
}

export default StackCard;