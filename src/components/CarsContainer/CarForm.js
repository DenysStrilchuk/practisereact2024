import {useForm} from "react-hook-form";
import {carsService} from "../../services/carsService";

const CarForm = ({setCars, setTrigger}) => {
    const {reset, register, handleSubmit} = useForm();

    const save = async (car) => {
       await carsService.create(car);
       setTrigger(prev => !prev);
       reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
            <button>create</button>
        </form>
    );
};

export {CarForm};