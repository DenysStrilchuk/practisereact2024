const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
        </div>
    );
};

export {Post};