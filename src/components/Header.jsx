export default function Header({ menu, logo }) {
	return (
		<header>
			<div className="container d-flex space-between">
				<a href="/">
					<img src={logo} alt="" />
				</a>
				<ul>
					{menu.map((current) => (
						<li key={current.id} className={current.isActive ? "active" : ""}>
							<a href={current.link}>{current.name}</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}
