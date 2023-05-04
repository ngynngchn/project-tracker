import jwt from "jsonwebtoken";

export const createToken = (userID) => {
	const token = jwt.sign({ user_id: userID }, process.env.JWT_SECRET, {
		expiresIn: "1h",
	});
	return token;
};

export const verifyToken = (token) => {
	const result = jwt.verify(token, process.env.JWT_SECRET);
	return result;
};
