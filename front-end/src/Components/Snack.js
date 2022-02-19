import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";
// import regular from "../assets/heart-regular.png";
// import solid from "../assets/heart-solid.png"



function Snack({ snack }) {
  return (
    <div className="Snack">
      <img src={snack.image} alt={snack.name}/>
      <Link to={`/snacks/${snack.id}`}>
        <h4>{snack.name}</h4>
        <h4><HeartHealth snackHealth={snack.is_healthy}/></h4>
      </Link>
      
      {/* <div>{snack.is_healthy ? (<span><img src={solid} alt=""/> </span>) : (<span><img src={regular} alt=""/> </span>)}</div> */}
    </div>
  )
}

export default Snack;