const UserDetails = ({userDetails}) => {
    const {email, address: {street, suite, city}, phone, website} = userDetails;
    return (
        <div>
           <div>email: {email}</div>
           <div>street: {street}</div>
           <div>suite: {suite}</div>
           <div>city: {city}</div>
           <div>phone: {phone}</div>
           <div>website: {website}</div>
        </div>
    );
};

export {UserDetails};