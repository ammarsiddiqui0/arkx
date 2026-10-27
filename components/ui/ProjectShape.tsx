export type Shape =
    | "circle"
    | "square"
    | "triangle"
    | "diamond"
    | "hexagon"
    | "star"
    | "ring"
    | "cross";

type ProjectShapeProps = {
    shape: Shape;
    color: string;
};

function ProjectShape({ shape, color }: ProjectShapeProps) {
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute -top-8 -right-6 z-0 opacity-0 scale-75 transition-all duration-700 ease-out group-hover:opacity-70 group-hover:scale-100 ${color} ${
                shape === "circle" || shape === "ring"
                    ? "group-hover:animate-[bounce-settle_700ms_ease-out]"
                    : "rotate-0 group-hover:rotate-[180deg]"
            }`}
        >
            <svg
                viewBox="0 0 100 100"
                className="h-28 w-28"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinejoin="round"
            >
                {shape === "circle" && (
                    <circle cx="50" cy="50" r="38" />
                )}

                {shape === "square" && (
                    <rect x="15" y="15" width="70" height="70" />
                )}

                {shape === "triangle" && (
                    <polygon points="50,10 90,85 10,85" />
                )}

                {shape === "diamond" && (
                    <polygon points="50,5 95,50 50,95 5,50" />
                )}

                {shape === "hexagon" && (
                    <polygon points="25,10 75,10 95,50 75,90 25,90 5,50" />
                )}

                {shape === "star" && (
                    <polygon points="50,5 61,37 95,37 68,57 78,90 50,70 22,90 32,57 5,37 39,37" />
                )}

                {shape === "ring" && (
                    <circle
                        cx="50"
                        cy="50"
                        r="35"
                        fill="none"
                        strokeWidth="10"
                    />
                )}

                {shape === "cross" && (
                    <path d="M40 10 H60 V40 H90 V60 H60 V90 H40 V60 H10 V40 H40 Z" />
                )}
            </svg>
        </div>
    );
}

export default ProjectShape;