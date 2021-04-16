import { useEffect, useState } from "react";

import Error from "next/error";
import { useRouter } from "next/router";

// handles redirections for shortlinks
export default function RedirectFromUrl() {
	const [error, setError] = useState(false);
	const router = useRouter();
	const { redirect } = router.query;

	useEffect(() => {
		if (redirect) {
			fetch(`/api/get/${redirect}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ url: redirect }),
			})
				.then((res) => res.json())
				.then((data) => {
					router.push(data.redirect);
				})
				.catch(() => {
					setError(true);
				});
		}
	}, [redirect]);

	return <>{error ? <Error statusCode={404} /> : null}</>;
}
