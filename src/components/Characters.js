const Characters = ({name, surname, age, info, photo}) => {
    return (
        <div>
            <h1>{name} {surname}</h1>
            <h2>{age}</h2>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {Characters};