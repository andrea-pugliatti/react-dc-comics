export default function Header() {
  const logoPath = "./src/assets/img/dc-logo.png";
  return (
    <header>
      <div className="container d-flex space-between">
        <a href="#">
          <img src={logoPath} alt="" />
        </a>
        <ul>
          <li>
            <a href="#">Characters</a>
          </li>
          <li>
            <a href="#">Comics</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">TV</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Collectibles</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
