// export const UsersArray = ['Name1', 'Name2', 'Name3'];

export const UsersObj = {
    '0': 'Name1',
    '1': 'Name2',
    '2': 'Name3',
}

type UserType = {
    [key: string]: {id: number, name: string}
}

export const users: UserType = {
    '101': {id: 101, name: 'Name1'},
    '1212': {id: 1212, name: 'Name2'},
    '10231': {id: 10231, name: 'Name3'},
}

let user = {id: 100500, name: 'Name200'};

users[user.id] = user;
delete users[user.id];

export const usersArray = [
    {id: 101, name: 'Name1'},
    {id: 1212, name: 'Name2'},
    {id: 10231, name: 'Name3'},
]

usersArray.push(user)