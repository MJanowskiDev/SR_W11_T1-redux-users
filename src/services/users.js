export const fetchUsers = (usersCount = 10) => {
    return fetch(`https://randomuser.me/api/?results=${usersCount}`).then((response) => response.json());
};
