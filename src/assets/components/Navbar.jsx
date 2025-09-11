export default function Navbar() {
  return (
    <nav className="w-full py-3 bg-black/80 backdrop-blur-md border-b border-rose-400/20 shadow-md z-[1000] fixed top-0 left-0">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <h1 className="text-center sm:text-left">
          <a
            href="/"
            className="my-font text-[clamp(20px,2.5vw,30px)] mx-auto flex justify-center items-center gap-2 text-rose-400 font-bold tracking-wide transition-transform duration-300 hover:scale-105 hover:text-rose-300"
          >
            Neli&apos;s Arts
            <i className="fa-solid fa-star fa-bounce text-[15px] text-yellow-400 drop-shadow-md"></i>
          </a>
        </h1>
      </div>
    </nav>
  );
}
