import Modal from "react-modal";
import styled from "styled-components";

const DeleteConfirmModal = ({ isOpen, onRequestClose, onConfirm }) => {
	return (
		<StyledModalOverlay isOpen={isOpen} onRequestClose={onRequestClose}>
			<StyledModalContent>
				<TextFirstConfirm>Подтверждение Удаления</TextFirstConfirm>
				<TextSecondConfirm>
					Вы уверены, что хотите удалить эту запись?
				</TextSecondConfirm>
				<ButtonDelete onClick={onConfirm}>Удалить</ButtonDelete>
				<ButtonCancel onClick={onRequestClose}>Отмена</ButtonCancel>
			</StyledModalContent>
		</StyledModalOverlay>
	);
};

export default DeleteConfirmModal;

const StyledModalOverlay = styled(Modal)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledModalContent = styled.div`
	background-color: white;
	padding: 30px;
	border-radius: 8px;
	max-width: 400px;
	width: 100%;
	text-align: center;
`;

const TextFirstConfirm = styled.h2`
	position: relative;
	top: -5px;
	font-family: Arial, Helvetica, sans-serif;
	margin: 10px;
`;

const TextSecondConfirm = styled.p`
	font-family: Arial, Helvetica, sans-serif;
	margin: 4px;
`;

const ButtonDelete = styled.button`
	width: 100px;
	height: 30px;
	color: white;
	background-color: #4e1212;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	font-size: 20px;
	margin: 10px;
	position: relative;
	top: 7px;
	&:hover {
		background-color: #a03c3c;
	}
	&:active{
		background: red;
	}
`;

const ButtonCancel = styled.button`
	width: 100px;
	height: 30px;
	color: white;
	background-color: #00ff00;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	font-size: 20px;
	position: relative;
	top: 7px;
	&:hover {
		background-color: #16c216;
	}
`;
