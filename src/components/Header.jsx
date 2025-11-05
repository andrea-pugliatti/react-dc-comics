export default function Header() {
  const logoPath = "./src/assets/img/dc-logo.png";

  const navbar = [
    { id: 1, name: "Characters", link: "#", isActive: false },
    { id: 2, name: "Comics", link: "#", isActive: true },
    { id: 3, name: "Movies", link: "#", isActive: false },
    { id: 4, name: "TV", link: "#", isActive: false },
    { id: 5, name: "Games", link: "#", isActive: false },
    { id: 6, name: "Collectibles", link: "#", isActive: false },
    { id: 7, name: "Videos", link: "#", isActive: false },
    { id: 8, name: "Fans", link: "#", isActive: false },
    { id: 9, name: "News", link: "#", isActive: false },
    { id: 10, name: "Shop", link: "#", isActive: false },
  ];

  return (
    <header>
      <div className="container d-flex space-between">
        <a href="#">
          <img src={logoPath} />
        </a>
        <ul>
          {navbar.map((current) => (
            <li key={current.id} className={current.isActive ? "active" : ""}>
              <a href={current.link}>{current.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
