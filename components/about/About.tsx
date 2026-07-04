import AboutIntro from "./AboutIntro";
import Skills from "./Skills"
import Timeline from "./Timeline"
import Links from "./Links"

function About() {
    return (
        <section 
            id="about" 
            className="min-h-screen px-6 py-20 flex items-center"
        >
            <div className="max-w-4xl mx-auto">
                <AboutIntro />
                <Skills />
                <Timeline />
                <Links />
            </div>
        </section>
    )
}
export default About;