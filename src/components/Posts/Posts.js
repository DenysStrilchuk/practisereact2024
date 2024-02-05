import {useEffect, useState} from "react";
import {Post} from "../Post/Post";

const Posts = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    }, []);

    return (
        <div>
            {users.map(value => <Post item={value} key={value.id} btn={value}/>)}
        </div>
    );
};

export {Posts};