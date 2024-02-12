import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {useEffect, useState} from "react";
import {carsService} from "../../services/carsService";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data));
    }, [trigger]);

    return (
        <div>
            <CarForm setCars={setCars} setTrigger={setTrigger}/>
            <hr/>
            <Cars cars={cars} setTrigger={setTrigger}  setCars={setCars()}/>
        </div>
    );
};

export {CarsContainer};