import { ObjectId } from "mongodb";
import { getDb } from "../utils/db.js";

const COL = "projects";

//* ADDING A PROJECT TO THE LIST
export const addProject = async (req, res) => {
	req.body.sessions = [];
	try {
		const db = await getDb();
		await db.collection(COL).insertOne(req.body);
		res.status(200).json({ message: "Saved new project" });
	} catch (err) {
		res
			.status(400)
			.json({ message: "Sorry there seems to be something wrong", err });
		throw new Error();
	}
};

//* GET AN ARRAY OF ALL PROJECTS
export const getProjects = async (_, res) => {
	try {
		const db = await getDb();
		const result = await db.collection(COL).find().toArray();
		res.json(result);
	} catch (err) {
		console.log(err);
		res.sendStatus(404);
	}
};

//* ADD A SESSION TO A SPECIFIC PROJECT
export const addSession = async (req, res) => {
	try {
		const db = await getDb();
		const index = await db
			.collection(COL)
			.findOne({ _id: new ObjectId(req.body.id) });
		console.log("index", index);
		const session = {
			session_id: index.sessions.length,
			start: new Date(),
		};
		const result = await db
			.collection(COL)
			.findOneAndUpdate(
				{ _id: new ObjectId(req.body.id) },
				{ $push: { sessions: session } },
				{ returnDocument: "after" }
			);
		let recent = result.value.sessions[result.value.sessions.length - 1];
		console.log(recent);
		res.status(200).json({
			message: "Started Session",
			recent,
		});
	} catch (error) {
		console.error(error);
		res.sendStatus(400);
	}
};

//* PAUSE A SESSION OF A SPECIFIC PROJECT
export const endSession = async (req, res) => {
	try {
		const db = await getDb();
		let end = new Date();
		const result = await db.collection(COL).findOneAndUpdate(
			{
				_id: new ObjectId(req.body.id),
				"sessions.session_id": req.body.session_id,
			},
			{ $set: { "sessions.$.end": end } },
			{ returnDocument: "after" }
		);
		console.log("result", result);
		let recent = result.value.sessions[result.value.sessions.length - 1];
		let time = calculateSeconds(result.value.sessions);

		res.status(200).json({
			message: "Paused Session",
			recent,
			time: time,
		});
	} catch (err) {
		console.error(err);
		res
			.status(400)
			.json({ message: "Sorry there seems to be something wrong", err });
	}
};

//* REMOVE A PROJECT
export const removeProject = async (req, res) => {
	console.log(req.body.id);
	try {
		const db = await getDb();
		const result = await db
			.collection(COL)
			.deleteOne({ _id: new ObjectId(req.body.id) });
		console.log(result);
		res.status(200).json({ message: "Deleted Project" });
	} catch (err) {
		console.log(err);
		res.sendStatus(400);
	}
};

//* GET THE INFORMATION ABOUT A SPECIFIC SESSION
export const getSession = async (req, res) => {
	const id = req.params.id;
	try {
		const db = await getDb();
		const result = await db.collection(COL).findOne({ _id: new ObjectId(id) });
		if (result.sessions.length !== 0) {
			let recent = result.sessions[result.sessions.length - 1];
			let time = calculateSeconds(result.sessions);
			res.status(200).json({ recent, time });
		}
	} catch (err) {
		console.log(err);
		res.sendStatus(400);
	}
};

//* FUNCTION TO GET THE TOTAL AMOUNT OF SECONDS SPEND ON THE PROJECT
function calculateSeconds(sessions) {
	let totalTime = 0;
	// if the sessions array is not empty calculate the seconds of each session
	if (sessions.length !== 0) {
		sessions.forEach((session) => {
			// if session has no property "end" means that the session has not finished yet and needs to continue from today new Date()
			if (session.hasOwnProperty("end")) {
				let seconds = Math.floor(
					(new Date(session.end) - new Date(session.start)) / 1000
				);
				totalTime += seconds;
			} else {
				let seconds = Math.floor((new Date() - new Date(session.start)) / 1000);
				totalTime += seconds;
			}
		});
	}
	console.log("total", totalTime);
	return totalTime;
}
