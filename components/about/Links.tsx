import SectionHeading from "../ui/SectionHeading"

const links = [
    {
        name: "Github",
        url: "https://github.com/"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/"
    },
    {
        name: "Instagram",
        url: "https://instagram.com/"
    },
    {
        name: "Resume",
        url: "/resume.pdf"
    },
    {
        name: "Email",
        url: "mailto:your@email.com"
    }
]

function Links() {
    return (
        <section className="mt-16">
            <SectionHeading>
                Links
            </SectionHeading>
            <div className="mt-6 flex flex-wrap gap-3">
                {links.map((link) => (
                    <a 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={link.name} 
                        className="border border-white/20 rounded-full px-4 py-1 text-sm text-gray-400 bg-white/5 hover:bg-white/15 hover:border-white/40 transition">
                        {link.name}
                    </a>
                )
                )}
            </div>
        </section>
    )
}
export default Links