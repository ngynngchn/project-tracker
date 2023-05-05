import { createHmac } from "crypto";
import { verifyToken } from "../utils/token.js";

export const encryptPassword = (req, _, next) => {
	delete req.body.confirmPassword;
	const hmac = createHmac("sha256", req.body.password);
	req.body.password = hmac.digest("hex");
	next();
};

export const verifyJWTCookie = (req, res, next) => {
	try {
		const token = req.cookies.TOKEN;
		req.user = verifyToken(token);
		next();
	} catch (error) {
		console.error(error.message);
		res.status(401).send("Unauthorized: Invalid or expired token");
	}
};

// Validate that the password and confirm password fields in the request body match
export const validatePassword = (req, res, next) => {
	const pwd = req.body.password;
	const cpwd = req.body.confirmPassword;
	try {
		if (pwd !== cpwd) {
			throw new Error("Passwords do not match! ");
		} else {
			next();
		}
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
};
