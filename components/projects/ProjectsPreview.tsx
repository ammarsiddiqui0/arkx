import projects from "@/data/projects"
import ProjectCard from "../projects/ProjectCard"
import Link from "next/link";


function ProjectsPreview() {
    const featuredProject = projects.find (
        (project) => project.featured
    );
    if (!featuredProject) {
        return null;
    }

    return (

        <>
            <ProjectCard
                key={featuredProject.title}
                title={featuredProject.title}
                description={featuredProject.description}
                github={featuredProject.github}
                demo={featuredProject.demo}
            />
            <Link href="/projects">
                View All Projects →
            </Link>
        </>
    )
}
export default ProjectsPreview