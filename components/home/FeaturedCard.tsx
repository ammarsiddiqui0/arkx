import Card from "@/components/ui/Card";
import { 
    AppWindowMac,
} from "lucide-react";

function FeaturedCard() {
    return (
        <Card className="group h-full flex flex-col hover:border-cyan-400/20">
            <div className="space-y-2">
                <div className="flex items-center gap-3 space-x-8 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 transition-transform duration-300 group-hover:scale-105">
                        <AppWindowMac className="text-cyan-400"/>
                    </div>
                    <span>
                        <h3 className="inline-flex items-baseline gap-2 text-[10px] text-cyan-400 font-semibold font-mono tracking-wide">
                            FEATURED
                        </h3>
                        <p className="text-xl font-semibold font-mono transition-colors transition-[text-shadow] duration-300 group-hover:text-cyan-400 group-hover:[text-shadow:0_0_12px_rgba(34,211,238,0.45)]">
                            FeelingsLog
                        </p>
                    </span>
                </div>
                <span>
                    <p className="text-[12px] font-mono text-zinc-400 leading-relaxed">
                        Place to Log your Moments, Nostalgia, Feelings with many supported file types.
                    </p>
                    <p className="text-[12px] font-mono text-zinc-400 leading-relaxed">
                        Made with Kotlin and Jetpack Compose for Android.
                    </p>
                </span>
            </div>
        </Card>
    )
}
export default FeaturedCard;