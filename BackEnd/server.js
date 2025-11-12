// Import the Express framework to create a web server
import express from 'express';
const app = express(); // Initialize the Express application
const port = 3000; // Define the port number where the server will listen

// Import and enable CORS (Cross-Origin Resource Sharing)
// This allows requests from other domains (useful for frontend-backend communication)
import cors from 'cors';
app.use(cors()); // Enable CORS for all incoming requests

// Set custom HTTP headers to handle CORS manually
// This provides more control over allowed origins, methods, and headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins (or specify domains here)
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allowed HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allowed request headers
  next(); // Pass control to the next middleware
});

// Import body-parser to parse incoming request bodies
// It allows Express to read JSON and form data in POST requests
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(bodyParser.json()); // Parse JSON data

// Import mongoose to interact with MongoDB database
import mongoose from 'mongoose';
// Connect to MongoDB using a connection string (ensure the MongoDB Atlas cluster is accessible)
mongoose.connect('mongodb+srv://admin:admin@cluster0.qxa1s2a.mongodb.net/?appName=Cluster0');

// Define the movie schema, which represents the structure of a movie document
const movieSchema = new mongoose.Schema({
  title: String,  // Movie title
  year: String,   // Movie release year
  poster: String  // URL of the movie poster
});

// Create a movie model based on the schema
const movieModel = mongoose.model('Movie', movieSchema);

// Define a simple GET route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World'); // Send a response back to the client
});

// Define a GET endpoint that returns a JSON list of movies
app.get('/api/movies', async (req, res) => {
  // Fetch all movies from the database
  const movies = await movieModel.find({});  // Get all movie records from MongoDB
  res.json({ myArray: movies }); // Respond with a JSON object containing the list of movies
});

// Define a GET endpoint for fetching a specific movie by its ID
app.get('/api/movie/:id', async (req, res) => {
  // Find a single movie by its ID (from the route parameter)
  const movie = await movieModel.findById(req.params.id);
  res.send(movie);  // Send the found movie document as a response
});

// Define a POST endpoint for creating a new movie
// It receives data from the client (in the request body) and stores it in the database
app.post('/api/movies', async (req, res) => {
  // Destructure the incoming data from the request body
  const { title, year, poster } = req.body;

  // Create a new movie document using the movie model
  const newMovie = new movieModel({ title, year, poster });

  // Save the new movie to the database
  await newMovie.save();
  console.log("movie saved");  // Log success message

  // Respond with a JSON object confirming the movie creation
  res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
})

// Start the server and listen for incoming requests on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log the server startup message
});
