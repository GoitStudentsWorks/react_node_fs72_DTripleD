import styled from "@emotion/styled";

export const UserPhotoWrapper = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: ${(props) => props.theme.colors.white};
`;

export const UserName = styled.p`
	font-size: 14px;
	margin: 0;
	color: ${(props) => props.theme.colors.white};
`;

export const MenuWrapper = styled.div`
	display: flex;

	align-items: center;

	gap: 8px;
`;

export const UserPhoto = styled.img`
	width: 32px;
	height: 32px;
`;

export const DropWrapper = styled.div`
	position: absolute;
	top: -15%;
	right: 0;

	@media (min-width: 768px) {
	}
`;
