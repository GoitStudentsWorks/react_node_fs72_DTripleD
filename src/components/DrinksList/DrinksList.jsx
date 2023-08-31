import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Li, Img, Div, P, P2, Ul, P3 } from "./DrinksList.styled";
import { ErrorPageWrapper } from "../../pages/ErrorPage/ErrorPage.styled";

const DrinksList = ({ drinks }) => {
	const location = useLocation();

	return (
		<>
			{drinks && Array.isArray(drinks) && drinks.length > 0 ? (
				<Ul>
					{drinks.map(({ _id, drink, drinkThumb, instructions }) => (
						<Li key={_id}>
							<Link to={`/recipe/${_id}`} state={{ from: location }}>
								<Img
									src={drinkThumb ? drinkThumb : "/public/plug-b.png"}
									alt={instructions}
									loading="lazy"
								/>
								<Div>
									<P>{drink}</P>
									<P2>Ingredients</P2>
								</Div>
							</Link>
						</Li>
					))}
				</Ul>
			) : (
				<>
					<P3>Unfortunately, there is no such cocktails.... 😭</P3>
					<ErrorPageWrapper></ErrorPageWrapper>
				</>
			)}
		</>
	);
};

DrinksList.propTypes = {
	drinks: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default DrinksList;
