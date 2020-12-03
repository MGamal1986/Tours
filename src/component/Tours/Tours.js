import React from "react";
import Tour from "./Tour";
function Tours({ tours, filter }) {
    console.log(tours);
    return (
        <div className="d-flex flex-column align-items-center">
            {tours.map((tour) => (
                <Tour key={tour.id} {...tour} filter={() => filter(tour.id)} />
            ))}
        </div>
    );
}

export default Tours;
