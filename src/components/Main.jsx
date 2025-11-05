import Banner from "./Banner";
import Comics from "./Comics";

export default function Main() {
  return (
    <main>
      <div className="jumbotron"></div>
      <div className="content">
        <div className="container">
          <Comics />
        </div>
      </div>
      <Banner />
    </main>
  );
}
