import AddUser from "../components/AddUser";

const HomePage = ({ onAdd }) => {
	return (
		<div>
			<AddUser onAdd={onAdd} />
		</div>
	);
};

export default HomePage;
