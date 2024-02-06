import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import {postService} from "../../services/postService";
import {PostDetails} from "../PostDetails/PostDetails";

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
        <div>
            {posts.map(post => <Post post={post} key={post.id} getCurrentPost={getCurrentPost}/>)}
            <hr/>
            {postDetails != null && <PostDetails  postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};