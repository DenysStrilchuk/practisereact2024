import {useForm} from "react-hook-form";

import {carsService} from "../../services/carsService";
import {useEffect} from "react";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {reset, register, handleSubmit, setValue} = useForm();
    useEffect(() => {
        if (carForUpdate) {
            setValue('brand' )
        }
    }, []);
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