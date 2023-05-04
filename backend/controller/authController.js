import { getDb } from "../utils/db.js";
import { createToken } from "../utils/token.js";

const cookieConfig = {
	httpOnly: true,
	secure: true,
	sameSite: "none",
};

export const login = async (req, res) => {
	const user = req.body;
	try {
		const db = await getDb();
		const result = await db
			.collection("users")
			.findOne({ email: user.email, password: user.email });
		if (result === null) {
			throw new Error("Invalid user or password");
		} else {
			const token = createToken(result._id);
			res.cookie("TOKEN", token, cookieConfig);
			res.sendStatus(200).json({ message: "Successfully logged in " });
		}
	} catch (error) {
		console.error(error);
		res.sendStatus(401);
	}
};
