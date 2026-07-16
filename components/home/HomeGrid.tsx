import HeroCard from "./HeroCard";
import FocusCard from "./FocusCard";
import StackCard from "./StackCard";
import BuildsCard from "./BuildsCard";
import FeaturedCard from "./FeaturedCard";
import MottoCard from "./MottoCard";
import LinksCard from "./LinksCard";

function HomeGrid() {
    return (
        <section className="max-w-7xl mx-auto px-24 pt-25 pb-16 space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-8 min-h-105">
                <HeroCard />

                <div className="flex flex-col h-full gap-8">
                    <div className="flex-1">
                        <FocusCard />
                    </div>

                    <div className="grid grid-cols-2 gap-8 flex-1">
                        <StackCard />
                        <BuildsCard />
                    </div>
                </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-8 min-h-48.5">
                <FeaturedCard />
                <LinksCard />
            </div>

            {/* Row 3 */}
            <div className="grid min-h-48.5">
                <MottoCard />
            </div>
        </section>
    )
}
export default HomeGrid;