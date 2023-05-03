import React, { useState } from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function ProtectedRoutes() {
	const [authorized, setauthorized] = useState(true);

	return (
		<div className="layout">
			<aside>
				<nav>
					<Link to="/dashboard">
						<Icon icon="ic:round-dashboard" />
					</Link>
				</nav>
			</aside>
			{authorized ? <Outlet /> : <Navigate to="/" />}
		</div>
	);
}
export default ProtectedRoutes;
