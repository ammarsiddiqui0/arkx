import Image from "next/image"

type ProjectCardProps = {
    image: string
    title: string
    description: string
    github: string
    demo: string
}

function ProjectCard({ 
    image,
    title,
    description,
    github,
    demo
}: ProjectCardProps
    ) {
    return (
        <div className="border border-gray-700 rounded-xl p-6 max-w-md bg-gray-800 hover:border-blue-900 transition">
            <Image
                src={image}
                alt={title}
                width={400}
                height={250} 
            />
            <h2 className="text-2xl font-bold mb-2">
                {title}
            </h2>
            <p className="text-gray-400 mt-2">
                {description}
            </p>
            <div className="flex gap-4 mt-4">
                <a 
                    href={github}
                    className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                    Github
                </a>
                <a 
                    href={demo}
                    className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                    Demo
                </a>
            </div>
        </div>
    )
}
export default ProjectCard
