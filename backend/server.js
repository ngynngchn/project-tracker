import "./utils/config.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import {
	addProject,
	getProjects,
	removeProject,
	addSession,
	endSession,
	getSession,
} from "./controller.js";

const PORT = process.env.PORT;
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors({ origin: process.env.VITE_FRONTEND }));

//* ====== ROUTES ======
server.post("/api/v1/add", addProject);

server.get("/api/v1/projects", getProjects);
server.get("/api/v1/session/:id", getSession);

server.delete("/api/v1/delete", removeProject);

server.post("/api/v1/start-session", addSession);
server.post("/api/v1/end-session", endSession);

//* ====== SERVER ======

server.listen(PORT, () => console.log("Listening to Port:", PORT));
