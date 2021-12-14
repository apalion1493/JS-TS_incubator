function icreaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}


// test('test', () => {
//     let user: UserType = {
//         name: 'Name1',
//         age: 122
//     }
//
//     icreaseAge(user)
//
//     expect(user.age).toBe(123)
//
//     const newUser = user
//
//     newUser.age = 123123123
//
//     expect(user.age).toBe(123123123)
// })

test('test user', () => {
    let user: UserType = {
        name: 'Name1',
        age: 122,
        address: {
            title: 'City'
        }
    }

    let user2: UserType = {
        name: 'Name2',
        age: 123,
        address: {...user.address}
    }

    user2.address.title = 'lorem'

    expect(user2.address.title).toBe('lorem')
})