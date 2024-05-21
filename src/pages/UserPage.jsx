import { Link } from "react-router-dom";
import UserTable from "../components/UserTable";
import styled from "styled-components";

const UserPage = ({ users, onDelete, onEdit }) => {
	return (
		<div>
			<FlexBox>
				<Text>Список студентов</Text>
				<StyledLink
					to="/add"
					style={{
						color: "black",
						textDecoration: "none",
						fontSize: "20px",
						fontFamily: "Arial, Helvetica, sans-serif",
						marginTop: "10px",
					}}>
					Добавить 
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
	justify-content: space-between;
`;

const StyledLink = styled(Link)`
	background: #2bff00;
	margin-bottom: 10px;
	position: relative;
	left: -10px;
	height: 30px;
	width: 120px;
	border-radius: 10px ;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #9c1818;
`
