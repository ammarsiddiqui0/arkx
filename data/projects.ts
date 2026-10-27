import type { ProjectColor } from "@/components/ui/projectColors";

export type ProjectStatus = "Active" | "On-hold" | "Private" | "Complete";

export type Project = {
    id: number;
    title: string;
    shorthead: string;
    description: string;
    github?: string;
    demo?: string;
    color: ProjectColor;
    likes: number;
    status: ProjectStatus;
    featured: boolean;
};

const projects : Project[] = [
    {
        id: 1,
        title: "FeelingsLog",
        shorthead: "Android · Kotlin",
        description: "An Android memory journal built with Kotlin, designed to preserve personal moments through flexible text and multimedia entries.",
        github: "https://github.com/ammarsiddiqui0/Feelingslog.git",
        demo: "https://github.com/ammarsiddiqui0/Feelingslog.git",
        color: "cyan" as ProjectColor,

        likes: 0,
        status: "Active",
        featured: true
    },
    {
        id: 2,
        title: "Data Warehouse",
        shorthead: "SQL · Data Engineering",
        description: "A SQL-based data warehouse implementing Bronze, Silver, and Gold layers for structured data cleaning, transformation, and analytics.",
        github: "https://github.com/ammarsiddiqui0/sql-data-warehouse.git",
        demo: "https://github.com/ammarsiddiqui0/sql-data-warehouse.git",
        color: "purple" as ProjectColor,

        likes: 0,
        status: "Complete",
        featured: false
    },
    {
        id: 3,
        title: "Social Card site",
        shorthead: "HTML · CSS · JavaScript",
        description: "An experimental frontend project exploring creative UI design and interactive styling with HTML, CSS, and JavaScript.",
        demo: "https://maksacr.github.io",
        color: "amber" as ProjectColor,

        likes: 0,
        status: "Active",
        featured: false
    },
    {
        id: 4,
        title: "Porfolio Website",
        shorthead: "React · Next.js · Tailwind CSS",
        description: "A personal developer portfolio built with React and Next.js, featuring project showcases, interactive elements, and a minimal interface.",
        demo: "#",
        color: "blue" as ProjectColor,

        likes: 0,
        status: "Active",
        featured: false
    },
    {
        id: 5,
        title: "TODO App",
        shorthead: "React · Expo",
        description: "A task management app built with React, exploring application development and testing through Expo.",
        github: "#",
        demo: "#",
        color: "rose" as ProjectColor,

        likes: 0,
        status: "On-hold",
        featured: false
    },
       
];

export default projects;
