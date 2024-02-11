import {useForm} from "react-hook-form";
import {usersService} from "../../services/usersService";

const UserForm = ({setUsers}) => {
    const {reset, register, handleSubmit} = useForm();

    const save = () => {
        usersService.create().then(({data}) => setUsers(data))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text"  placeholder={'name'} {...register('name')}/>
            <input type="text"  placeholder={'username'} {...register('username')}/>
            <input type="text"  placeholder={'email'} {...register('email')}/>
            <input type="text"  placeholder={'phone'} {...register('phone')}/>
            <input type="text"  placeholder={'website'} {...register('website')}/>
            <button>create</button>
        </form>
    );
};

export {UserForm};