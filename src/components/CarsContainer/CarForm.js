import {useForm} from "react-hook-form";

import {carsService} from "../../services/carsService";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {reset, register, handleSubmit, setValue} = useForm();
    carForUpdate =
    const save = (car) => {
        carsService.create(car)
        setTrigger(prev => !prev)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export {CarForm};