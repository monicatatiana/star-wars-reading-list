import React from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown, Navbar, ButtonGroup } from "react-bootstrap";
import { Context } from "../store/appContext";

export const MyNavbar = () => {
	const { store, actions } = React.useContext(Context);

	return (
		<Navbar bg="light">
			<Link to="/">
				<Navbar.Brand href="#home">
					<span className="navbar-brand mb-0 ml-5 h1">
						<img src="https://img.icons8.com/color/64/000000/star-wars.png" />
					</span>
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end mr-5">
				<DropdownButton drop={"left"} variant="dark" title={"Favorites " + store.favorites.length}>
					{store.favorites.length == 0 ? (
						<Dropdown.Item>Empty</Dropdown.Item>
					) : (
						store.favorites.map((favorite, i) => {
							return (
								<Dropdown.Item eventKey={i} key={i} onClick={() => actions.deleteFavorite(i)}>
									{favorite.type == "people" ? (
										<div>
											<i className="fas fa-id-card">
												&nbsp;
												{favorite.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</div>
									) : (
										<div>
											<i className="fas fa-globe-americas">
												&nbsp;
												{favorite.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</div>
									)}
								</Dropdown.Item>
							);
						})
					)}
				</DropdownButton>
			</Navbar.Collapse>
		</Navbar>

		// <nav className="navbar navbar-dark bg-dark mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">
		// 			<img src="https://img.icons8.com/color/64/000000/star-wars.png" />
		// 		</span>
		// 	</Link>
		// 	<div className="ml-auto">

		// 			<button className="btn btn-primary">
		// 				Favorites <img src="https://img.icons8.com/fluent/25/000000/pixel-heart.png" />
		// 			</button>

		// 	</div>
		// </nav>

		//<Navbar bg="dark" variant="dark">
		//<Link to="/">
		//<Navbar.Brand>
		//<img src="https://img.icons8.com/color/64/000000/star-wars.png" />
		//</Navbar.Brand>
		//</Link>
		//<Navbar.Toggle />
		//<Navbar.Collapse className="justify-content-end">
		//<Navbar.Text>
		//<DropdownButton className="dropdown-basic-button" title="Favorites" />
		//{store.favorites}
		//</Navbar.Text>
		//</Navbar.Collapse>
		//</Navbar>
	);
};
