export default function Navbar() {
  return (
    <div className="w-full py-4">
      <nav className="w-4/5 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://img.icons8.com/flat_round/64/000000/crane-hook.png"
            alt=""
            className="w-12 h-12"
          />
          <h1 className="text-2xl font-black ml-2 tracking-wide text-green-500">
            Grue.cf
          </h1>
        </div>
        <ul className="text-xl text-gray-400 flex">
          <li className="pr-8 tracking-wide font-black">
            <a href="#" className="hover:text-green-400">
              API
            </a>
          </li>
          <li className="pl-8 tracking-wide font-black">
            <a href="#" className="hover:text-green-400">
              Github
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
