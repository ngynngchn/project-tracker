import React, { useEffect, useState } from "react";
import { Outlet, Navigate, Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import DropdownMenu from "../components/DropdownMenu";

function Authenticated() {
	const [authorized, setauthorized] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url + "/validate", {
					credentials: "include",
				});
				if (!response.ok) {
					setauthorized(false);
					setIsLoading(false);
					navigate("/", { replace: true });
					throw new Error();
				} else {
					setauthorized(true);
					setIsLoading(false);
				}
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	if (isLoading) return <p>Is loading ...</p>;

	return (
		<div className="layout">
			<aside>
				<nav>
					<Link to="/dashboard">
						<Icon class="dashboard-icon" icon="ic:round-dashboard" />
					</Link>
					<DropdownMenu />
				</nav>
			</aside>
			{authorized ? <Outlet /> : <Navigate to="/" />}
		</div>
	);
}
export default Authenticated;
