const Character = ({character}) => {
    const {results:{id,name}} = character;
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
        </div>
    );
};

export {Character};