// create.js

// Import the useState hook from React for managing component state
import { useState } from "react";
import axios
 from "axios";


// Define the Create functional component
function Create() {
  // Declare state variables for movie title, year, and poster URL
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading on form submit
  
  
  console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
  
  const movie = {
    title: title,
    year: year,
    poster: poster
  };

  axios.post('http://localhost:3000/api/movies', movie)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.data));
};


  // Render the form UI
  return (
    <div>
      <h2>This is my Create Component.</h2>

      {/* Form for adding a new movie */}
      <form onSubmit={handleSubmit}>
        
        {/* Movie Title Input */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input
            type="text"
            className="form-control"
            value={title} // Bind input value to title state
            onChange={(e) => setTitle(e.target.value)} // Update state on input change
          />
        </div>

        {/* Movie Year Input */}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input
            type="text"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        {/* Movie Poster Input */}
        <div className="form-group">
          <label>Add Movie Poster: </label>
          <input
            type="text"
            className="form-control"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

// Export the Create component as the default export
export default Create;
