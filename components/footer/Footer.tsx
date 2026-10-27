
function Footer() {
    return (
        <footer className="w-full border-t border-zinc-900 mt-12">
            <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 font-mono sm:flex-row sm:items-center sm:px-10 lg:px-24">
                <div className="">
                    <p className="text-xs text-zinc-600">
                        © 2026 ARKX.
                    </p>
                    <p className="text-xs text-zinc-600">
                        All Rights Reserved.
                    </p>
                </div>

                <p className="text-xs text-zinc-600">
                    Built with Next.js &amp; Tailwind.
                </p>
            </div>
        </footer>
    )
}

export default Footer;