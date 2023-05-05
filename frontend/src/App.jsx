import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/auth/register/Register";
import Authenticated from "./pages/Authenticated";
import Profile from "./pages/ProfilePage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/register" element={<Register />} />
					<Route path="/" element={<Login />} />
					<Route element={<Authenticated />}>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/profile" element={<Profile />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
