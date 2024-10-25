import React from "react";
import { Link } from "react-router-dom";

function UserCard(props) {
	const { avatar, first_name, last_name, id } = props;

	return (
		<div>
			<img src={avatar} alt={`${first_name}s image`} />
			<h4>
				{first_name} {last_name}
			</h4>
			<Link to={`/${id}`}>More Info</Link>
		</div>
	);
}

export default UserCard;
