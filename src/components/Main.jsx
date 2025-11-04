export default function Main() {
  return (
    <main>
      <div className="content">
        <div className="container">
          {"-->"} Content goes here {"<--"}
        </div>
      </div>
      <div className="banner">
        <div className="container d-flex space-between">
          <div className="banner-element">
            <img src="./src/assets/img/buy-comics-digital-comics.png" />
            <span>Digital Comics</span>
          </div>
          <div className="banner-element">
            <img src="./src/assets/img/buy-comics-merchandise.png" />
            <span>DC Merchandise</span>
          </div>
          <div className="banner-element">
            <img src="./src/assets/img/buy-comics-subscriptions.png" />
            <span>Subscription</span>
          </div>
          <div className="banner-element">
            <img src="./src/assets/img/buy-comics-shop-locator.png" />
            <span>Comic Shop Locator</span>
          </div>
          <div className="banner-element">
            <img src="./src/assets/img/buy-dc-power-visa.svg" />
            <span>DC Power Visa</span>
          </div>
        </div>
      </div>
    </main>
  );
}
