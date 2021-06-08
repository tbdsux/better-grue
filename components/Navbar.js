export default function Navbar() {
  return (
    <div className="w-full py-6">
      <nav className="w-11/12 md:w-5/6 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://img.icons8.com/flat_round/64/000000/crane-hook.png"
            alt=""
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-black ml-2 tracking-wide text-green-500">
            grue.cf
          </h1>
        </div>
        <ul className="text-lg text-gray-400 flex items-center">
          <li className="pr-2 md:pr-8 tracking-wide font-black">
            <a href="#api" className="hover:text-green-400">
              API
            </a>
          </li>
          <li className="pl-2 md:pl-8 tracking-wide font-black">
            <a
              target="_blank"
              href="https://github.com/TheBoringDude/better-grue"
              className="hover:text-green-400"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
