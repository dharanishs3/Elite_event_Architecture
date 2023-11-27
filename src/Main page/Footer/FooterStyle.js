// .foot{
//     background: linear-gradient(to right,rgb(66, 110, 221), #3498db, rgb(107, 206, 221));
//     opacity: 0.9;
// }
// #s-icons{
//     color: black;
// }
// Fliename - FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
	padding: 0.2% 2.5%;
	background: linear-gradient(to right,rgb(66, 110, 221), #3498db, rgb(107, 206, 221));
//     opacity: 0.9;
	// position: absolute;
	bottom: 0;
	width: 95%;
    height:400px

	@media (max-width: 1000px) {
		// padding: 70px 30px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: black;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;