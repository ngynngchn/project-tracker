import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import styled from "styled-components";

function DropdownMenu() {
	const [active, setActive] = useState(true);
	const navigate = useNavigate();
	const dropdownRef = useRef();

	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	const handleClick = () => setActive(!active);

	const logout = async () => {
		try {
			const response = await fetch(url + "/logout", { credentials: "include" });
			if (response.ok) {
				navigate("/");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Menu>
			<Trigger onClick={handleClick}></Trigger>
			<DropDown ref={dropdownRef} className={active ? "active" : "inactive"}>
				<Button>
					<Icon icon="fluent:dark-theme-20-filled" />
					Mode
				</Button>
				<Button onClick={() => navigate("/settings")}>
					<Icon icon="material-symbols:settings" />
					Settings
				</Button>
				<Button onClick={() => navigate("/profile")}>
					<Icon icon="iconamoon:profile-fill" />
					Profile
				</Button>
				<Button onClick={logout}>
					<Icon icon="material-symbols:logout-rounded" />
					Log out
				</Button>
			</DropDown>
		</Menu>
	);
}
// * ====================== STYLES ======================
const Trigger = styled.button`
	border-radius: 50%;
	border: 1px solid var(--accent-100);
	width: 50px;
	height: 50px;
	&:hover {
		border-color: var(--primary-300);
	}
`;

const Button = styled.button`
	border-radius: 4px;
	background-color: var(--accent-100);
	font-size: 0.8rem;
	width: 100%;
`;

const Menu = styled.div`
	position: relative;
`;

const DropDown = styled.section.attrs((props) => ({
	className: props.className,
}))`
	&.active {
		opacity: 0.9;
		visibility: visible;
		transform: translateY(0);
	}

	background-color: var(--bg-300);
	border-radius: 8px;
	position: absolute;
	bottom: 60px;
	left: 0;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 150px;
	z-index: 10;
	box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
	padding: 0.5rem;
	opacity: 0;
	visibility: hidden;
	transform: translateY(20px);
	transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`;

export default DropdownMenu;
