const Comment = ({comment}) => {
    const{postId, id, name, email, body} = comment;
    return (
        <div>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button>get post</button>
            <hr/>
        </div>
    );
};

export {Comment};