import AboutIntro from "./AboutIntro";
import Skills from "./Skills";
import Timeline from "./Timeline";
import Links from "./Links";

function About() {
    return (
        <section
            id="about"
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-28 pt-25 pb-16 space-y-8"
        >
            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
                <AboutIntro />

                <div className="flex flex-col sm:flex-row lg:flex-col gap-8">
                    <div className="flex-1 min-w-0">
                        <Links />
                    </div>

                    <div className="flex-1 min-w-0">
                        <Skills />
                    </div>
                </div>
            </div>

            <Timeline />
        </section>
    );
}

export default About;