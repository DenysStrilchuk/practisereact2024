import {useForm} from "react-hook-form";
import {carsService} from "../../services/carsService";
import {useEffect} from "react";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {reset, register, handleSubmit, setValue} = useForm();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);
    const save = async (car) => {
       await carsService.create(car);
       setTrigger(prev => !prev);
       reset()
    }

    const update = async (car)  => {
        await carsService.updateById(carForUpdate.id, car);
        setTrigger(prev  => !prev)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
            <button>{carForUpdate?'update':'save'}</button>
        </form>
    );
};

export {CarForm};