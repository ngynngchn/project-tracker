import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route element={<ProtectedRoutes />}>
						<Route path="/dashboard" element={<Dashboard />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
