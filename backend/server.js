import "./utils/config.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { checkSchema } from "express-validator";
import {
	addProject,
	getProjects,
	removeProject,
	addSession,
	endSession,
	getSession,
} from "./controller/controller.js";
import {
	encryptPassword,
	validatePassword,
	verifyJWTCookie,
} from "./middleware/authMiddleware.js";
import { login, logout, register } from "./controller/authController.js";
import { userSchema } from "./validation/userSchema.js";

const PORT = process.env.PORT;
const server = express();

//* ====== BODYPARSER =====
server.use(morgan("dev"));
server.use(express.json());
server.use(cookieParser());
server.use(cors({ origin: process.env.VITE_FRONTEND, credentials: true }));

//* ====== ROUTES ======
server.post("/api/v1/add", addProject);

server.get("/api/v1/projects", getProjects);
server.get("/api/v1/session/:id", getSession);

server.delete("/api/v1/delete", removeProject);

server.post("/api/v1/start-session", addSession);
server.post("/api/v1/end-session", endSession);

//* ====== AUTH ROUTES ======
server.post("/api/v1/login", encryptPassword, login);
server.get("/api/v1/logout", logout);
server.post(
	"/api/v1/register",
	validatePassword,
	checkSchema(userSchema),
	encryptPassword,
	register
);

server.get("/api/v1/validate", verifyJWTCookie, (_, res) =>
	res.sendStatus(200)
);

//* ====== SERVER ======
server.listen(PORT, () => console.log("Listening to Port:", PORT));
