export default function SiteLinks() {
  const links = [
    {
      id: 1,
      title: "DC Comics",
      links: [
        { id: 1, title: "Characters", link: "#" },
        { id: 2, title: "Comics", link: "#" },
        { id: 3, title: "Movies", link: "#" },
        { id: 4, title: "TV", link: "#" },
        { id: 5, title: "Games", link: "#" },
        { id: 6, title: "Videos", link: "#" },
        { id: 7, title: "News", link: "#" },
      ],
    },
    {
      id: 2,
      title: "Shop",
      links: [
        { id: 1, title: "Shop DC", link: "#" },
        { id: 2, title: "Shop DC Collectibles", link: "#" },
      ],
    },
    {
      id: 3,
      title: "DC",
      links: [
        { id: 1, title: "Terms Of Use", link: "#" },
        { id: 2, title: "Privacy Policy", link: "#" },
        { id: 3, title: "Ad Choices", link: "#" },
        { id: 4, title: "Advertising", link: "#" },
        { id: 5, title: "Jobs", link: "#" },
        { id: 6, title: "Subscriptions", link: "#" },
        { id: 7, title: "Talent Workshops", link: "#" },
        { id: 8, title: "CPSC Certificates", link: "#" },
        { id: 9, title: "Ratings", link: "#" },
        { id: 10, title: "Shop Help", link: "#" },
        { id: 11, title: "Contact us", link: "#" },
      ],
    },
    {
      id: 4,
      title: "Sites",
      links: [
        { id: 1, title: "DC", link: "#" },
        { id: 2, title: "MAD Magazine", link: "#" },
        { id: 3, title: "DC Kids", link: "#" },
        { id: 4, title: "DC Universe", link: "#" },
        { id: 5, title: "DC Power Visa", link: "#" },
      ],
    },
  ];

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
