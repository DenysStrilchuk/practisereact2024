const Post = ({post, setPostsDetails}) => {
    const {id, title} = post;
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <button>Details</button>
        </div>
    );
};

export {Post};