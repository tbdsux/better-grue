import Error from "next/error";
import Router from "next/router";
import urljoin from "url-join";

// handles redirections for shortlinks
export default function RedirectFromUrl({ q }) {
  // show error if none
  if (q.error) <Error statusCode={404} />;

  // make sure to redirect if not error
  Router.push(q.data.redirect);
}

export const getServerSideProps = async (context) => {
  const { redirect } = context.params;

  const url = urljoin(process.env.DOMAIN_URL, `api/get/${redirect}`);

  const q = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: redirect }),
  })
    .then((r) => r.json())
    .then((d) => {
      return {
        error: false,
        data: d,
      };
    })
    .catch(() => {
      return {
        error: true,
        data: null,
      };
    });

  // redirect if not error
  if (!q.error) {
    return {
      redirect: {
        permanent: true,
        destination: q.data.redirect,
      },
    };
  }

  // return props
  return {
    props: {
      q,
    },
  };
};
