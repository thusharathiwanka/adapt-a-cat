import Image from "next/image";
import { useRouter } from "next/router";

const Card = ({ cat }) => {
	const router = useRouter();

	return (
		<div
			className="card m-4"
			style={{ width: "15rem" }}
			onClick={() => router.push(`cats/${cat.id}`)}
		>
			<Image
				className="card-img-top"
				src={cat.image.url}
				alt={cat.image.alt}
				width={400}
				height={300}
			/>
			<div className="card-body">
				<h5 className="card-title">{cat.name}</h5>
				<p className="card-text">{cat.phone}</p>
				<p className="card-text">{cat.email}</p>
			</div>
		</div>
	);
};

export default Card;
