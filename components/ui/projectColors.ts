export const projectColors = {
    blue: {
        shape: "text-blue-400",
        icon: "text-blue-400",
    },
    purple: {
        shape: "text-purple-400",
        icon: "text-purple-400",
    },
    emerald: {
        shape: "text-emerald-400",
        icon: "text-emerald-400",
    },
    rose: {
        shape: "text-rose-400",
        icon: "text-rose-400",
    },
    amber: {
        shape: "text-amber-400",
        icon: "text-amber-400",
    },
    cyan: {
        shape: "text-cyan-400",
        icon: "text-cyan-400",
    },
    pink: {
        shape: "text-pink-400",
        icon: "text-pink-400",
    },
    indigo: {
        shape: "text-indigo-400",
        icon: "text-indigo-400",
    },
} as const;

export type ProjectColor = keyof typeof projectColors;