const Characters = ({character}) => {
    const {id, name, status, species, type, gender, image} = character;
    return (
        <div>
            <h1>{id} - {name}</h1>
            <h2>{status}</h2>
            <p>{species}</p>
            <p>{type}</p>
            <p>{gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Characters};