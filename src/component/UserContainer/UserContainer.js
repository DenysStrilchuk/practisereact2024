import {UserForm} from "./UserForm";
import {Users} from "./Users";
import {usersService} from "../../services/usersService";
import {useEffect, useState} from "react";

const UserContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data));
    }, []);
    return (
        <div>
            <UserForm/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UserContainer};