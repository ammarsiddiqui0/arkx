import Card from "@/components/ui/Card";
import { Layers } from "lucide-react";

const stacks = [
    "React",
    "TypeScript",
    "SQL",
    "Kotlin",
];

function StackCard() {
    return (
        <Card className="h-full flex flex-col hover:border-rose-400/10">
            <div className="flex flex-col gap-4">
                <h3 className="inline-flex items-baseline gap-2 text-sm font-bold font-mono text-zinc-400 tracking-wide">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Stack</span>
                </h3>

                <ul className="flex flex-col gap-2 text-xs font-semibold text-zinc-600">
                    {stacks.map((stack) => (
                        <li
                            key={stack}
                            className="font-bold uppercase font-mono hover:text-rose-400 hover:translate-x-1 transition-transform duration-300"
                        >
                            {stack}
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
}

export default StackCard;