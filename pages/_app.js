import "bootstrap/dist/css/bootstrap.min.css";
import DefaultLayout from "../layouts/Default";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<DefaultLayout>
			<Component {...pageProps} />;
		</DefaultLayout>
	);
}

export default MyApp;
