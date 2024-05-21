import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import AddUser from "./components/AddUser";

const App = () => {
	const [users, setUsers] = useState([]);

	const addUser = (user) => {
		setUsers([...users, user]);
	};

	const editUser = (index, updatedUser) => {
		const newUsers = [...users];
		newUsers[index] = updatedUser;
		setUsers(newUsers);
	};

	const deleteUser = (index) => {
		setUsers(users.filter((_, i) => i !== index));
	};

	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage onAdd={addUser} />} />
				<Route
					path="/users"
					element={
						<UserPage users={users} onDelete={deleteUser} onEdit={editUser} />
					}
				/>
				<Route path="/add" element={<AddUser onAdd={addUser} />} />
			</Routes>
		</Router>
	);
};

export default App;
