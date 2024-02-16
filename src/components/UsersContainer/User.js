const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <div>{id} - {name}</div>
            <button>user details</button>
        </div>
    );
};

export {User};