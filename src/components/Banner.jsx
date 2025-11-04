export default function Banner() {
  const digitalComicsImage = "./src/assets/img/buy-comics-digital-comics.png";
  const merchandiseImage = "./src/assets/img/buy-comics-merchandise.png";
  const subscriptionsImage = "./src/assets/img/buy-comics-subscriptions.png";
  const shopLocatorImage = "./src/assets/img/buy-comics-shop-locator.png";
  const powerVisaImage = "./src/assets/img/buy-dc-power-visa.svg";

  return (
    <div className="banner">
      <div className="container d-flex space-between">
        <div className="banner-element">
          <img src={digitalComicsImage} />
          <a href="#">Digital Comics</a>
        </div>
        <div className="banner-element">
          <img src={merchandiseImage} />
          <a href="#">DC Merchandise</a>
        </div>
        <div className="banner-element">
          <img src={subscriptionsImage} />
          <a href="#">Subscription</a>
        </div>
        <div className="banner-element">
          <img src={shopLocatorImage} />
          <a href="#">Comic Shop Locator</a>
        </div>
        <div className="banner-element">
          <img src={powerVisaImage} />
          <a href="#">DC Power Visa</a>
        </div>
      </div>
    </div>
  );
}
