const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
        </div>
    );
};

export {User};