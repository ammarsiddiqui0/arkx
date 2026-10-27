"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects";
import type { Shape } from "@/components/ui/ProjectShape";

const assignedShapes: Shape[] = [
    "circle",
    "hexagon",
    "star",
    "diamond",
    "ring",
    "triangle",
    "cross",
    "square",
];

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
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 pt-25 pb-16 space-y-8">
            <SectionHeading>
                Projects
            </SectionHeading>

            <p className="mt-3 mb-10 max-w-xl font-mono text-sm leading-6 text-gray-400">
                A collection of some ideas that came into existence
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {projectList.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        shape={assignedShapes[index % assignedShapes.length]}
                        onLike={() => handleLike(project.id)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;