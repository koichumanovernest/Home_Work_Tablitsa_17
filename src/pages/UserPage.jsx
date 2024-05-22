import { Link } from "react-router-dom";
import UserTable from "../components/UserTable";
import styled from "styled-components";

const UserPage = ({ users, onDelete, onEdit }) => {
	return (
		<div>
			<FlexBox>
				<Text>JS - 13 - Managment</Text>
				<StyledLink
					to="/add"
			>
					Add Student
				</StyledLink>
			</FlexBox>
			<UserTable users={users} onDelete={onDelete} onEdit={onEdit} />
		</div>
	);
};

export default UserPage;

const Text = styled.h1`
	font-family: Arial, Helvetica, sans-serif;
`;

const FlexBox = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 10px;
`;

const StyledLink = styled(Link)`
	background: #0c0c0c;
	margin-bottom: 10px;
	height: 40px;
	width: 220px;
	border-radius: 10px ;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ebebeb;
	font-size: 20px;
	

`
