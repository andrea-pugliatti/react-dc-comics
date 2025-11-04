export default function Socials() {
  const facebookImage = "./src/assets/img/footer-facebook.png";
  const twitterImage = "./src/assets/img/footer-twitter.png";
  const youtubeImage = "./src/assets/img/footer-youtube.png";
  const pinterestImage = "./src/assets/img/footer-pinterest.png";
  const periscopeImage = "./src/assets/img/footer-periscope.png";

  return (
    <div className="socials">
      <div className="container d-flex space-between">
        <div className="signup">
          <a href="#">Sign-Up Now!</a>
        </div>
        <div className="social-links">
          <span>Follow Us</span>
          <a href="#">
            <img src={facebookImage} />
          </a>
          <a href="#">
            <img src={twitterImage} />
          </a>
          <a href="#">
            <img src={youtubeImage} />
          </a>
          <a href="#">
            <img src={pinterestImage} />
          </a>
          <a href="#">
            <img src={periscopeImage} />
          </a>
        </div>
      </div>
    </div>
  );
}
