export const userSchema = {
	user: {
		trim: true,
		notEmpty: true,
		errorMessage: "Username is incorrect",
	},
	email: {
		isEmail: true,
	},
	password: { notEmpty: true, isStrongPassword: true },
};
