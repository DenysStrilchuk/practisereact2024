import {carsService} from "../../services/carsService";

const Car = ({car, setTrigger}) => {
    const {id, brand, price, year} = car;

    const deleteById = (id) => {
        carsService.deleteById(id);
        setTrigger(prev => !prev);
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button>update</button>
            <button onClick={() => deleteById(id)}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};