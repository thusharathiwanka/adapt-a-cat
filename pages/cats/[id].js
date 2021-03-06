import { useEffect, useState } from "react";

import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

const Cat = () => {
	const router = useRouter();
	const { id } = router.query;

	const [cat, setCat] = useState(null);

	useEffect(() => {
		const fetchCat = async () => {
			const res = await fetch(`/api/cats/${id}`);
			const data = await res.json();
			setCat(data.cat);
		};

		fetchCat();
	}, [id]);

	return cat ? (
		<>
			<div className="container d-flex justify-content-center mt-5 align-items-center">
				<Head>
					<title>Cats | {cat.name}</title>
				</Head>
				<Image src={cat.image.url} alt={cat.image.alt} width={1600} height={2400} />
				<div className="mx-5">
					<h1>{cat.name}</h1>
					<p>{cat.description}</p>
				</div>
			</div>
			<div className="text-center mt-5">
				<button type="button" className="btn btn-primary" onClick={() => router.push("/cats")}>
					Back to Cats
				</button>
			</div>
		</>
	) : (
		"Loading..."
	);
};

export default Cat;
