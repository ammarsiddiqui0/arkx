import Card from "@/components/ui/Card";

type Project = {
    id: number;
    title: string;
    description: string;
    github: string;
    demo: string;
    likes: number;
};

type ProjectCardProps = {
    project: Project;
    onLike: () => void;
};

function ProjectCard({
    project,
    onLike,
}: ProjectCardProps) {
    return (
        <div className="relative group">

            {/* Geometric shape */}
            <div className="
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
            " />

            {/* Card */}
            <Card className="
                relative
                z-10
                p-6
                hover:border-zinc-700/50
                bg-black-900/10
                backdrop-blur-sm
                transition-all
                duration-300
            ">
                <h2 className="text-2xl font-bold mb-2">
                    {project.title}
                </h2>

                <p className="text-gray-400 mt-2">
                    {project.description}
                </p>

                <div className="flex gap-4 mt-4">

                    <a
                        href={project.github}
                        className="
                            bg-gray-700
                            px-4
                            py-2
                            rounded-lg
                            hover:bg-gray-500
                            transition
                        "
                    >
                        Github
                    </a>

                    <a
                        href={project.demo}
                        className="
                            bg-blue-600
                            px-4
                            py-2
                            rounded-lg
                            hover:bg-blue-500
                            transition
                        "
                    >
                        Demo
                    </a>

                    <button
                        onClick={onLike}
                        className="mt-2"
                    >
                        🤍{project.likes}
                    </button>

                </div>
            </Card>

        </div>
    );
}

export default ProjectCard;