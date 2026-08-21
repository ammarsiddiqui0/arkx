import Card from "@/components/ui/Card";
import { FaStar } from "react-icons/fa6";

function FeaturedCard() {
    return (
        <Card className="h-full flex flex-col hover:border-zinc-700">
            <div className="space-y-6">
                <h3 className="inline-flex items-baseline gap-2 text-sm font-semibold text-zinc-400 tracking-wide">
                    <FaStar className="w-3.5 h-3.5"/>
                    <span>Featured</span>
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