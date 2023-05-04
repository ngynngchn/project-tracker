import { createHmac } from "crypto";
import { verifyToken } from "../utils/token.js";

export const encryptPassword = (req, _, next) => {
	const hmac = createHmac("sha256", req.body.password);
	req.body.password = hmac.digest("hex");
	next();
};

export const verifyJWTCookie = (req, res, next) => {
	const token = req.cookies.token;
	try {
		req.user = verifyToken(token);
		next();
	} catch (error) {
		console.error(error.message);
		res.sendStatus(401);
	}
};
