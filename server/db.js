import { MongoClient } from "mongodb";

// Connection URL
const uri = 'mongodb+srv://elormmegamind:cHWbXY0IlOJxN0q2@cluster0.afg5npq.mongodb.net/';

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    console.log('Connected to the MongoDB database');

    // Perform database operations
    // ...
  } catch (error) {
    console.error('Error occurred while connecting to the database:', error);
  }
}

// Call the connectToDatabase function to establish the connection
connectToDatabase();
