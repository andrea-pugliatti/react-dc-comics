import Banner from "./Banner";
import Comics from "./Comics";

export default function Main({ comics, banner }) {
	return (
		<main>
			<div className="jumbotron"></div>

			<div className="content">
				<div className="container">
					<Comics comics={comics} />
				</div>
			</div>

			<Banner banner={banner} />
		</main>
	);
}
