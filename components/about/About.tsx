import AboutIntro from "./AboutIntro";
import Skills from "./Skills"
import Timeline from "./Timeline"
import Links from "./Links"

function About() {
    return (
        <section 
            id="about" 
            className="max-w-7xl mx-auto px-24 pt-25 pb-16 space-y-8"
        >
            {/* Row 1 */}
            <div className="grid grid-cols-[2fr_1fr] gap-8 min-h-200">
                <AboutIntro />
                <div className="h-full gap-8 space-y-8">
                    <div className="flex-1">
                        <Links />
                    </div>
                    <div className="flex-1">
                        <Skills />
                    </div>
                </div>
            </div>
            <Timeline />
        </section>
    )
}
export default About;