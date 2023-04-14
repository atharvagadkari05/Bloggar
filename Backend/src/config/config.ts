import dotenv from 'dotenv';

dotenv.config();

// MongoDB URI string (obtained from running locally or from mongoDB Atlas)
const MONGO_URL = process.env.MONGO_URI || 'mongodb://localhost:27017/testclamp';

// Define the Port at which the server shall run    
const SERVER_PORT = process.env.SERVER_PORT || '4000';

// Redis Port (Doesn't affect as currently we run on the default port)
const REDIS_PORT = process.env.REDIS_PORT || 6379;

// Config that is to be exported and used accross
export const config = {
    mongo:{
        url: MONGO_URL
    },
    server:{
        port: SERVER_PORT
    },
    redis:{
        port: REDIS_PORT
    }
}