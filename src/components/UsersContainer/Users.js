import {useEffect, useState} from "react";
import {usersService} from "../../services/usersService";
import {User} from "../UserContainer/User";
import {usersAPIService} from "../../services/usersAPIService";

const Users = () => {
const {users, setUsers} = useState([]);
    useEffect(() => {
        usersAPIService.getAll().then(({data}) => setUsers(data));
    }, []);
    return (
        <div>
            {users.map(user => <User user={user}/>)}
        </div>
    );
};

export {Users};