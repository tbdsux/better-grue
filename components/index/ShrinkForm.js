import { useState, useRef } from 'react'
import axios from 'axios'
import { data } from 'autoprefixer'

export default function ShrinkForm() {
  // states
  const urlInput = useRef(null)
  const [validUrl, setValidUrl] = useState(true)
  const [buttonText, setButtonText] = useState('shorten')

  // shrink error
  const [shrinkError, setShrinkError] = useState(false)

  // shortlink copy
  const [copyStatus, setCopyStatus] = useState('copy')

  // shrinking or not
  const [shrinkDone, setShrinkDone] = useState(false)

  // this is where the data response goes
  // after calling the api to shrink the url
  const [grueData, setGrueData] = useState({})

  // just a simple url validation
  const SimpleUrlValidation = () => {
    if (urlInput.current.value !== '') {
      // url should start with `http://` or `https://`
      if (
        urlInput.current.value.startsWith('http://') ||
        urlInput.current.value.startsWith('https://')
      ) {
        setValidUrl(true)

        // change button text
        setButtonText('shrinking...')

        return true
      } else {
        setValidUrl(false)
      }
    } else {
      // focus the input if blank
      urlInput.current.focus()
    }

    return false
  }

  // url shrinker handler
  // contact the internal api
  const handleShortenClick = () => {
    // validate
    const valid = SimpleUrlValidation()

    // should be valid, to continue
    if (valid) {
      axios
        .post(
          '/api/generate',
          {
            url: urlInput.current.value,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then((resp) => {
          if (resp.status === 200) {
            // set data
            setGrueData(resp.data)

            // off err if set, and shrinking to done
            setShrinkError(false)
            setShrinkDone(true)

            // return true
            return true
          }
          // there was an error
          // set error and return false
          setShrinkError(true)
        })
        .catch((e) => {
          // there was an error
          // set error
          setShrinkError(true)
          // log error
          console.error(e)
        })
    }
  }

  // shorten another button handler
  // resets the states
  const AnotherShrink = () => {
    urlInput.current.value = ''
    setGrueData({})
    setShrinkDone(false)
    setShrinkError(false)
    setButtonText('shorten')
    setCopyStatus('copy')
    setValidUrl(true)
  }

  return (
    <div className="mt-4">
      <div>
        <input
          ref={urlInput}
          type="url"
          title="Please enter a valid url"
          className={`${
            validUrl ? 'border-gray-300' : 'border-red-500'
          } py-3 w-full text-xl sm:text-2xl border-2 text-gray-500 px-5 rounded-full outline-none focus:border-green-400 focus:text-green-500`}
          placeholder="Enter a very long url in here..."
        />
        {!validUrl ? (
          <span className="ml-4 mt-2 text-red-500">
            Invalid Website Url! Please check and try again.
          </span>
        ) : null}
      </div>

      <div className="my-2">
        {shrinkDone ? (
          <button
            onClick={AnotherShrink}
            className="py-2 tex-lg sm:text-xl font-black ml-3 text-white rounded-lg outline-none focus:outline-none px-4 bg-gray-500 hover:bg-gray-600"
          >
            shorten another
          </button>
        ) : (
          <button
            onClick={handleShortenClick}
            disabled={buttonText === 'shrinking...'}
            className={`py-2 tex-lg sm:text-xl font-black uppercase tracking-wide ${
              buttonText === 'shorten'
                ? 'bg-green-500 cursor-pointer'
                : 'bg-green-600 cursor-not-allowed'
            } hover:bg-green-600 ml-3 text-white rounded-lg outline-none focus:outline-none px-4`}
          >
            {buttonText}
          </button>
        )}
      </div>

      <hr className="mb-2" />

      {/* this is where the result shorten url is */}
      {shrinkDone ? (
        <div className="bg-gray-100 ml-2 w-full py-2 rounded-lg flex flex-col xs:flex-row items-center justify-between px-4">
          <button
            title="Copy the generated shortlink"
            onClick={() => {
              navigator.clipboard.writeText(grueData.shortlink.long)
              setCopyStatus('copied')
            }}
            className={`${
              copyStatus === 'copy' ? 'bg-gray-600' : 'bg-gray-700'
            } hover:bg-gray-700 text-white cursor-pointer py-1 px-4 rounded-full`}
          >
            {copyStatus}
          </button>
          <a
            href="#"
            target="_blank"
            className="text-xl font-bold text-gray-700 tracking-wide overflow-auto ml-2 mt-2 xs:mt-0"
          >
            {grueData.shortlink.long}
          </a>
        </div>
      ) : null}

      {/* error message */}
      {shrinkError ? (
        <div className="bg-gray-100 ml-2 w-100 rounded-lg py-2 px-4">
          <p className="text-red-500 text-lg tracking-wide text-center">
            Error! This is a problem in our side. Please try again later.
          </p>
        </div>
      ) : null}
    </div>
  )
}
