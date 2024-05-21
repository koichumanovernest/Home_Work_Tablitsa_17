import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const EditUserModal = ({ isOpen, onRequestClose, user, onSave }) => {
	const [formData, setFormData] = useState(user);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave(formData);
		onRequestClose();
	};

	return (
		<StyledModal isOpen={isOpen} onRequestClose={onRequestClose}>
			<Text>Редактировать Пользователя</Text>
			<Form onSubmit={handleSubmit}>
				<Input
					type="text"
					name="firstName"
					placeholder="Имя"
					value={formData.firstName}
					onChange={handleChange}
				/>
				<Input
					type="text"
					name="lastName"
					placeholder="Фамилия"
					value={formData.lastName}
					onChange={handleChange}
				/>
				<Select name="gender" value={formData.gender} onChange={handleChange}>
					<option value="">Выберите пол</option>
					<option value="Мужской">Мужской</option>
					<option value="Женский">Женский</option>
				</Select>
				<Select
					name="cityOfBirth"
					value={formData.cityOfBirth}
					onChange={handleChange}>
					<option value="">Выберите город</option>
					<option value="Бишкек">Бишкек</option>
					<option value="Иссык-Куль">Иссык-Куль</option>
					<option value="Нарын">Нарын</option>
					<option value="Талас">Талас</option>
					<option value="Ош">Ош</option>
					<option value="Баткен">Баткен</option>
					<option value="Джалал-Абад">Джалал-Абад</option>
				</Select>
				<Input
					type="date"
					name="yearOfBirth"
					placeholder="Год Рождения"
					value={formData.yearOfBirth}
					onChange={handleChange}
				/>
				<Button type="submit">Сохранить</Button>
			</Form>
		</StyledModal>
	);
};

export default EditUserModal;

const StyledModal = styled(Modal)`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #f9f9f9;
	padding: 40px;
	border-radius: 8px;
	max-width: 400px;
	width: 100%;
	text-align: center;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const Text = styled.h3`
	font-size: 21px;
	font-family: Arial, Helvetica, sans-serif;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Input = styled.input`
	width: 100%;
	padding: 12px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
`;

const Select = styled.select`
	width: 100%;
	padding: 12px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
`;

const Button = styled.button`
	padding: 12px 24px;
	margin-top: 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	background-color: #4caf50;
	color: white;
	transition: background-color 0.3s;

	&:hover {
		background-color: #45a049;
	}
`;
