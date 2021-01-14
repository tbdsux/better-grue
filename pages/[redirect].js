import { useEffect } from 'react'

const { DOMAIN_URL } = process.env

// handles redirections for shortlinks
export default function Redirect({ data }) {
  useEffect(() => {
    if (data) {
      window.location.href = data.redirect
    }
  }, [data])

  if (!data) {
    // return the error page as default
    return <div>404 Not Found</div>
  }

  return null
}

export async function getServerSideProps(context) {
  // query data
  const res = await fetch(`${DOMAIN_URL}api/get/${context.params.redirect}`)

  var data = {}

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
