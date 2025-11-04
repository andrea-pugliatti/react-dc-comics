export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="container d-flex space-between">
          <div className="banner-element">
            <img src="./src/assets/img/buy-comics-digital-comics.png" />
            <a href="#">Digital Comics</a>
          </div>
          <div className="banner-element">
            <img src="./src/assets/img/buy-comics-merchandise.png" />
            <a href="#">DC Merchandise</a>
          </div>
          <div className="banner-element">
            <img src="./src/assets/img/buy-comics-subscriptions.png" />
            <a href="#">Subscription</a>
          </div>
          <div className="banner-element">
            <img src="./src/assets/img/buy-comics-shop-locator.png" />
            <a href="#">Comic Shop Locator</a>
          </div>
          <div className="banner-element">
            <img src="./src/assets/img/buy-dc-power-visa.svg" />
            <a href="#">DC Power Visa</a>
          </div>
        </div>
      </div>
    </>
  );
}
