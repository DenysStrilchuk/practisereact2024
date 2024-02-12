import {useEffect, useState} from "react";

import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carsService} from "../../services/carsService";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data));
    }, [trigger]);
    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsContainer};