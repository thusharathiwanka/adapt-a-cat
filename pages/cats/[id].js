import { useEffect, useState } from "react";

import Image from "next/image";
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
		<div className="container d-flex">
			<Image src={cat.image.url} alt={cat.image.alt} width={600} height={800} />
			<div className="mx-5">
				<h1>{cat.name}</h1>
				<p>{cat.description}</p>
			</div>
		</div>
	) : (
		"Loading..."
	);
};

export default Cat;
