import React from "react";

const Details = (properties) => {
    console.log(properties);

    return(
        <div className="Details">
            <h3>{properties.name}</h3>
            <p>{properties.designation}</p>
        </div>
    )
}

export default Details;