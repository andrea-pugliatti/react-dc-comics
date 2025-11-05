export default function Banner() {
  const banner = [
    {
      id: 1,
      title: "Digital Comics",
      link: "#",
      imageSrc: "./src/assets/img/buy-comics-digital-comics.png",
    },
    {
      id: 2,
      title: "DC Merchandise",
      link: "#",
      imageSrc: "./src/assets/img/buy-comics-merchandise.png",
    },
    {
      id: 3,
      title: "Subscription",
      link: "#",
      imageSrc: "./src/assets/img/buy-comics-subscriptions.png",
    },
    {
      id: 4,
      title: "Comic Shop Locator",
      link: "#",
      imageSrc: "./src/assets/img/buy-comics-shop-locator.png",
    },
    {
      id: 5,
      title: "DC Power Visa",
      link: "#",
      imageSrc: "./src/assets/img/buy-dc-power-visa.svg",
    },
  ];

  return (
    <div className="banner">
      <div className="container d-flex space-between">
        {banner.map((current) => (
          <div key={current.id} className="banner-element">
            <img src={current.imageSrc} />
            <a href={current.link}>{current.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
