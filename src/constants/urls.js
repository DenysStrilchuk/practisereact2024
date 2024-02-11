const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';

const urls = {
    users: {
        base: users,
        byId: `${users}/${id}`
    }
}

export {
    baseURL,
    urls
}