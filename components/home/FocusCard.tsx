import Card from "@/components/ui/Card";

function FocusCard() {
    return (
        <Card className="h-full flex flex-col">
            <div className="space-y-6">
                <h3 className="text-sm font-semibold text-emerald-400 tracking-wide">
                    Active Pursuit
                </h3>
                <p className="text-xl font-semibold">
                    Learning programming from Ground up.
                </p>
            </div>
        </Card>
    )
}
export default FocusCard;