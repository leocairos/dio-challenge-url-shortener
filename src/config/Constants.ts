import 'dotenv-safe/config'

const apiUrl = process.env.API_URL;
const apiPort = process.env.API_PORT;

const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS; 
const mongoUrl = process.env.MONGO_URL; 
const mongoDB = process.env.MONGO_DATABASE; 

export const config = {
	API_URL: `${apiUrl}:${apiPort}`,
	MONGO_CONNECTION:
		`mongodb+srv://${mongoUser}:${mongoPass}@${mongoUrl}/${mongoDB}?retryWrites=true&w=majority`,
}
