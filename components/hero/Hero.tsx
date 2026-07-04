function Hero(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 max-w-2xl">
            <h1 className="text-5xl font-bold">
                I am Arkx.
            </h1>
            <p className="text-gray-400 text-lg">
                Aspiring Full Stack Developer
            </p>
            <p className="text-gray-400 text-lg">
                Familiar with HTML,CSS,JavaScript,Python & SQL
            </p>
            <p className="text-gray-400 text-lg">
                Currently learning React, Typescript & Node.js to build modern web application
            </p>
            <button className="px-6 py-4 mt-6 rounded-lg bg-blue-600 text-white">View projects</button>
        </div>
    )
}
export default Hero;