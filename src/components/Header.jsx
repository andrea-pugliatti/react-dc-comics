export default function Header() {
  const logoPath = "./src/assets/img/dc-logo.png";
  const navbar = [
    "Characters",
    "Comics",
    "Movies",
    "TV",
    "Games",
    "Collectibles",
    "Videos",
    "Fans",
    "News",
    "Shop",
  ];

  return (
    <header>
      <div className="container d-flex space-between">
        <a href="#">
          <img src={logoPath} />
        </a>
        <ul>
          {navbar.map((current, index) => (
            <li key={index}>
              <a href="#">{current}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
