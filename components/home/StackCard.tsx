import Card from "@/components/ui/Card";

function StackCard() {
    return (
        <Card className="h-full flex flex-col justify-between">
            <h3 className="text-sm font-semibold text-zinc-400 tracking-wide">
                Stack
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