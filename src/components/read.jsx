// Import the Movies component from the local file
import { useEffect,useState } from "react";
import axios from 'axios';
import Movies from "./movies";

// Define the Read functional component
const Read = () => {
const [myMovies, setMovie] = useState([]);
const Reload = () => {
    console.log("Reloading movie data...");
        axios.get('http://localhost:3000/api/movies')
            .then((response) => {
                setMovie(response.data.myArray);
            })
            .catch((error) => {
                console.log("Error reloading data:", error);
            });
}
  // Create a constant 'data' containing an array of movie objects
  
// useEffect hook runs after the component renders
useEffect(() => {

  // Send a GET request to fetch movie data from the provided URL
  axios.get('http://localhost:3000/api/movies')
    .then((response) => {
      // Log the fetched movie array to the console for debugging
      console.log(response.data.myArray);

      // Update the state variable 'movie' with the fetched data
      setMovie(response.data.myArray);
    })
    // Catch any errors that occur during the request (empty here, but could log or handle errors)
    .catch();

  // Empty dependency array [] ensures this effect runs only once when the component mounts
}, []);

  // Return the JSX to render the component
  return (
    <div>
      {/* Display a heading for the component */}
      <h1>Hello from read component</h1> 

      {/* Render the Movies component and pass the movie data as props */}
      <Movies myMovies={myMovies} Reload={Reload}></Movies>
    </div>   
  );
}

// Export the Read component so it can be used in other parts of the app
export default Read;
