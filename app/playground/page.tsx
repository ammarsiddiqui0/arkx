"use client";

import { useState , useRef } from "react";

export default function Playground() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const nameInputRef = useRef<HTMLInputElement>(null);

    function focusNameInput() {
        nameInputRef.current?.focus();
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(`Hello, ${name}`);
    }

    return (
        <div className="p-10">
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
    );
}