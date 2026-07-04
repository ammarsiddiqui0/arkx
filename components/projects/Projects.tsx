import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects"


function Projects() {
    return (
        <section className="py-20">
            <SectionHeading>
                Projects
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    projects.map((project) => (
                        <ProjectCard
                            image={project.image}
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            github={project.github}
                            demo={project.demo}
                        />
                    ))
                }
            </div>
        </section>
    )
}
export default Projects
