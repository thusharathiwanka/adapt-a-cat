import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
			<div className="container-md">
				<Link href="/">
					<a className="navbar-brand">Adopt a Cat</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
