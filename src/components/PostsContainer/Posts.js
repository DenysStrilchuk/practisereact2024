import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/postsService";

const Posts = () => {
    const{state:{postId}} = useLocation();

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postsService.getById().then(({data}) => setPosts(data))
    }, []);
    return (
        <div>
            {posts && <Post key={post.id}/>}
        </div>
    );
};

export {Posts};