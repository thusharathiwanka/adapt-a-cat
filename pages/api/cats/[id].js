import { cats } from "../../../data/data.js";

export default function getCats(req, res) {
	const { id } = req.query;
	const cat = cats.find(cat => cat.id === parseInt(id));

	res.status(200).json({ cat: cat });
}
