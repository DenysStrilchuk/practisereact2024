import {useEffect, useState} from "react";
import {postService} from "../../services/postService";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data));
    }, []);

    return (
        <div>
            {posts.map(post => <Posts key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};