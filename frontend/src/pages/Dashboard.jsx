import React from "react";
import { useState } from "react";

import Overview from "../components/Overview";
import ActiveTimer from "../components/ActiveTimer";
function Dashboard() {
	const [today, setToday] = useState(new Date());

	return (
		<div className="dashboard-window">
			<header>
				<div className="greeting">
					<h2>DASHBOARD</h2>
					<p>Welcome back!</p>
				</div>
				<h2>{new Intl.DateTimeFormat().format(today)}</h2>
			</header>
			<main>
				<Overview />
				<ActiveTimer />
			</main>
		</div>
	);
}

export default Dashboard;
