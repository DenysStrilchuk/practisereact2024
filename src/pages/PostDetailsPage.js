import {useEffect, useState} from "react";
import {postService} from "../services/postService";
import {PostDetails} from "../components/PostsContainer/PostDetails";
import {useParams} from "react-router-dom";

const PostDetailsPage = () => {
    const [postDetails, setPostDetails] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        postService.getById(id).then(({data}) => setPostDetails(data))
    }, [id]);
    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {PostDetailsPage};