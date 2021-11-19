import React from "react";
import App from "../App";


const DisplaySupers = () => {
    return ( 
        <React.Fragment>
               <h2>SuperHeroes</h2>
        <hr />
        <ul>
            {props.superList.map((hero, index) => {
                return <li key={index} >{hero}</li>
            })}
            </ul>

        </React.Fragment>
     );
}
 
export default DisplaySupers ;