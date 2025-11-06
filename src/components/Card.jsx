export default function Card({ id, thumb, title }) {
	// const { id, thumb, title } = props;

	return (
		<div className="card" key={id}>
			<div className="img-container">
				<img src={thumb} alt="" />
			</div>
			<div>{title}</div>
		</div>
	);
}
