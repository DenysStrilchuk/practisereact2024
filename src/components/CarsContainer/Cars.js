import {Car} from "./Car";

const Cars = ({cars, setTrigger, setCars}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};