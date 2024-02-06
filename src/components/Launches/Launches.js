import {Launch} from "../Launch/Launch";
import {useEffect, useState} from "react";
import axios from "axios";

const Launches = () => {
   const [launches, setLaunches] = useState([]);
    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches/').then(value => value.data).then(value => setLaunches(value));
    }, []);


    return (
        <div>
            {launches.map(launch => {
                if (launch.launch_year !== '2020') {
                    return <Launch launch={launch} key={launch.mission_name}/>;
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export {Launches};