import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/postsService";

const Posts = () => {
    const{state:{postId}} = useLocation();

    const [post, setPosts] = useState(null);

    useEffect(() => {
        postsService.getById().then(({data}) => setPosts(data))
    }, []);
    return (
        <div>
            {post && <Post key={post.postId} post={post}/>}
        </div>
    );
};

export {Posts};