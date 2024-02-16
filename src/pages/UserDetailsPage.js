import {Outlet, useParams} from "react-router-dom";

import {UserDetails} from "../components/UsersContainer/UserDetails";
import {useEffect, useState} from "react";
import {userService} from "../services/userService";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null)

    const {id} = useParams();

    useEffect(() => {
        userService.getById(id).then(({data}) => setUserDetails(data))
    }, [id]);

    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};