export default function Navbar() {
    return (
        <>
            <nav className="w-full py-2 bg-black border-b-2 border-b-slate-200 border-opacity-15 z-[1000]">
                <div className="container mx-auto px-4 flex justify-center items-center">
                    <h1 className="text-center sm:text-left">
                        <a
                            href="/"
                            className="my-font text-[20px] sm:text-[30px] mx-auto flex justify-center items-center gap-2 text-red-500 font-bold"
                        >
                            Neli's Arts
                            <i className="fa-solid fa-star fa-bounce text-[15px]"></i>
                        </a>
                    </h1>
                </div>
            </nav>
        </>
    );
}
