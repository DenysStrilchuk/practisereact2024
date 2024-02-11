const Comment = ({comment}) => {
    const {id} = comment;
    return (
        <div>
            <div>{id}</div>
        </div>
    );
};

export {Comment};