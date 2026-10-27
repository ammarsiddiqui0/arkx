
"use client";

import { useState } from "react";
import projects from "@/data/projects";
import ProjectCard from "../projects/ProjectCard";
import Link from "next/link";
import type { Shape } from "@/components/ui/ProjectShape";

function ProjectsPreview() {
    const featuredProject = projects.find (
        (project) => project.featured
    );

    const [likes, setLikes] = useState(featuredProject?.likes ?? 0);

    if (!featuredProject) {
        return null;
    }

    return (

        <>
            <ProjectCard
                key={featuredProject.title}
                project={{ ...featuredProject, likes }}
                onLike={() => setLikes((prev) => prev + 1)}
                shape={"circle" as Shape}
            />
            <Link href="/projects">
                View All Projects →
            </Link>
        </>
    )
}
export default ProjectsPreview
