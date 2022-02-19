import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios.get( API + "/snacks" )
    .then((res)=>{
      setSnacks(res.data.payload);
    }).catch((err)=>{
      console.log(err);
    })
  }, []);

  return (
    <div className="Snacks">
      {/* <section> */}
        <article>
          {snacks.map((snack) => {
            return <Snack key={snack.id} snack={snack} />
          })}
            {/* <div>{snack.image}</div>
            <div>{snack.is_healthy}</div>
            <div>{snack.name}</div> */}
        </article>
      {/* </section> */}
    </div>
  )
}

export default Snacks;