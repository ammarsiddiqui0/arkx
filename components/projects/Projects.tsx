"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects";


const shapes = [
    "circle",
    "square",
    "triangle",
    "diamond",
    "hexagon",
    "star",
    "ring",
    "cross",
];

function shuffleShapes() {
    return [...shapes].sort(() => Math.random() - 0.5);
}

function Projects() {
    const [projectList, setProjectList] = useState(projects);
    const [assignedShapes] = useState([
    "circle",
    "hexagon",
    "star",
    "diamond",
    "ring",
    "triangle",
    "cross",
    "square",
    ] as const);
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
            <p className="mt-3 font-mono mb-10 max-w-xl text-sm leading-6 text-gray-400">
                A collection of some Ideas that came into existence
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    projectList.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            shape={assignedShapes[index]}
                            onLike={() => handleLike(project.id)}
                        />
                    ))
                }
            </div>
        </section>
    )
}
export default Projects
