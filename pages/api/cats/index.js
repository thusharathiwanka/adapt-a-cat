import { cats } from "../../../data/data";

export default function getCats(req, res) {
	res.status(200).json({ cats: cats });
}
