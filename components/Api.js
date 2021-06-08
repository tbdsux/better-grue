export default function APIDocumentation() {
  return (
    <div className="w-5/6 mx-auto py-20" id="api">
      <div>
        <h2 className="text-4xl text-gray-600 font-black">
          Basic API Documentation
        </h2>
        <p className="text-xl tracking-wide p-3 text-gray-500">
          Both endpoints have similar responses but have different{" "}
          <span className="font-bold">methods</span> allowed.
        </p>
      </div>
      <div className="pt-10">
        <ul>
          <li className="mb-12">
            <div className="p-6 rounded-xl shadow-2xl">
              <h3 className="text-3xl text-green-500 font-black flex items-center">
                <div className="h-4 w-4 bg-green-500 mr-2 rounded-full"></div>{" "}
                Shorten a new url
              </h3>
              <div className="my-3 flex flex-col xs:flex-row items-center text-xl text-gray-600">
                <p>endpoint: </p>
                <p className="py-1 px-2 rounded-lg bg-gray-800 text-gray-300 ml-2 tracking-wider">
                  /api/generate
                </p>
              </div>
              <hr className="mb-3" />
              <div className="bg-gray-700 py-2 px-3 rounded-md text-white overflow-y-scroll">
                <pre>
                  <code>
                    curl -X POST https://grue.cf/api/generate -H 'Content-Type:
                    application/json' <br />
                    -d {JSON.stringify({ url: "https://www.google.com" })}
                  </code>
                </pre>
              </div>
              <div className="mt-4">
                <p className="text-xl text-gray-600">Response</p>
                <div className="rounded-md bg-gray-600 p-3 text-gray-100 overflow-y-scroll">
                  <pre>
                    <code>
                      {JSON.stringify(
                        {
                          _id: "5ffefa6096d4370008ba400e",
                          request_url: "https://www.google.com",
                          redirect: "https://www.google.com",
                          shortlink: {
                            short: "QU47Q",
                            long: "https://grue.cf/QU47Q",
                          },
                          created_date: "2021-01-13T13:49:20Z",
                          last_visit_date: "2021-01-13T13:49:20Z",
                        },
                        null,
                        2
                      )}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </li>
          <li className="mt-12">
            <div className="p-6 rounded-xl shadow-2xl">
              <h3 className="text-3xl text-green-500 font-black flex items-center">
                <div className="h-4 w-4 bg-green-500 mr-2 rounded-full"></div>{" "}
                Get grue (shortened / shortlink) data
              </h3>
              <div className="my-3 flex flex-col xs:flex-row items-center text-xl text-gray-600">
                <p>endpoint: </p>
                <p className="py-1 px-2 rounded-lg bg-gray-800 text-gray-300 ml-2 tracking-wider">
                  /api/get/[shortlinkID]
                </p>
              </div>
              <hr className="mb-3" />
              <div className="bg-gray-700 py-2 px-3 rounded-md text-white overflow-y-scroll">
                <pre>
                  <code>curl https://grue.cf/api/get/QU47Q</code>
                </pre>
              </div>
              <div className="mt-4">
                <p className="text-xl text-gray-600">Response</p>
                <div className="rounded-md bg-gray-600 p-3 text-gray-100 overflow-y-scroll">
                  <pre>
                    <code>
                      {JSON.stringify(
                        {
                          _id: "5ffefa6096d4370008ba400e",
                          request_url: "https://www.google.com",
                          redirect: "https://www.google.com",
                          shortlink: {
                            short: "QU47Q",
                            long: "https://grue.cf/QU47Q",
                          },
                          created_date: "2021-01-13T13:49:20Z",
                          last_visit_date: "2021-01-13T13:49:20Z",
                        },
                        null,
                        2
                      )}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
