import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddUser = ({ onAdd }) => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		gender: "",
		cityOfBirth: "",
		yearOfBirth: "",
	});
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			!formData.firstName ||
			!formData.lastName ||
			!formData.gender ||
			!formData.cityOfBirth ||
			!formData.yearOfBirth
		) {
			setErrors({
				firstName: !formData.firstName ? "Заполните поле" : "",
				lastName: !formData.lastName ? "Заполните поле" : "",
				gender: !formData.gender ? "Выберите пол" : "",
				cityOfBirth: !formData.cityOfBirth ? "Выберите город" : "",
				yearOfBirth: !formData.yearOfBirth ? "Заполните поле" : "",
			});
			return;
		}
		onAdd(formData);
		navigate("/users");
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				type="text"
				name="firstName"
				placeholder="Имя"
				value={formData.firstName}
				onChange={handleChange}
				error={!!errors.firstName}
			/>
			{errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
			<Input
				type="text"
				name="lastName"
				placeholder="Фамилия"
				value={formData.lastName}
				onChange={handleChange}
				error={!!errors.lastName}
			/>
			{errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
			<Select
				name="gender"
				value={formData.gender}
				onChange={handleChange}
				error={!!errors.gender}>
				<option value="">Выберите пол</option>
				<option value="Мужской">Мужской</option>
				<option value="Женский">Женский</option>
			</Select>
			{errors.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
			<Select
				name="cityOfBirth"
				value={formData.cityOfBirth}
				onChange={handleChange}
				error={!!errors.cityOfBirth}>
				<option value="">Выберите город</option>
				<option value="Бишкек">Бишкек</option>
				<option value="Иссык-куль">Иссык-Куль</option>
				<option value="Нарын">Нарын</option>
				<option value="Талас">Талас</option>
				<option value="Ош">Ош</option>
				<option value="Баткен">Баткен</option>
				<option value="Джалал-Абад">Джалал-Абад</option>
			</Select>
			{errors.cityOfBirth && <ErrorMessage>{errors.cityOfBirth}</ErrorMessage>}
			<Input
				type="date"
				name="yearOfBirth"
				placeholder="Год Рождения"
				value={formData.yearOfBirth}
				onChange={handleChange}
				error={!!errors.yearOfBirth}
			/>
			{errors.yearOfBirth && <ErrorMessage>{errors.yearOfBirth}</ErrorMessage>}
			<Button type="submit">Добавить</Button>
		</Form>
	);
};

export default AddUser;

const Form = styled.form`
	max-width: 400px;
	margin: 0 auto;
	margin-top: 150px;
`;

const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
	border-radius: 4px;
	box-sizing: border-box;
`;

const ErrorMessage = styled.p`
	color: red;
	margin-bottom: 10px;
	font-family: Arial, Helvetica, sans-serif;
`;

const Select = styled.select`
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
	border-radius: 4px;
	box-sizing: border-box;
`;

const Button = styled.button`
	width: 400px;
	height: 40px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 20px;
	&:hover {
		background-color: #0056b3;
	}
`;
