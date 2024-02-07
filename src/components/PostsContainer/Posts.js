import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {Post} from "../PostContainer/Post";
import {PostDetails} from "../PostDetails/PostDetails";
import css from "../PostsContainer/Posts-module.css"

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);
    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data));
    }, []);

    return (
        <div className={css.posts}>
            <div>
                {posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
            </div>
            <hr/>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};