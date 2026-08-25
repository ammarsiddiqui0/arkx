"use client";

import { useState , createContext , useContext , useRef } from "react";

const ThemeContext = createContext("dark");

function ThemeDisplay() {
    const theme = useContext(ThemeContext);

    return <p>Current theme: {theme}</p>;
}

export default function Playground() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const nameInputRef = useRef<HTMLInputElement>(null);

    const [theme, setTheme] = useState("dark");

    function focusNameInput() {
        nameInputRef.current?.focus();
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(`Hello, ${name}`);
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className="p-10">
                <ThemeDisplay />

                <button 
                    type='button'
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    Toggle Theme
                </button>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
                    <input
                        ref={nameInputRef}
                        className="border p-2 rounded w-full"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Enter your age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />

                    <button className="border px-4 py-2 rounded" type="submit">
                        Submit
                    </button>

                    <button
                        type="button"
                        onClick={focusNameInput}
                        className="m-6 border px-4 py-2 rounded"
                        >
                            Focus Name
                    </button>
                </form>
            </div>
        </ThemeContext.Provider>
    );
}