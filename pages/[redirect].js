import { useEffect } from 'react'
import Error from 'next/error'

const { DOMAIN_URL } = process.env

// handles redirections for shortlinks
export default function Redirect({ data }) {
  // data == null
  if (!data) {
    // return 404 error
    // this will be edited in the future
    // todo: add a simple error template
    return <Error statusCode={404} />
  }

  // if there is data
  // redirect to it
  useEffect(() => {
    window.location.href = data.redirect
  }, [data])

  return null
}

export async function getServerSideProps(context) {
  // query data
  // DOMAIN_URL -> should end with `/` (trailing slash)
  const res = await fetch(`${DOMAIN_URL}api/get/${context.params.redirect}`)

  var data = {}

  // other statuscodes returns null
  // to the data variable
  if (res.status === 200) {
    data = await res.json()
  } else {
    data = null
  }

  return {
    props: {
      data,
    },
  }
}
