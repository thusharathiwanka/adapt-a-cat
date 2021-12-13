import { useEffect, useState } from "react";

import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

const Cats = () => {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const fetchCats = async () => {
			const res = await fetch("/api/cats");
			const data = await res.json();
			setCats(data.cats);
		};
		fetchCats();
	}, []);

	return (
		<>
			<Navbar />
			<div className="container d-flex justify-content-center align-items-center flex-wrap">
				{cats.length > 0 ? cats.map(cat => <Card cat={cat} key={cat.id} />) : "Loading..."}
			</div>
		</>
	);
};

export default Cats;
