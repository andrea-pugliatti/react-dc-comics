export default function Banner({ banner }) {
	return (
		<div className="banner">
			<div className="container d-flex space-between">
				{banner.map((current) => (
					<div key={current.id} className="banner-element">
						<img src={current.imageSrc} alt="" />
						<a href={current.link}>{current.title}</a>
					</div>
				))}
			</div>
		</div>
	);
}
