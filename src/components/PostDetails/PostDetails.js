const PostDetails = ({postDetails}) => {
    const {id, userId, title, body} = postDetails
    return (
        <div>
            <div>{id}</div>
            <div>{userId}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export {PostDetails};