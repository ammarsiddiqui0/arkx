import Card from "@/components/ui/Card";

function HeroCard() {
    return (
        <Card className="h-full flex flex-col justify-between hover:border-emerald-900/60">
            <div className="space-y-6">
                <h3 className="text-5xl text-emerald-400 font-bold">
                    ARKx.
                </h3>
                <p className="text-xl text-zinc-400">
                    Aspiring fullstack developer
                </p>
            </div>
            <div className="space-y-6">
                <div className="border-t w-full border-zinc-900" />
                <p className="text-sm text-zinc-600 leading-relaxed">
                    • With Hardship Comes Ease.
                </p>
            </div>
        </Card>
    )
}
export default HeroCard;