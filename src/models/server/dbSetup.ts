import { db } from "../name";
import { databases } from "./config";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";

export default async function getOrcreateDB() {
	try {
		await databases.get(db), console.log("Database connected in first try block!!");
	} catch (error) {
		try {
			await databases.create(db, db),
				console.log("Database created in dbSetup at line 14!!");
			await Promise.all([
				console.log("Going to create question collection at dbSetup!!"),
				createQuestionCollection(),
				console.log("Going to create answer collection at dbSetup!!"),
				createAnswerCollection(),
				console.log("Going to create comment collection at dbSetup!!"),
				createCommentCollection(),
				console.log("Going to create Vote collection at dbSetup!!"),
				createVoteCollection(),
			]);
			console.log("All Collections created successfully!!!");
			console.log("Database created successfully in second try block!!!");
		} catch (error) {
			console.log("Error creating database or collection!!: " + error);
		}
	}
}
