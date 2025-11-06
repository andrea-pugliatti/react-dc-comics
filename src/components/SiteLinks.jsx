export default function SiteLinks({ links }) {
	return (
		<div className="site-links">
			<div className="logo container">
				<div className="row">
					{links.map((current) => (
						<div key={current.id}>
							<h3>{current.title}</h3>
							<ul>
								{current.links.map((item) => (
									<li key={item.id}>
										<a href={item.link}>{item.title}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
