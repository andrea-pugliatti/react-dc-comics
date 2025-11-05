export default function Socials() {
	const links = [
		{ id: 1, img: "./src/assets/img/footer-facebook.png", link: "#" },
		{ id: 2, img: "./src/assets/img/footer-twitter.png", link: "#" },
		{ id: 3, img: "./src/assets/img/footer-youtube.png", link: "#" },
		{ id: 4, img: "./src/assets/img/footer-pinterest.png", link: "#" },
		{ id: 5, img: "./src/assets/img/footer-periscope.png", link: "#" },
	];
	const signupLink = "#";

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
