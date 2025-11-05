import Banner from "./Banner";

export default function Main() {
  return (
    <main>
      <div className="jumbotron"></div>
      <div className="content">
        <div className="container">
          {"-->"} Content goes here {"<--"}
        </div>
      </div>
      <Banner />
    </main>
  );
}
