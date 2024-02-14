import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/postsService";
import {Post} from "./Post";

const Posts = () => {
    const{state:{postId}} = useLocation();

    const [post, setPosts] = useState(null);

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPosts(data))
    }, []);
    return (
        <div>
            {post && <Post key={post.id} post={post}/>}
        </div>
    );
};

export {Posts};