import {useEffect, useState} from "react";
import {usersService} from "../../services/usersService";
import {User} from "../UserContainer/User";
import {UserDetails} from "../UserDetails/UserDetails";
import css from "../UsersContainer/Users.module.css"

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetail] = useState(null);
    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data));
    }, []);
    return (
        <div className={css.users}>
            <div>
                {users.map(user => <User key={user.id} user={user} setUserDetail={setUserDetail}/>)}
            </div>
            <hr/>
            {userDetails && <UserDetails userDetails={userDetails}/>}
        </div>
    );
};

export {Users};