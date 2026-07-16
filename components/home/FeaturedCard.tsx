import Card from "@/components/ui/Card";

function FeaturedCard() {
    return (
        <Card className="h-full flex flex-col">
            <div className="space-y-6">
                <h3 className="text-sm font-semibold text-zinc-400 tracking-wide">
                    Featured
                </h3>
                <p className="text-xl font-semibold">
                    Social Card site
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                    Aesthetically made for social links page with some cool features
                </p>
            </div>
        </Card>
    )
}
export default FeaturedCard;