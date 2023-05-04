import { validationResult } from "express-validator";
import { getDb } from "../utils/db.js";
import { createToken } from "../utils/token.js";

const cookieConfig = {
	httpOnly: true,
	secure: true,
	sameSite: "none",
};

const COL = "users";

export const login = async (req, res) => {
	const user = req.body;
	try {
		const db = await getDb();
		const result = await db
			.collection(COL)
			.findOne({ email: user.email, password: user.password });
		if (result === null) {
			throw new Error("Invalid user or password");
		} else {
			const token = createToken(result._id);
			res.cookie("TOKEN", token, cookieConfig);
			res.status(200).json({ message: "Successfully logged in " });
		}
	} catch (error) {
		console.error(error);
		res.sendStatus(401);
	}
};

export const register = async (req, res) => {
	try {
		const validation = validationResult(req);
		if (!validation.isEmpty()) {
			throw new Error("Please enter a different password ");
		} else {
			const user = req.body;
			try {
				const db = await getDb();
				const result = await db.collection(COL).insertOne(user);
				res.status(201).send("User registered successfully");
			} catch (error) {
				console.error(error);
				res.status(500).send("Error inserting user");
			}
		}
	} catch (error) {
		console.error(error);
		res.status(500).send("Error registering user");
	}
};
