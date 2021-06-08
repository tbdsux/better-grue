import { terms } from "../util/terms";

export default function TermsOfUse(props) {
  return (
    <div
      className={`fixed h-screen bg-bland-300 w-full ${
        props.showTerms ? "flex" : "hidden"
      } items-center justify-center z-50`}
    >
      <div className="bg-white h-auto mx-auto w-5/6 md:w-3/4 lg:w-1/2 rounded-xl p-6 relative">
        <button
          onClick={() => props.setShowTerms(false)}
          className="h-6 w-6 absolute top-2 right-2 text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h3 className="text-3xl font-black text-gray-500">Terms Of Use</h3>
        <div className="mx-4 mt-3 h-96 overflow-y-scroll">
          <ul>
            {terms.map((term) => (
              <li className="py-2" key={terms.indexOf(term)}>
                <h3 className="text-3xl text-green-500 font-black">
                  {term.title}
                </h3>
                <p className="text-xl text-gray-500">{term.info}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
