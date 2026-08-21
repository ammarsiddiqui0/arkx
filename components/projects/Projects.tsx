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
        <section className="py-20">
            <SectionHeading>
                Projects
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
