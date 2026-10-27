import Card from "@/components/ui/Card";
import type { Project } from "@/data/projects";
import type { Shape } from "@/components/ui/ProjectShape";
import ProjectShape from "@/components/ui/ProjectShape";
import { projectColors } from "../ui/projectColors";
import {
    Code2,
    Database,
    PanelsTopLeft,
    CheckSquare,
} from "lucide-react";

type ProjectCardProps = {
    project: Project;
    onLike: () => void;
    shape: Shape;
};

const projectIcons = {
    FeelingsLog: Code2,
    "Data Warehouse": Database,
    "Social Card site": PanelsTopLeft,
    "Portfolio Website": Code2,
    "TODO App": CheckSquare,
};

function ProjectCard({
    project,
    onLike,
    shape,
}: ProjectCardProps) {
    const colors = projectColors[project.color] ?? projectColors.blue;
    return (
        <div className="relative isolate group">

            {/* Geometric shape */}
            {/*<div className="
                absolute
                -right-6
                -top-6
                w-28
                h-28
                rounded-full
                border-2
                border-emerald-400
                opacity-0
                group-hover:opacity-70
                group-hover:rotate-180
                transition-all
                duration-1000
                z-0
            " /> */}

            <ProjectShape shape={shape} color={colors.shape} />

            {/* Card */}
            <Card className="
                relative
                flex
                h-full
                flex-col
                z-10
                p-6
                hover:border-zinc-700/50
                bg-black/20
                backdrop-blur-sm
                transition-all
                duration-300
            ">
                {/* Project title */}

                {/* Header: title, status, and demo link */}
                <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-6">
                        {(() => {
                            const Icon =
                                projectIcons[
                                    project.title as keyof typeof projectIcons
                                ] ?? Code2;

                            return (
                                <Icon
                                    className={`h-5 w-5 shrink-0 ${colors.icon}`}
                                    strokeWidth={1.8}
                                />
                            );
                        })()}

                        <div className="">
                            <h2 className="truncate text-lg font-semibold font-mono tracking-tight text-white">
                                {project.title}
                            </h2>
                            <p className="text-[10px] font-mono tracking-[0.18em] text-zinc-500">
                                {project.shorthead}
                            </p>
                        </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                        <span
                            className={`rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide ${
                                project.status === "Active"
                                ? "border-emerald-400/20 bg-emerald-900/10 text-emerald-300"
                                : project.status === "On-hold"
                                ? "border-amber-400/20 bg-amber-400/10 text-amber-300"
                                : "border-zinc-400/20 bg-zinc-400/10 text-zinc-300"
                            }`}
                        >
                            {project.status}
                        </span>

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${project.title} demo`}
                                className="rounded-full border border-white/10 p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-4 w-4"
                                >
                                    <path
                                        d="M7 17 17 7M8 7h9v9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>

                {/* Project description */}
                <p className="flex-1 font-mono text-sm leading-6 text-zinc-400">
                    {project.description}
                </p>

                {/* Project actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border font-mono font-semibold border-white/10 px-4 py-2 text-sm text-gray-200 transition hover:bg-white/10"
                        >
                            GitHub
                        </a>
                    )}

                    <button
                        onClick={onLike}
                        className="ml-auto rounded-lg px-3 py-2 text-sm text-gray-300 transition hover:bg-white/10"
                    >
                        ♡ {project.likes}
                    </button>
                </div>
            </Card>

        </div>
    );
}

export default ProjectCard;