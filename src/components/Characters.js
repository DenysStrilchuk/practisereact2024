const Characters = ({character}) => {
    const {name, surname, age, info, photo} = character;
    return (
        <div>
            <h1>Personage: {name} {surname}</h1>
            <h2>Age: {age}</h2>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {Characters};