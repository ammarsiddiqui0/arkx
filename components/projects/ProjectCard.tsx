

type Project = {
    id: number;
    title: string;
    description: string;
    github: string;
    demo: string;
    likes: number;
}

type ProjectCardProps = {
    project: Project;
    onLike: () => void;
}

function ProjectCard({
    project,
    onLike,
}: ProjectCardProps
    ) {
    return (
        <div className="border border-gray-700 rounded-xl p-6 max-w-md bg-gray-800 hover:border-blue-900 transition">
            <h2 className="text-2xl font-bold mb-2">
                {project.title}
            </h2>
            <p className="text-gray-400 mt-2">
                {project.description}
            </p>
            <div className="flex gap-4 mt-4">
                <a 
                    href={project.github}
                    className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                    Github
                </a>
                <a 
                    href={project.demo}
                    className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                    Demo
                </a>
                <button
                    onClick={onLike}
                    className="mt-4"
                >
                    🤍{project.likes}
                </button>
            </div>
        </div>
    )
}
export default ProjectCard
