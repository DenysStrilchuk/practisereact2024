import {useEffect, useState} from "react";
import {launchesServices} from "../../services/launchesServices";
import {Launch} from "../LaunchContainer/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchesServices.getAll().then(({data}) => {
            const filtered = data.filter(item=>item.launch_year!=='2020');
            setLaunches(filtered)
        });
    }, []);
    return (
        <div>
            {launches.map(launch => <Launch key={launch.mission_name} launch={launch}/>)}
        </div>
    );
};

export {Launches};