import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {useEffect, useState} from "react";
import {carsService} from "../../services/carsService";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data));
    }, []);

    return (
        <div>
            <CarForm setCars={setCars}/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsContainer};