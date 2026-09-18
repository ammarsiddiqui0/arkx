"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects";


function Projects() {
    const [projectList, setProjectList] = useState(projects);
    function handleLike(id: number) {
        setProjectList((prevProjects) =>
            prevProjects.map((project) =>
                project.id === id
                    ? { ...project, likes: project.likes + 1 }
                    : project
            )
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-24 pt-25 pb-16 space-y-8">
            <SectionHeading>
                Projects
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    projectList.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onLike={() => handleLike(project.id)}
                        />
                    ))
                }
            </div>
        </section>
    )
}
export default Projects
