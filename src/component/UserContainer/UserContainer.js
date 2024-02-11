import {UserForm} from "./UserForm";
import {Users} from "./Users";
import {usersService} from "../../services/usersService";
import {useState} from "react";

const UserContainer = () => {
    const [users, setUsers] = useState([]);

    return (
        <div>
            <UserForm/>
            <hr/>
            <Users/>
        </div>
    );
};

export {UserContainer};