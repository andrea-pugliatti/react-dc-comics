import Card from "./Card";

export default function Comics({ comics }) {
	return (
		<>
			<div className="comics-title">Current Series</div>
			<div className="cards">
				{comics.map((comic) => {
					return (
						<Card key={comic.id} title={comic.title} thumb={comic.thumb} />
					);
				})}
			</div>
			<button type="button" className="load-more-button">
				Load More
			</button>
		</>
	);
}
