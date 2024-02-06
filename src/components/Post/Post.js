const Post = ({post, getCurrentPost}) => {
const {id, title} = post;

    return (
        <div>
            <p>{id} - {title}</p>
            <button onClick={() => getCurrentPost(post)}>Details</button>
        </div>
    );
};

export {Post};