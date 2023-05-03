import React, { useState, useEffect, useRef } from "react";

import { Icon } from "@iconify/react";
import "../App.css";

function Timer({ setStart, setEnd, project_id }) {
	const [seconds, setSeconds] = useState(0);
	const [active, setActive] = useState(false);
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	useEffect(() => {
		if (!active) {
			clearInterval(intervalRef.current);
		} else {
			intervalRef.current = setInterval(() => {
				setSeconds((prevSeconds) => prevSeconds + 1);
			}, 1000);
		}
	}, [active]);

	useEffect(() => {
		const getSession = async () => {
			try {
				const result = await fetch(`${url}/session/${project_id}`);
				const data = await result.json();
				console.log("key", data.recent.hasOwnProperty("end"));
				if (
					!data.recent.hasOwnProperty("end") &&
					data.recent.hasOwnProperty("start")
				) {
					setActive(true);
					setSeconds(data.time);
				} else {
					// take the time from the last sessions to display
					setSeconds(data.time);
					clearInterval(intervalRef.current);
					setActive(false);
				}
				console.log("recent", data);
			} catch (err) {
				console.log(err);
			}
		};
		getSession();
	}, []);

	const intervalRef = useRef(null);

	const startSession = () => {
		setActive(true);
		setStart();
	};

	const pauseSession = () => {
		setActive(false);
		setEnd();
	};

	const formatTime = (time) => {
		const hours = Math.floor(time / 3600)
			.toString()
			.padStart(2, "0");
		const minutes = Math.floor((time % 3600) / 60)
			.toString()
			.padStart(2, "0");
		const seconds = (time % 60).toString().padStart(2, "0");
		return `${hours}:${minutes}:${seconds}`;
	};

	return (
		<div className="timer">
			<h4>{formatTime(seconds)}</h4>
			{active ? (
				<>
					<button onClick={pauseSession} title="Pause Session">
						<Icon icon="ic:round-pause-circle" />
					</button>
				</>
			) : (
				<button onClick={startSession} title="Start Session">
					<Icon icon="ic:outline-play-circle-filled" />
				</button>
			)}
		</div>
	);
}

export default Timer;
