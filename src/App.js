import React, { useState, useEffect } from "react";
import Tours from "./component/Tours/Tours";
import Title from "./component/Title/Title";
import Loading from "./component/Loading/Loading";
import data from "./data/data";
import Aux from "./hoc/Auxillary";
import Refresh from "./component/Refresh/Refresh";
function App() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    // fetching data form API
    const fetchData = (data) => {
        setLoading(true);
        setTimeout(() => {
            setTours(data);
            setLoading(false);
        }, 3000);
    };

    // fiter data when click on not interstig
    const fiterTours = (id) => {
        let newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    //  fetchinf data when mounting
    useEffect(() => {
        fetchData(data);
    }, []);

    return (
        <div className="App text-center">
            {loading ? (
                <Loading />
            ) : (
                <Aux>
                    {tours.length === 0 ? (
                        <Aux>
                            <Title title="no tours left" under={true} />
                            <Refresh click={() => fetchData(data)} />
                        </Aux>
                    ) : (
                        <Aux>
                            <Title title="our tours" under={true} />
                            <Tours tours={tours} filter={fiterTours} />
                        </Aux>
                    )}
                </Aux>
            )}
        </div>
    );
}

export default App;
