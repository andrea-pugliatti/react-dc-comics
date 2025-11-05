export default function Socials() {
  const imageLinks = [
    "./src/assets/img/footer-facebook.png",
    "./src/assets/img/footer-twitter.png",
    "./src/assets/img/footer-youtube.png",
    "./src/assets/img/footer-pinterest.png",
    "./src/assets/img/footer-periscope.png",
  ];

  return (
    <div className="socials">
      <div className="container d-flex space-between">
        <div className="signup">
          <a href="#">Sign-Up Now!</a>
        </div>
        <div className="social-links">
          <span>Follow Us</span>
          {imageLinks.map((current, index) => (
            <a key={index} href="#">
              <img src={current} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
