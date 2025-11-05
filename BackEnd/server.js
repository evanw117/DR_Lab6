// Import the Express framework to create a web server
import express from 'express';
const app = express(); // Initialize the Express application
const port = 3000; // Define the port number where the server will listen

// Import and enable CORS (Cross-Origin Resource Sharing)
// This allows requests from other domains (useful for frontend-backend communication)
import cors from 'cors';
app.use(cors());

// Set custom HTTP headers to handle CORS manually
// This provides more control over allowed origins, methods, and headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allowed HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allowed request headers
  next(); // Pass control to the next middleware
});

// Import body-parser to parse incoming request bodies
// It allows Express to read JSON and form data in POST requests
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(bodyParser.json()); // Parse JSON data

// Define a simple GET route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World'); // Send a response back to the client
});

// Define a GET endpoint that returns a JSON list of movies
app.get('/api/movies', (req, res) => {
  const myMovies = [
    {
      "Title": "Avengers: Infinity War (server)",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War (server)",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z (server)",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ];
  
  // Respond with a JSON object containing the movie array
  res.json({ myArray: myMovies });
});

// Define a POST endpoint for /api/movies
// It receives data from the client and logs it to the console
app.post('/api/movies', (req, res) => {
  console.log(req.body); // Print the body of the request to the console
  res.send('POST request to movies endpoint'); // Send a confirmation message
});

// Start the server and listen for incoming requests on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
