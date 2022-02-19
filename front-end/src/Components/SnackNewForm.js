import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    image: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    // is_healthy: false,
  });

  const addSnack = () => {
    axios
      .post(`${API}/snacks`, snack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  // const handleCheckboxChange = () => {
  //   setSnack({ ...snack, is_healthy: !snack.is_healthy });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack();
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          required
         />
         <label htmlFor="image">Image:</label>
         <input
           id="image"
          //  alt={}
           type="text"
           pattern="http[s]*://.+"
           placeholder="http://"
           onChange={handleTextChange}
         />
         <label htmlFor="fiber">Fiber:</label>
         <input
           id="fiber"
           type="number"
          //  value={snack.fiber}
           onChange={handleTextChange}
         />
         <label htmlFor="protein">Protein:</label>
         <input
           id="protein"
           type="number"
          //  value={snack.protein}
          onChange={handleTextChange}
         />
         <label htmlFor="added_sugar">Added Sugar:</label>
         <input
           id="added_sugar"
           type="number"
          //  value={snack.added_sugar}
          onChange={handleTextChange}
         />
         {/* <label htmlFor="is_healthy">Healthy</label>
         <input
           id="is_healthy"
           type="checkbox"
           onChange={handleCheckboxChange}
           checked={snack.is_healthy}
         /> */}

         <br />
         <input type="submit" />
      </form>
    </div>
  );
}

export default SnackNewForm;