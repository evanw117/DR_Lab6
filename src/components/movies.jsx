// Import the MovieItem component from the local file
import MovieItem from './MovieItem';

// Define the Movies functional component and accept props as a parameter
const Movies = (props) => {
    // Map through the myMovies array and render a MovieItem for each movie
    return props.myMovies.map(
        (movie) => {
            // Pass each movie object as a prop called 'mymovie' to the MovieItem component
            return <MovieItem mymovie={movie}
            key={movie._id} Reload={props.Reload}></MovieItem>
        }
    );
}

// Export the Movies component so it can be used in other parts of the app
export default Movies;
