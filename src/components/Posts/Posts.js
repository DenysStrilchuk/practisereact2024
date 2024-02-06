import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import {postService} from "../../services/postService";
import {PostDetails} from "../PostDetails/PostDetails";
import css from "../Posts/Posts.module.css"
const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data));
    }, []);

const getCurrentPost = (post) => {
    setPostDetails(post);
}

    return (
        <div className={css.Posts}>
            <div>
                {posts.map(post => <Post post={post} key={post.id} getCurrentPost={getCurrentPost}/>)}
            </div>
            <hr/>
            {postDetails && <PostDetails  postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};