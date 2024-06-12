import AppBar from "../components/AppBar"

const HomePage = () => {
    return (
        <div>
            <div className="flex flex-col min-h-[100dvh]">
                <AppBar/>
                <main className="flex-1 mt-[100px]">
                    <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y min-h-[560px] h-full">
                        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                                <div className="mt-[10%]">
                                    <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                        MEDIUM
                                    </h1>
                                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.
                                    </p>
                                    <a href={"/blogs"}>
                                    <button className="border-2 border-slate-800 px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-all duration-300 ease-in mt-4">Check out blogs</button>
                                    </a>
                                </div>
                                <div>
                                    <img src="https://www.jezner.com/wp-content/uploads/2023/02/medium.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 " id="about">
                        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Medium</h2>
                                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.
                                </p>
                            </div>
                            <div className="mx-auto w-full max-w-sm space-y-2">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white hover:bg-slate-200 rounded-lg p-4 shadow-md">
                                        <h3 className="text-lg font-bold">Buissness</h3>
                                        <p className="text-gray-500 dark:text-gray-400">Commercial, Industrial,Professional activities</p>
                                    </div>
                                    <div className="bg-white hover:bg-slate-200 rounded-lg p-4 shadow-md">
                                        <h3 className="text-lg font-bold">Technology</h3>
                                        <p className="text-gray-500 dark:text-gray-400">Front-End, Back-End, Android, Ar/Vr, IOT</p>
                                    </div>
                                    <div className="bg-white hover:bg-slate-200 rounded-lg p-4 shadow-md">
                                        <h3 className="text-lg font-bold">Sports</h3>
                                        <p className="text-gray-500 dark:text-gray-400">News, Football, Cricket and many more</p>
                                    </div>
                                    <div className="bg-white hover:bg-slate-200 rounded-lg p-4 shadow-md">
                                        <h3 className="text-lg font-bold">Education</h3>
                                        <p className="text-gray-500 dark:text-gray-400">Graduation, PG ,Phd, JEE, Secondary and High School Education</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Feel free to reach out if you have any questions or would like to discuss a project.
                                    </p>
                                </div>
                                <div className="mx-auto w-full max-w-sm space-y-2">
                                    <form className="flex space-x-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                                            placeholder="Enter your email"
                                            type="email"
                                        />
                                        <button
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                            type="submit"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">I'll get back to you as soon as possible.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 MEDIUM. All rights reserved.</p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <a className="text-xs hover:underline underline-offset-4" href="#">
                            Privacy
                        </a>
                        <a className="text-xs hover:underline underline-offset-4" href="#">
                            Terms of Service
                        </a>
                    </nav>
                </footer>
            </div>
        </div>
    )
}

export default HomePage