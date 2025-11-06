export default function Socials({ links, signupLink }) {
	return (
		<div className="socials">
			<div className="container d-flex space-between">
				<div className="signup">
					<a href={signupLink}>Sign-Up Now!</a>
				</div>
				<div className="social-links">
					<span>Follow Us</span>
					{links.map((current) => (
						<a key={current.id} href={current.link}>
							<img src={current.img} alt="" />
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
