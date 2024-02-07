const User = ({user, setUserDetail}) => {
    const {id, name} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>Full name: {name}</div>
            <button onClick={()=>setUserDetail(user)}>Details</button>
        </div>
    );
};

export {User};