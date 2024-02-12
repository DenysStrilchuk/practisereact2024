import {Car} from "./Car";

const Cars = ({cars, setTrigger}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setTrigger={setTrigger}/>)}
        </div>
    );
};

export {Cars};