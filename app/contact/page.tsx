
export default function ContactPage() {
    return (
        <main className="mx-auto w-full max-w-7xl px-6 pt-28 pb-16">
            <h1 className="font-mono text-4xl font-bold tracking-tight text-white">
                Contact
            </h1>

            <p className="mt-3 max-w-xl font-mono text-sm leading-6 text-zinc-400">
                Have a project in mind or just want to connect? Feel free to reach out.
            </p>

            <div className="mt-10 space-y-6 font-mono text-sm">
                <div>
                    <p className="text-zinc-500">Email</p>
                    <a
                        href="mailto:YOUR_EMAIL"
                        className="text-zinc-300 transition hover:text-rose-400"
                    >
                        YOUR_EMAIL
                    </a>
                </div>

                <div>
                    <p className="text-zinc-500">GitHub</p>
                    <a
                        href="YOUR_GITHUB_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-300 transition hover:text-rose-400"
                    >
                        View GitHub Profile
                    </a>
                </div>

                <div>
                    <p className="text-zinc-500">LinkedIn</p>
                    <a
                        href="YOUR_LINKEDIN_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-300 transition hover:text-rose-400"
                    >
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </main>
    );
}
