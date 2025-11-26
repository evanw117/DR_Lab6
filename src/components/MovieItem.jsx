// Import the Card component from react-bootstrap
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
// Define the MovieItem functional component and accept props as a parameter
const MovieItem = (props) => {

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:3000/api/movie/' + props.mymovie._id)
            .then(() => {
                props.Reload(); // Refresh the movie list after deletion
            })
            //Error message pops up if not working 
            .catch((error) => {
                console.log("Error deleting movie:", error);
            });

        }

    return (
        <div>
            {/* Create a Bootstrap Card to display movie info */}
            <Card className="text-center">
                <Card.Body>
                    {/* Display the movie title */}
                    <Card.Title>{props.mymovie.title}</Card.Title>

                    {/* Display the movie poster image */}
                    <img src={props.mymovie.poster} />

                </Card.Body>

                {/* Display the movie release year in the card footer */}
                <Card.Footer className="text-muted">{props.mymovie.year}</Card.Footer>
                <Link className='btn btn-primary' to={"/edit/"+props.mymovie._id} >edit</Link>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Card>
        </div>
    );
}

// Export the component so it can be used in other files
export default MovieItem;
